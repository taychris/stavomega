import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.GMAIL_USER,
  to: process.env.GMAIL_USER,
};

export async function POST(request: NextRequest, res: NextApiResponse) {
  const body = await request.json();

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Kontaktný formulár od ${body.firstName + " " + body.lastName}`,
      text: body.message,
      replyTo: body.email,
      html: `<h1>Dostali ste novú správu.</h1>
      <p>Správa bola prijatá cez kontaktný formulár na webovej stránke.</p>
      <h2>Údaje klienta:</h2>
      <ul>
        <li>Meno: ${body.firstName + " " + body.lastName}</li>
        <li>Email: ${body.email}</li>
        <li>Tel. číslo: ${body.phoneNumber ? body.phoneNumber : "-"}</li>
      </ul>
      <h3>Správa:</h3>
      <p>${body.message}</p>`,
    });

    return new Response(JSON.stringify({ message: "success" }));
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "failed to send email." });
  }
}
