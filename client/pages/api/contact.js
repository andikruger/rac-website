const sendEmail = require("../../utils/sendEmail");
import axios from "axios";
const validateCaptcha = (response_key) => {
  return new Promise((resolve, reject) => {
    const secret_key = process.env.RECAPTCHA_SECRET_KEY;

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

    fetch(url, {
      method: "post",
    })
      .then((response) => response.json())
      .then((google_response) => {
        if (google_response.success == true) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err) => {
        console.log(err);
        resolve(false);
      });
  });
};

export default async (req, res) => {
  const { name, email, subject, message, token } = req.body;
  // call the validateCaptcha function
  const isHuman = await validateCaptcha(token);
  if (isHuman) {
    const emailMessage = `
     <h2>You have a new message from ${name}</h2>
     <p>Email: ${email}</p>
     <p>Subject: ${subject}</p>
     <p>Message: ${message}</p>
     `;
    try {
      await sendEmail({
        to: "andreas@kruger.joburg",
        subject: subject,
        text: emailMessage,
      });
      res.status(200).json({
        success: true,
        message: "Email sent successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Email could not be sent, please use the email address above",
      });
    }
  } else {
    res.json({
      success: false,
      message: "Captcha verification failed",
    });
  }
};

// export default async (req, res) => {
//   const { name, email, subject, message } = req.body;
//   console.log(req.body);
//   const emailMessage = `
//     <h2>You have a new message from ${name}</h2>
//     <p>Email: ${email}</p>
//     <p>Subject: ${subject}</p>
//     <p>Message: ${message}</p>
//     `;
//   try {
//     await sendEmail({
//       to: "randathletic@iafrica.com",
//       subject: subject,
//       text: emailMessage,
//     });
//     res.status(200).json({
//       success: true,
//       message: "Email sent successfully",
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       message: "Email could not be sent, please use the email address above",
//     });
//   }
// };
