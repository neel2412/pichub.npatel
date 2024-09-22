const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  const data = JSON.parse(event.body);

  // Configure the transporter with your custom domain's SMTP server details
  const transporter = nodemailer.createTransport({
    host: 'mail.npatel.co.uk', // Replace with your actual SMTP server host
    port: 587, // Use 587 for STARTTLS, or 465 for SSL
    secure: false, // Set to true if using port 465 (SSL), false for STARTTLS
    auth: {
      user: 'inq@npatel.co.uk', // Replace with your email address
      pass: 'Pichub24@' // Replace with your email password
    },
    tls: {
      rejectUnauthorized: false // Optional: Use this if you're dealing with self-signed certificates
    }
  });

  const mailOptions = {
    from: `Website Contact Form <${data.email}>`,
    to: 'inq@npatel.co.uk', // The email address where you want to receive messages
    subject: `New enquiry from ${data.name}`,
    text: data.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email', error: error.toString() })
    };
  }
};
