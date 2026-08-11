import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import connectMongoDB from "@/lib/mongodb";
import Contact from "@/models/contact";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, phone, service, message } = body;

    // --------------------------------
    // Basic Validation
    // --------------------------------

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 },
      );
    }

    // --------------------------------
    // Connect MongoDB
    // --------------------------------

    await connectMongoDB();

    // --------------------------------
    // Save Contact Enquiry
    // --------------------------------

    const contact = await Contact.create({
      name,
      email,
      phone,
      service,
      message,
    });

    // --------------------------------
    // Hostinger SMTP
    // --------------------------------

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // --------------------------------
    // Verify SMTP Connection
    // --------------------------------

    await transporter.verify();

    // --------------------------------
    // Send Notification Email
    // --------------------------------

    await transporter.sendMail({
      from: `"WebXArtist Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,

      replyTo: email,

      subject: `New Contact Enquiry - ${service}`,

      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8" />
          <title>New Contact Enquiry</title>
        </head>

        <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">

          <div style="max-width:650px;margin:40px auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

            <!-- Header -->

            <div style="background:#080a20;padding:30px;text-align:center;">

              <h1 style="margin:0;color:#ffffff;font-size:26px;">
                WebXArtist
              </h1>

              <p style="margin:8px 0 0;color:#94a3b8;font-size:14px;">
                New Website Contact Enquiry
              </p>

            </div>

            <!-- Content -->

            <div style="padding:30px;">

              <h2 style="margin-top:0;color:#111827;">
                New Lead Received
              </h2>

              <p style="color:#6b7280;font-size:15px;line-height:1.6;">
                Someone has submitted a new enquiry through the WebXArtist website.
              </p>

              <!-- Details -->

              <table style="width:100%;border-collapse:collapse;margin-top:25px;">

                <tr>
                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#374151;">
                    Name
                  </td>

                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#111827;">
                    ${name}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#374151;">
                    Email
                  </td>

                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#111827;">
                    ${email}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#374151;">
                    Phone
                  </td>

                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#111827;">
                    ${phone}
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#374151;">
                    Service
                  </td>

                  <td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#111827;">
                    ${service}
                  </td>
                </tr>

              </table>

              <!-- Message -->

              <div style="margin-top:25px;">

                <h3 style="color:#374151;margin-bottom:10px;">
                  Message
                </h3>

                <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:18px;color:#374151;line-height:1.7;">
                  ${message}
                </div>

              </div>

              <!-- Action -->

              <div style="margin-top:30px;text-align:center;">

                <a
                  href="mailto:${email}"
                  style="display:inline-block;background:#06b6d4;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:7px;font-weight:bold;"
                >
                  Reply to Customer
                </a>

              </div>

            </div>

            <!-- Footer -->

            <div style="background:#f8fafc;padding:20px;text-align:center;border-top:1px solid #e5e7eb;">

              <p style="margin:0;color:#64748b;font-size:13px;">
                This notification was generated automatically by
                <strong>webxartist.com</strong>
              </p>

            </div>

          </div>

        </body>
        </html>
      `,
    });

    // --------------------------------
    // Success
    // --------------------------------

    return NextResponse.json(
      {
        success: true,
        message:
          "Your enquiry has been submitted successfully. We will contact you shortly.",
        id: contact._id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Your enquiry was received, but we could not send the email notification.",
      },
      { status: 500 },
    );
  }
}
