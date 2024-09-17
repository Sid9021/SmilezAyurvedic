import nodemailer from 'nodemailer';

export default async function sendEmail(req, res) {

  console.log('Request body:', req);

  const { name, email, text } = req.searchParams

  console.log("new params", name, email, text)

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',  // Your SMTP host
    port: 587,                 // Your SMTP port (587 for unencrypted/TLS connections)
    secure: false,             // True for 465, false for other ports
    auth: {
      user: 'smilezayurvedicwellness@gmail.com',  // Your SMTP username
      pass: 'mpgr rtyh pqkf mjjc',      // Your SMTP password
    }
  });

  // Specify the email options
  const mailOptions = {
    from: 'smilezayurvedicwellness@gmail.com',           // Sender address
    to: ['smilezayurvedicwellness@gmail.com'],          // List of recipients
    subject: `Enquiry : ${name}`,     // Subject line
    text: `Hi,\nEnquiry Message: ${text}\n\n Conatct email: ${email}\n`, // Plain text body
  };


  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
  
}
