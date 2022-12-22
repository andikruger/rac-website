const sendEmail = require("../../utils/sendEmail");
import axios from "axios";

export default async (req, res) => {
  const { name, email, subject, message, token } = req.body;

  await axios
    .post(
      `https://www.google.com/recaptcha/api/siteverify?secret=6LdrzZ0jAAAAAEhgrolree0AblHcEtw6Uh88y1sf&response=${token}`
    )
    .then((response) => {
      console.log(response.data);
      // if (response.status === 200) {
      //   const emailMessage = `
      //      <h2>You have a new message from ${name}</h2>
      //      <p>Email: ${email}</p>
      //      <p>Subject: ${subject}</p>
      //      <p>Message: ${message}</p>
      //      `;
      //   try {
      //     sendEmail({
      //       to: "andreas@kruger.joburg",
      //       subject: "A new message from your website",
      //       text: emailMessage,
      //     });
      //     res.status(200).json({
      //       success: true,
      //       message: "Email sent successfully",
      //     });
      //   } catch (err) {
      //     console.log(err);
      //     res.status(500).json({
      //       message:
      //         "Email could not be sent, please use the email address above",
      //     });
      //   }
      // } else {
      //   res.status(400).json({
      //     message: "Captcha verification failed, please try againå",
      //   });
      // }
    })
    .catch((error) => {
      console.log(error);
    });

  // send a response
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
