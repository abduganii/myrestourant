require('dotenv').config()
const nodemailer = require("nodemailer")

async function nodeMailer(email) {
    
    let transporter = nodemailer.createTransport({
        port: 587,
        service: 'gmail',
        auth: {
          user: process.env.E_USERNAME, // generated ethereal user
          pass:process.env.E_PASSWORD, // generated ethereal password
        }
    })

    let info = await transporter.sendMail({
        from:process.env.E_USERNAME, // sender address
        to: process.env.E_USERNAME, // list of receivers
        subject: "Hello ✔️", // Subject line
        text: `${email}`, // plain text body
        html: "<b>Thank you for choosing us</b>", // html body
    })
 
    console.log("Message sent: %s", info.messageId);

} 

module.exports = nodeMailer