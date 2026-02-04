import nodeMailer from 'nodemailer';
// import dotenv from 'dotenv';
// dotenv.config();

const sendEmail = async (to, subject, message) => {

   try {
    
    console.log("Started sending email");
    
     const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
        },
    });

    console.log("3....2....1....");
    
    const mailOptions = {
        from: process.env.GMAIL_USER,
         to,
         subject,
        html: message,
    };

    console.log("Attempting to send email to:");
    
    const res = await transporter.sendMail(mailOptions);
    console.log(res);
    
   } catch (error) {
    console.error(error);
   }

}
export { sendEmail };

// sendEmail("nvish5979@gmail.com", "Test Email", "<p style='color: red;'>This is a test email</p>");