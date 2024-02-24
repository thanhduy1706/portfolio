"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
  //   console.log("On server");
  //   console.log(formData.get("senderEmail"));
  //   console.log(formData.get("message"));

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (
    !senderEmail ||
    !message ||
    typeof senderEmail !== "string" ||
    typeof message !== "string"
  ) {
    return {
      error: "Please fill in all fields",
    };
  }

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "ndtduy.dev@gmail.com",
    subject: "New message from your portfolio",
    reply_to: senderEmail,
    text: `From: ${formData.get("senderEmail")}\n\n${formData.get("message")}`,
  });
};
