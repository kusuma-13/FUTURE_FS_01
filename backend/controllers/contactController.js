// controllers/contactController.js

// 1. Import Nodemailer
const nodemailer = require('nodemailer');

// 2. Configure the transporter using environment variables
const transporter = nodemailer.createTransport({
    // Use environment variables from .env
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT == 465, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    // FIX: Add this block to ignore self-signed certificate errors
    tls: {
        rejectUnauthorized: false
    }
});


// This function will handle the POST request to /api/contact
const submitContactForm = async (req, res) => { // NOTE: Function is now asynchronous (async)
    // req.body contains the JSON data sent from the client (Thunder Client)
    const { name, email, subject, message } = req.body;

    // --- Validation ---
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ msg: 'Please enter all required fields.' });
    }

    try {
        // 3. Define the email content
        const mailOptions = {
            from: process.env.EMAIL_USER, // The email you are sending from
            to: process.env.EMAIL_USER,   // The recipient (likely yourself)
            replyTo: email,               // Allows you to reply directly to the user
            subject: `New Portfolio Contact: ${subject}`,
            text: `
                Name: ${name}
                Email: ${email}
                Subject: ${subject}
                
                Message:
                ${message}
            `,
            html: `
                <h3>New Contact Message</h3>
                <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        // 4. Send the email
        const info = await transporter.sendMail(mailOptions);
        
        console.log('Email sent: %s', info.messageId);

        // --- Success Response ---
        res.status(200).json({ 
            msg: 'Contact form received and message sent successfully!', 
            data: req.body 
        });

    } catch (error) {
        console.error('Nodemailer Error:', error);
        // Send a 500 status if the email failed to send
        res.status(500).json({ 
            msg: 'Failed to send message. Please check server logs.',
            error: error.message
        });
    }
};

module.exports = {
    submitContactForm
};
