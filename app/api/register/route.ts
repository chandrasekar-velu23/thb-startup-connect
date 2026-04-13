import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sendConfirmationEmail, sendAdminNotification } from "@/lib/email";
import { validateRegistration } from "@/lib/validation";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input
    const validation = validateRegistration(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: "Validation failed", errors: validation.errors },
        { status: 400 }
      );
    }

    // Connect to Google Sheets via Google Apps Script instead of MongoDB
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    let registrationId = uuidv4(); // Generate a unique ID for session
    let existingUser = false;

    if (scriptUrl) {
      try {
        const response = await fetch(scriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...body, registrationId }),
        });

        const result = await response.json();
        
        // If the App Script throws an error about duplicates
        if (result.success === false && result.exists === true) {
          existingUser = true;
        }
      } catch (err) {
        console.error("Failed to send data to Google Apps Script:", err);
        // We will continue even if sheet insert fails, to at least send the emails.
      }
    } else {
      console.warn("GOOGLE_APPS_SCRIPT_URL environment variable is missing.");
    }

    if (existingUser) {
      return NextResponse.json(
        {
          message:
            "This email is already registered. Check your email for confirmation details.",
        },
        { status: 400 }
      );
    }

    // Setup session cookie
    cookies().set("registered_session_id", registrationId, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year cookie session
      httpOnly: false, // Must be readable front-end for modal block
    });

    // Optimized Path: Return response IMMEDIATELY after sheet sync
    const confirmationLink = `${process.env.NEXT_PUBLIC_APP_URL}/confirm/${registrationId}`;

    // Await emails to ensure delivery before the function terminates (critical for serverless)
    try {
      await Promise.all([
        sendConfirmationEmail(body.email, body.name, confirmationLink, body.currentStatus),
        sendAdminNotification(
          body.name,
          body.email,
          body.phone,
          body.currentStatus,
          body.description,
          body.linkedin,
          body.portfolio,
          body.businessType,
          body.referralSource || "Internal",
          body.otherReferral || "",
          body.reason
        ),
      ]);
    } catch (emailError) {
      console.error("Non-blocking Email Error (User still registered):", emailError);
      // We don't want to fail the whole request if only emails failed, 
      // but we log it for admin investigation.
    }

    return NextResponse.json(
      {
        message: "Registration successful!",
        registrationId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
