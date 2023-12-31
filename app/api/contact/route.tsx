import { NextRequest, NextResponse } from "next/server";

import { render } from "@react-email/components";

import { transporter, smtpEmail } from "@/utils/nodemailer";

import { Email } from "../../../components/Email";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { name, email, details, phoneNumber } = body;

  const emailHtml = render(
    <Email name={name} email={email} details={details} phoneNumber={phoneNumber} />
  );

  const options = {
    from: smtpEmail,
    to: smtpEmail,
    subject: "New Request Submission",
    html: emailHtml,
  };

  try {
    // Send email using the transporter
    await transporter.sendMail(options);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
  return new Response("OK");
}