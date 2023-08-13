const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  service: "gmail",
  debug: true,
  auth: {
    user: "kiranwork007@gmail.com",
    pass: "fruscxskjabtoubn",
  },
});
