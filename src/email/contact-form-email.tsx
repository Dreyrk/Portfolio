type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
  return `
    <html>
      <head>
        <style>
          /* Tailwind CSS ou ton propre style peut être appliqué ici */
          body { background-color: #f3f4f6; color: #000; font-family: Arial, sans-serif; }
          .container { width: 100%; max-width: 600px; margin: auto; padding: 20px; }
          .section { background-color: #fff; border: 1px solid #000; padding: 20px; border-radius: 8px; }
          .heading { font-size: 20px; font-weight: bold; margin-bottom: 10px; }
          .text { font-size: 16px; margin-bottom: 10px; }
          .hr { border-top: 1px solid #000; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="section">
            <h2 class="heading">Tu as reçu un message du formulaire de contact de ton portfolio</h2>
            <p class="text">${message}</p>
            <hr class="hr" />
            <p class="text">De la part de (email): ${senderEmail}</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
