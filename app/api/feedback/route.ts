import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

const apiKey = process.env.SENDGRID_API_KEY;
if (apiKey && apiKey.startsWith('SG.')) {
  sgMail.setApiKey(apiKey);
}

export async function POST(request: Request) {
  const { emoji, name, comment } = await request.json();

  if (!emoji) {
    return NextResponse.json(
      { error: 'Emoji reaction is required' },
      { status: 400 }
    );
  }

  const toEmail = process.env.EMAIL_TO;
  if (!toEmail) {
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/Phoenix',
  });

  const msg = {
    to: toEmail,
    from: process.env.EMAIL_FROM as string,
    subject: `Portfolio Feedback: ${emoji}`,
    text: `Reaction: ${emoji}\nName: ${name || 'Anonymous'}\nComment: ${comment || 'No comment'}\nTime: ${timestamp}`,
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 24px;">
        <h2 style="margin-bottom: 16px;">New Portfolio Feedback</h2>
        <p style="font-size: 48px; margin: 16px 0;">${emoji}</p>
        <p><strong>From:</strong> ${name || 'Anonymous'}</p>
        ${comment ? `<p><strong>Comment:</strong> ${comment}</p>` : ''}
        <hr style="border: none; border-top: 1px solid #333; margin: 16px 0;" />
        <p style="color: #888; font-size: 12px;">${timestamp}</p>
      </div>
    `,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ message: 'Feedback sent successfully' });
  } catch (error) {
    console.error('Error sending feedback email:', error);
    return NextResponse.json(
      { error: 'Failed to send feedback' },
      { status: 500 }
    );
  }
}
