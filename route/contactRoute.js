const router = require("express").Router();
const nodeMailer = require("nodemailer");
const config = require("../config");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please fill all the fields" });
  }

  let smtpTransporter = nodeMailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "dhakalsuman83@gmail.com",
      pass: `${config.PASS}`,
    },
  });

  let mailOptions = {
    from: data.email,
    to: "dhakalsuman83@gmail.com",
    subject: `A Message from ${data.name} `,
    html: `
          <h3>Information</h3>
          <ul>
          <li>Name: ${data.name}</li>
          <li>Email:${data.email}</li>
          </ul>
          <h3>Message</h3>
          <p>${data.message}</p>
        `,
  };

  smtpTransporter.sendMail(mailOptions, () => {
    try {
      res.status(200).json({ msg: "Thank you for contacting suman" });
      smtpTransporter.sendMail(
        {
          from: "dhakalsuman83@gmail.com",
          to: data.email,
          subject: `A Message from ${data.name} `,
          html: `
          <h3>Thanks for contacting me. I will get back to you as soon as possible</h3>
        `,
        },
        () => {}
      );
    } catch (error) {
      res.status(400).json({ msg: "Please fill all the details" });
      res.status(500).json({ msg: "The is a server error" });
    }
  });
});

module.exports = router;
