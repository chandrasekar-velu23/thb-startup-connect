import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASSWORD,
  ADMIN_EMAIL,
  APP_URL,
} = process.env;

// Create a transporter instance with connection pooling
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: parseInt(SMTP_PORT || "587"),
  secure: SMTP_PORT === "465", // true for 465, false for other ports
  pool: true, // maintain persistent connections
  maxConnections: 5,
  maxMessages: 100,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error("SMTP connection error:", error);
  } else if (success) {
    console.log("SMTP server is ready to send emails (Pool enabled)");
  }
});

/**
 * Robust email sending wrapper with retry logic
 */
async function sendMailWithRetry(mailOptions: nodemailer.SendMailOptions, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(`Email sent successfully: ${info.messageId} (Attempt ${i + 1})`);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error(`Attempt ${i + 1} failed sending email to ${mailOptions.to}:`, error);
      if (i === retries - 1) throw error; // Re-throw if it was the last attempt
      // Exponential backoff
      await new Promise((resolve) => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
}

export async function sendConfirmationEmail(
  email: string,
  name: string,
  confirmationLink: string,
  currentStatus?: string
) {
  try {
    const { confirmationEmailTemplate } = await import("./emailTemplates");
    const html = confirmationEmailTemplate(name, confirmationLink, currentStatus);

    return await sendMailWithRetry({
      from: SMTP_USER,
      to: email,
      subject: "Confirm Your Attendance - The Half Brick Masterclass",
      html,
    });
  } catch (error) {
    console.error("Critical: Failed to send confirmation email after retries:", error);
    return { success: false, error };
  }
}

export async function sendAdminNotification(
  name: string,
  email: string,
  phone: string,
  currentStatus: string,
  description: string,
  linkedin: string,
  portfolio: string,
  businessType: string | undefined,
  referralSource: string,
  otherReferral: string | undefined,
  reason: string
) {
  try {
    const { adminNotificationTemplate } = await import("./emailTemplates");

    const html = adminNotificationTemplate(
      name,
      email,
      phone,
      currentStatus,
      businessType ? `${description} (${businessType})` : description,
      linkedin,
      portfolio || "Not provided",
      referralSource,
      otherReferral,
      reason
    );

    return await sendMailWithRetry({
      from: SMTP_USER,
      to: ADMIN_EMAIL,
      subject: `New Registration: ${name}`,
      html,
    });
  } catch (error) {
    console.error("Critical: Failed to send admin notification after retries:", error);
    return { success: false, error };
  }
}

export default transporter;
