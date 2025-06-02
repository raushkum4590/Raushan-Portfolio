import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Default sender (you can customize this)
      to: ['3570kumarraushan@gmail.com'], // Your email where you want to receive messages
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; color: white; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Message</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea;">Name:</strong>
              <p style="margin: 5px 0; color: #333;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea;">Email:</strong>
              <p style="margin: 5px 0; color: #333;">
                <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea;">Message:</strong>
              <div style="margin: 10px 0; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #667eea; border-radius: 5px; color: #333; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            
            <p style="color: #666; font-size: 14px; margin: 0;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        </div>
      `,
      // Also include a plain text version
      text: `
New Contact Form Message

From: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from your portfolio website contact form.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully!',
        id: data.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}