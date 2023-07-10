import { createTransport, getTestMessageUrl } from 'nodemailer';

export const email = async (email, subject, message) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport

  const transporter = createTransport({
    host: 'email-smtp.us-west-2.amazonaws.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'AKIAQ7WAF4HL2KUCSN7D', // generated ethereal user
      pass: 'BLULb+MzAK+hZ3RJDilpk5v4QvwPIF0SRnDWz8Zf3X6P', // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'federicoqueirel@gmail.com', // sender address
    to: email, // list of receivers
    subject, // Subject line
    text: 'Todo funciono correctamente', // plain text body
    html: `<b>${message}</b>`, // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
