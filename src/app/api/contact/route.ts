import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to you (site owner)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "patcharaponpaweenanan@gmail.com",
      replyTo: email,
      subject: `📬 New message from ${name} — Portfolio Contact`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; border-radius: 16px; overflow: hidden; border: 1px solid #27272a;">
          <div style="background: linear-gradient(135deg, #4f46e5, #7c3aed); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Message</h1>
          </div>
          <div style="padding: 32px;">
            <div style="margin-bottom: 24px;">
              <p style="color: #a1a1aa; font-size: 12px; text-transform: uppercase; margin: 0 0 4px;">From</p>
              <p style="color: #e4e4e7; font-size: 16px; margin: 0;">${name}</p>
            </div>
            <div style="margin-bottom: 24px;">
              <p style="color: #a1a1aa; font-size: 12px; text-transform: uppercase; margin: 0 0 4px;">Email</p>
              <p style="color: #818cf8; font-size: 16px; margin: 0;">
                <a href="mailto:${email}" style="color: #818cf8; text-decoration: none;">${email}</a>
              </p>
            </div>
            <div style="margin-bottom: 24px;">
              <p style="color: #a1a1aa; font-size: 12px; text-transform: uppercase; margin: 0 0 4px;">Message</p>
              <div style="background: #18181b; border-radius: 12px; padding: 20px; border: 1px solid #27272a;">
                <p style="color: #d4d4d8; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>
          <div style="padding: 16px 32px; background: #18181b; text-align: center;">
            <p style="color: #52525b; font-size: 12px; margin: 0;">Sent from your Portfolio website</p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
