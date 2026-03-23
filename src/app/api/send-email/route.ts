import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('API route called');
    
    const body = await request.json();
    console.log('Request body:', body);
    
    const { 
      to_email, 
      from_name, 
      from_email, 
      phone, 
      reading_type, 
      preferred_datetime, 
      message 
    } = body;

    console.log('Environment variables check:', {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY
    });

    // Check if environment variables are loaded
    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID || !process.env.EMAILJS_PUBLIC_KEY || !process.env.EMAILJS_PRIVATE_KEY) {
      throw new Error('EmailJS environment variables not found');
    }

    const emailPayload = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: {
        to_email,
        from_name,
        from_email,
        phone: phone || 'Not provided',
        reading_type: body.reading_type || 'N/A',
        preferred_datetime: body.preferred_datetime || 'N/A',
        subject: body.subject || 'N/A',
        form_type: body.form_type || 'Booking Form',
        message,
        reply_to: from_email
      }
    };

    console.log('EmailJS payload:', emailPayload);

    // EmailJS service integration
    const emailJSResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    const responseText = await emailJSResponse.text();
    console.log('EmailJS Response:', {
      status: emailJSResponse.status,
      statusText: emailJSResponse.statusText,
      response: responseText
    });

    if (emailJSResponse.ok) {
      return NextResponse.json({ success: true });
    } else {
      throw new Error(`EmailJS failed: ${emailJSResponse.status} - ${responseText}`);
    }
  } catch (error) {
    console.error('Email sending error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 }
    );
  }
}