export function confirmationEmailTemplate(
  name: string,
  confirmationLink: string,
  currentStatus: string = ""
): string {
  const appUrl = process.env.APP_URL || "https://thehalfbrick.com";
  // 6:00 PM IST is 12:30 PM UTC
  const calLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+Half+Brick+Masterclass&dates=20260503T123000Z/20260503T140000Z&details=${encodeURIComponent('Live Masterclass Session. Join Link: ' + confirmationLink)}&location=Online`;

  const getContextualMessage = (status: string) => {
    switch (status) {
      case "Founder":
        return "<p>As a <strong style='color: #333;'>Founder</strong>, you know the hustle. We're excited to help you scale your vision and navigate the challenges ahead.</p>";
      case "Student":
        return "<p>As a <strong style='color: #333;'>Student</strong>, getting an early start is everything. We are thrilled to help you kickstart your journey into the ecosystem.</p>";
      case "Working Professional":
        return "<p>As a <strong style='color: #333;'>Working Professional</strong>, finding the right pivot or next step is crucial. We look forward to discussing the path forward.</p>";
      default:
        return "<p>We are excited to have you join us and explore new opportunities together.</p>";
    }
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #4A4A4A;
          background: #f5f5f5;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .header {
          text-align: center;
          padding: 30px;
          background: #FAFAFA;
          border-bottom: 4px solid #C92515;
        }
        .header h1 {
          color: #333333;
          margin: 0;
          font-size: 24px;
          font-weight: 700;
        }
        .header p {
          color: #C92515;
          margin: 5px 0 0 0;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .content {
          padding: 30px 40px;
        }
        .content h2 {
          color: #333333;
          font-size: 22px;
          margin-top: 0;
        }
        .content p {
          color: #666666;
          margin: 15px 0;
        }
        .cta-button {
          display: inline-block;
          background: #C92515;
          color: white !important;
          padding: 14px 35px;
          text-decoration: none;
          border-radius: 6px;
          margin: 25px 0 15px 0;
          font-weight: 600;
          font-size: 16px;
          box-shadow: 0 4px 12px rgba(201, 37, 21, 0.2);
        }
        .cal-button {
          display: inline-block;
          color: #C92515;
          text-decoration: underline;
          font-weight: 600;
          font-size: 14px;
        }
        .footer {
          border-top: 1px solid #E5E7EB;
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #999;
          background: #FAFAFA;
        }
        .highlight {
          color: #C92515;
          font-weight: 700;
        }
        .details-box {
          background: #FAFAFA;
          border-left: 4px solid #E5E7EB;
          padding: 15px 20px;
          margin: 20px 0;
          border-radius: 0 6px 6px 0;
        }
        ul {
          padding-left: 20px;
          color: #666666;
        }
        li {
          margin-bottom: 8px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>The Half Brick</h1>
          <p>Masterclass Confirmation</p>
        </div>

        <div class="content">
          <center>
            <img src="${appUrl}/images/announcement.jpg" alt="Masterclass Announcement" style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 25px;" />
          </center>

          <h2>Welcome, ${name}!</h2>
          <p>Thank you for applying to attend our exclusive masterclass.</p>
          
          <p>Your seat has been <span class="highlight">reserved</span>!</p>

          ${getContextualMessage(currentStatus)}

          <div class="details-box">
            <h3 style="margin-top: 0; color: #333;">Event Details:</h3>
            <ul style="margin-bottom: 0;">
              <li><strong>Date:</strong> Sunday, May 3rd, 2026</li>
              <li><strong>Time:</strong> 6:00 PM – 7:30 PM IST</li>
              <li><strong>Duration:</strong> 90 Minutes</li>
              <li><strong>Format:</strong> Live Masterclass (Limited Seats)</li>
            </ul>
          </div>

          <p>Click the button below to confirm your attendance and get the meeting link:</p>
          
          <center>
            <a href="${confirmationLink}" class="cta-button">Confirm My Seat</a>
            <br/>
            <a href="${calLink}" class="cal-button" target="_blank"> Add to Google Calendar</a>
          </center>

          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 25px;">
            Or copy this link securely: ${confirmationLink}
          </p>

          <h3 style="color: #333; margin-top: 35px;">Important Notes:</h3>
          <ul>
            <li>This is a <span class="highlight">closed-door, limited-attendance</span> masterclass</li>
            <li>No replays will be available</li>
            <li>Only serious builders welcome</li>
            <li>We'll send you the live link 24 hours before the event</li>
          </ul>

          <p>If you have any questions, reply to this email.</p>

          <div style="margin-top: 40px; padding-top: 25px; border-top: 1px solid #E5E7EB;">
            <p style="margin-bottom: 15px; color: #333;">Warm Regards,</p>
            <img src="${appUrl}/images/Startup_connect%20Logo.png" alt="Startup Connect Logo" style="height: 40px; width: auto; display: block;" onerror="this.style.display='none'" />
            <p style="margin-top: 8px; color: #666; font-size: 14px;"><strong>The Half Brick Team</strong></p>
          </div>
        </div>

        <div class="footer">
          <p>© 2026 The Half Brick. All rights reserved.</p>
          <p>You're receiving this email because you applied for our masterclass.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function adminNotificationTemplate(
  name: string,
  email: string,
  phone: string,
  currentStatus: string,
  description: string,
  linkedin: string,
  portfolio: string,
  reason: string
): string {
  const appUrl = process.env.APP_URL || "https://thehalfbrick.com";

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #4A4A4A;
          background: #f5f5f5;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          overflow: hidden;
        }
        .info-box {
          background: #FAFAFA;
          border-left: 3px solid #C92515;
          padding: 15px;
          margin: 12px 20px;
          border-radius: 0 4px 4px 0;
        }
        .label {
          color: #999999;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        .value {
          color: #333333;
          font-size: 16px;
          font-weight: 700;
          margin-top: 5px;
        }
        .header {
          background: #FAFAFA;
          padding: 25px 20px;
          text-align: center;
          border-bottom: 4px solid #C92515;
        }
        .header h2 {
          margin: 0;
          font-size: 20px;
          color: #333333;
        }
        .header p {
          margin: 5px 0 0 0;
          color: #C92515;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Masterclass Registration</h2>
          <p>Timestamp: ${new Date().toLocaleString('en-IN')}</p>
        </div>

        <div style="padding: 10px 0;">
          <div class="info-box">
            <div class="label">Name</div>
            <div class="value">${name}</div>
          </div>

          <div class="info-box">
            <div class="label">Email</div>
            <div class="value">${email}</div>
          </div>

          <div class="info-box">
            <div class="label">Phone (WhatsApp)</div>
            <div class="value">${phone}</div>
          </div>

          <div class="info-box">
            <div class="label">Current Status</div>
            <div class="value">${currentStatus}</div>
          </div>

          <div class="info-box">
            <div class="label">Description</div>
            <div class="value">${description}</div>
          </div>

          <div class="info-box">
            <div class="label">LinkedIn Profile URL</div>
            <div class="value">${linkedin !== 'Not provided' ? `<a href="${linkedin}" style="color: #C92515;">${linkedin}</a>` : '<span style="color: #999; font-weight: normal;">Not provided</span>'}</div>
          </div>

          <div class="info-box">
            <div class="label">Portfolio / Company URL</div>
            <div class="value">${portfolio !== 'Not provided' ? `<a href="${portfolio}" style="color: #C92515;">${portfolio}</a>` : '<span style="color: #999; font-weight: normal;">Not provided</span>'}</div>
          </div>

          <div class="info-box" style="border-left-color: #E5E7EB;">
            <div class="label">Reason for Attending</div>
            <div class="value" style="font-weight: normal; color: #666666;">"${reason}"</div>
          </div>
        </div>

        <div style="text-align: center; margin: 30px 0; padding-top: 20px; border-top: 1px solid #E5E7EB;">
          <img src="${appUrl}/images/Startup_connect%20Logo.png" alt="Startup Connect Logo" style="height: 30px; width: auto;" onerror="this.style.display='none'" />
          <p style="color: #999; font-size: 12px; margin-top: 10px;">© 2026 The Half Brick Admin System</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function reminderEmailTemplate(name: string): string {
  const appUrl = process.env.APP_URL || "https://thehalfbrick.com";

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #4A4A4A;
          background: #f5f5f5;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          overflow: hidden;
        }
        .header {
          background: #FAFAFA;
          padding: 30px;
          text-align: center;
          border-bottom: 4px solid #C92515;
        }
        .header h1 {
          margin: 0;
          font-size: 26px;
          color: #333333;
        }
        .header p {
          color: #C92515;
          margin: 8px 0 0 0;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .content {
          padding: 30px 40px;
        }
        .content h2 {
          color: #333333;
          margin-top: 0;
        }
        .content p {
          color: #666666;
          margin: 15px 0;
        }
        .event-details {
          background: #FAFAFA;
          border-left: 4px solid #C92515;
          padding: 20px;
          margin: 25px 0;
          border-radius: 0 6px 6px 0;
        }
        .event-details p {
          margin: 8px 0;
          color: #333;
        }
        ul {
          color: #666666;
          padding-left: 20px;
        }
        li {
          margin-bottom: 10px;
        }
        .footer {
          border-top: 1px solid #e5e7eb;
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #999;
          background: #FAFAFA;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>The Half Brick</h1>
          <p>Your Reminder is Here!</p>
        </div>

        <div class="content">
          <center>
            <img src="${appUrl}/images/announcement.jpg" alt="Masterclass Announcement" style="max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 25px;" />
          </center>

          <h2>Hi ${name},</h2>
          <p>This is your reminder that our exclusive masterclass is happening <strong style="color: #C92515;">TODAY</strong>!</p>

          <div class="event-details">
            <h3 style="margin-top: 0; color: #333;">Event Details:</h3>
            <p><strong>Time:</strong> 6:00 PM – 8:00 PM IST</p>
            <p><strong>Duration:</strong> 2 Hours</p>
            <p><strong>Link:</strong> Check your inbox for the live link</p>
          </div>

          <h3 style="color: #333;">Before You Join:</h3>
          <ul>
            <li>Ensure you have a stable internet connection</li>
            <li>Minimize distractions</li>
            <li>Have a notebook ready to take notes</li>
            <li>Join 5 minutes early so you don't miss the intro</li>
          </ul>

          <div style="margin-top: 40px; padding-top: 25px; border-top: 1px solid #E5E7EB;">
            <p style="margin-bottom: 15px; color: #333;">See you in a few hours!</p>
            <img src="${appUrl}/images/Startup_connect%20Logo.png" alt="Startup Connect Logo" style="height: 40px; width: auto; display: block;" onerror="this.style.display='none'" />
            <p style="margin-top: 8px; color: #666; font-size: 14px;"><strong>The Half Brick Team</strong></p>
          </div>
        </div>

        <div class="footer">
          <p>© 2026 The Half Brick. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
