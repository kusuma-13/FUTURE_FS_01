const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'] // Basic email validation
    },
    subject: {
        type: String,
        required: false,
        default: 'General Inquiry'
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Records when the message was received
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;