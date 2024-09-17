import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { modifyPDF } from '../../lib/pdfUtils'

export default async function sendEmail(req, res) {

  console.log('Request body:', req);

  const { name, email, text } = req.searchParams

  console.log("new params", name, email, text)

  const modifiedPdfPath = await modifyPDF(name, email);
  const absolutePdfPath = path.resolve('public', `${name}.pdf`);
  console.log('PDF Path:', absolutePdfPath);

  // // Read the PDF file
  const fileBuffer = fs.readFileSync(absolutePdfPath);
  // Create a reusable transporter object using SMTP transport

 
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
    subject: `Customer Booking : ${name}`,     // Subject line
    text: `Hi,\nCustomer Message: ${text} \nPlease find the attached PDF file.`, // Plain text body
    attachments: [
      {
        filename: `${name}.pdf`,
        content: fileBuffer,
        contentType: 'application/pdf'
      }
    ]
  };

  const clientOptions = {
    from: 'smilezayurvedicwellness@gmail.com',           // Sender address
    to: [email],          // List of recipients
    subject: 'Your Booking has been received',     // Subject line
    text: 'Hello!\nPlease find the attached PDF file.', // Plain text body
    attachments: [
      {
        filename: `${name}.pdf`,
        content: fileBuffer, // Directly use fileBuffer        
        contentType: 'application/pdf'
      }
    ]
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
  try {
    const info = await transporter.sendMail(clientOptions);
    console.log('Email sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
