import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  phone?: string; // přidáno telefonní číslo jako nepovinné
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: EmailData = await request.json();
    const { name, email, phone, message } = data;
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'davidudic06fx@gmail.com',
        pass: process.env.EMAIL_PASS,
      },
    });
    
    const mailOptions = {
      from: process.env.EMAIL_USER || 'davidudic06fx@gmail.com',
      to: 'davidudic06fx@gmail.com',
      subject: `Nová zpráva z portfolia od ${name}`,
      text: `
        Jméno: ${name}
        Email: ${email}
        Telefon: ${phone || 'Neuvedeno'}
        
        Zpráva:
        ${message}
      `,
      html: `
        <h3>Nová zpráva z portfolia</h3>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Neuvedeno'}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ 
      success: true,
      message: 'Zpráva byla úspěšně odeslána!'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Došlo k chybě při odesílání emailu. Zkuste to prosím znovu.' 
      },
      { status: 500 }
    );
  }
}