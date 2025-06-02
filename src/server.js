// // server.js or api/send-email.js (for Next.js API route)
// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, message } = req.body;

//     // Setup Nodemailer transport with Gmail SMTP
//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER, // your gmail
//         pass: process.env.GMAIL_APP_PASS, // app password or oauth token
//       },
//     });

//     try {
//       await transporter.sendMail({
//         from: email,
//         to: process.env.GMAIL_USER,
//         subject: `New contact form message from ${name}`,
//         text: message,
//       });

//       res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//       res.status(500).json({ message: "Failed to send email", error });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
