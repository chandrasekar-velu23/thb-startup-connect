import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASSWORD,
  ADMIN_EMAIL,
  APP_URL,
} = process.env;

// Create a transporter instance
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: parseInt(SMTP_PORT || "587"),
  secure: SMTP_PORT === "465", // true for 465, false for other ports
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
    console.log("SMTP server is ready to send emails");
  }
});

export async function sendConfirmationEmail(
  email: string,
  name: string,
  confirmationLink: string,
  currentStatus?: string
) {
  try {
    const { confirmationEmailTemplate } = await import("./emailTemplates");

    const html = confirmationEmailTemplate(name, confirmationLink, currentStatus);

    await transporter.sendMail({
      from: SMTP_USER,
      to: email,
      subject: "Confirm Your Attendance - The Half Brick Masterclass",
      html,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending confirmation email:", error);
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
      description,
      linkedin,
      portfolio,
      referralSource,
      otherReferral,
      reason
    );

    await transporter.sendMail({
      from: SMTP_USER,
      to: ADMIN_EMAIL,
      subject: `New Registration: ${name}`,
      html,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending admin notification:", error);
    return { success: false, error };
  }
}

export default transporter;
