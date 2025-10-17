const mongoose = require('mongoose');

// Define the Schema structure
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true // removes whitespace from both ends of a string
    },
    description: {
        type: String,
        required: true
    },
    technologies: {
        type: [String], // Array of strings for technologies used
        required: true
    },
    link: {
        type: String,
        required: false // Optional: link to live demo
    },
    github: {
        type: String,
        required: true // Link to GitHub repository
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

// Create the model using the schema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;