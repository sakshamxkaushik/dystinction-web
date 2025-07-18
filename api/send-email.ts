// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, company, phone, role, projectType, timeline, budget, challenges, goals } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Dystinction Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // The email that receives the form data
      subject: `New Consultation Request - ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Phone: ${phone}
        Role: ${role}
        Project Type: ${projectType}
        Timeline: ${timeline}
        Budget: ${budget}
        Challenges: ${challenges}
        Goals: ${goals}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, message: "Failed to send email." });
  }
}
