// routes/api/contactRoutes.js

const express = require('express');
const router = express.Router();

// Import the controller function that handles the business logic
const contactController = require('../../controllers/contactController');

// @route   POST api/contact
// @desc    Handle incoming contact form submissions
// @access  Public
router.post('/', contactController.submitContactForm);

// Export the router to be used by server.js
module.exports = router;
