const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({ fullname, email, telephone, message }) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "example@gmail.com",
        pass: "password", 
      },
    });

    const mail_configs = {
      from: email,
      to: "example@gmail.com", 
      subject: "Contact depuis le site web DroneCast",
      html: `
        <h1>Message de ${fullname}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>Best Regards</p>
      `,
    };

    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: "An error has occurred" });
      }
      return resolve({ message: "Email sent successfully" });
    });
  });
}

app.post("/send-email", (req, res) => {
  const { fullname, email, telephone, message } = req.body;
  sendEmail({ fullname, email, telephone, message })
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});