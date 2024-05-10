import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';
import { ContactUsEmail } from '@/components/email/contact-us';



export async function GET(req: Request) {
  
  const resend = new Resend(process.env.RESEND_API_KEY);
  const payload = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'info@8zense.com',
      to: 'fgirse@bluewin.ch',
      subject: `Vielen Dank für Ihr Interesse an 8zense.com, ${payload.name}`,
      html: '<h1>Vielen Dank für Ihr Interesse an 8zense.com</h1>'
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}