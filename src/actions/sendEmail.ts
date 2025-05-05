"use server";

import React from "react";
import nodemailer from "nodemailer";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// Créer un transporteur Nodemailer avec Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Validation simple côté serveur
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  // Créer le contenu de l'email
  const htmlContent = React.createElement(ContactFormEmail, {
    message: message,
    senderEmail: senderEmail,
  });

  let data;
  try {
    // Envoyer l'email avec Nodemailer
    data = await transporter.sendMail({
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: "lucas.rondepierre123@gmail.com",
      subject: "Prise de contact - Portfolio",
      replyTo: senderEmail,
      html: htmlContent,
    });

    console.log(data);
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
