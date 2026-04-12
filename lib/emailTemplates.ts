// 1. User Confirmation Email Template
export function confirmationEmailTemplate(
  name: string,
  _confirmationLink: string, // Kept to maintain signature but unused in simple design
  _currentStatus: string = ""
): string {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://thehalfbrick.com";
  const cdnUrl = process.env.R2_PUBLIC_URL || appUrl;

  // Important: Emails MUST use absolute URLs for images
  const logoUrl = `https://raw.githubusercontent.com/chandrasekar-velu23/thb-startup-connect/refs/heads/main/public/images/The%20Half%20Brick.png`;
  const heroImageUrl = `https://raw.githubusercontent.com/chandrasekar-velu23/thb-startup-connect/refs/heads/main/public/images/announcement.jpg`;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Application Received - Startup Connect Masterclass from The Half Brick</title>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          margin: 0; padding: 0; background-color: #ffffff; color: #1a1a1a; 
        }
        .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
        .header { margin-bottom: 40px; text-align: left; }
        .logo { max-height: 45px; width: auto; }
        .hero { width: 100%; height: auto; border-radius: 8px; margin-bottom: 32px; border: 1px solid #eee; }
        .content { line-height: 1.8; font-size: 16px; }
        h1 { font-size: 22px; font-weight: 700; margin-bottom: 24px; color: #000; }
        p { margin-bottom: 20px; color: #444; }
        .footer { margin-top: 60px; padding-top: 30px; border-top: 1px solid #efefef; font-size: 14px; color: #999; }
        .footer a { color: #C92515; text-decoration: none; }
        .signature { margin-top: 32px; font-weight: 600; color: #1a1a1a; }
        .brand-text { color: #C92515; }
      </style>
    </head>
    <body>
      <div class="container">

        
        <div class="content">
          <h1>Application Received</h1>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for your application to the <strong>Startup Connect Masterclass</strong> conducted by <strong>The Half Brick</strong>.</p>
          
          <p>We are pleased to confirm that your application has been successfully received. Our team is currently reviewing all submissions to curate a highly relevant cohort of early-stage founders and student entrepreneurs.</p>
          
          <p>As seats for this session are limited, participants will be selected based on alignment with the program objectives. You will receive an update on your application status shortly, along with further details if selected.</p>
    
        
          <p>We appreciate your interest in learning with <strong>The Half Brick</strong> and look forward to the possibility of having you join us.</p>
          
          <div class="signature">
            Best Regards,<br>
            <p>Team The half brick <p>
          </div>
        </div>

        <div class="header">
          <img src="${logoUrl}" alt="The Half Brick" class="logo" onerror="this.src='https://thehalfbrick.com'">
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} The Half Brick. All rights reserved.</p>
          <p>
            <a href="https://thehalfbrick.com">Official Website</a> | 
            <a href="https://linkedin.com/company/thehalfbrick">LinkedIn</a> | 
            <a href="mailto:connect@thehalfbrick.com">Support</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// 2. Admin Notification Email Template
export function adminNotificationTemplate(
  name: string,
  email: string,
  phone: string,
  currentStatus: string,
  description: string,
  linkedin: string,
  portfolio: string,
  referralSource: string,
  otherReferral: string | undefined,
  reason: string,
  businessIdea?: string
): string {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://thehalfbrick.com";

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: sans-serif; background: #f4f4f4; padding: 20px; }
        .card { background: white; max-width: 550px; margin: 0 auto; border-radius: 8px; border: 1px solid #ddd; overflow: hidden; }
        .header { background: #333; color: white; padding: 20px; text-align: center; }
        .row { border-bottom: 1px solid #eee; padding: 15px 20px; }
        .label { font-size: 12px; color: #888; text-transform: uppercase; margin-bottom: 4px; }
        .value { font-size: 15px; color: #111; font-weight: 500; }
        .section-title { background: #fafafa; padding: 10px 20px; font-size: 13px; font-weight: bold; color: #444; border-bottom: 1px solid #eee; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h2 style="margin:0;">New Registration Received</h2>
        </div>
        
        <div class="section-title">Personal Information</div>
        <div class="row"><div class="label">Name</div><div class="value">${name}</div></div>
        <div class="row"><div class="label">Email</div><div class="value">${email}</div></div>
        <div class="row"><div class="label">Phone</div><div class="value">${phone}</div></div>
        
        <div class="section-title">Professional Context</div>
        <div class="row"><div class="label">Current Status</div><div class="value">${currentStatus}</div></div>
        <div class="row"><div class="label">Objective</div><div class="value">${description}</div></div>
        ${businessIdea ? `<div class="row"><div class="label">Business Idea</div><div class="value">${businessIdea}</div></div>` : ''}
        <div class="row"><div class="label">LinkedIn</div><div class="value"><a href="${linkedin}">${linkedin}</a></div></div>
        <div class="row"><div class="label">Portfolio</div><div class="value"><a href="${portfolio}">${portfolio}</a></div></div>
        
        <div class="section-title">Marketing & Intent</div>
        <div class="row"><div class="label">Attribution</div><div class="value">${referralSource}${referralSource === 'Other' && otherReferral ? `: ${otherReferral}` : ''}</div></div>
        <div class="row"><div class="label">Reason for Attending</div><div class="value">${reason}</div></div>
        
        <div style="padding: 20px; text-align: center; background: #fafafa; font-size: 12px; color: #999;">
          Timestamp: ${new Date().toLocaleString()}
        </div>
      </div>
    </body>
    </html>
  `;
}

