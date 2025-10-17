// server.js

// =========================================================
// ENVIRONMENT & MODULE IMPORTS
// =========================================================

// 1. Load environment variables from .env file (MUST be the very first line)
require('dotenv').config(); 

// Core modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 2. IMPORT ROUTES 
// NOTE: Assuming these files exist in the './routes/api/' directory
const projectRoutes = require('./routes/api/projectRoutes');
const contactRoutes = require('./routes/api/contactRoutes');

// Initialize the Express application
const app = express();


// =========================================================
// MIDDLEWARE
// =========================================================

// Enable Express to parse incoming JSON data (e.g., from POST requests)
app.use(express.json());

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Optional: Logging middleware for every request
app.use((req, res, next) => {
    // Log the request method and path
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});


// =========================================================
// ROUTES
// =========================================================

// Basic Test Route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Portfolio Backend API is Running!' });
});

// Use API routes
// Any request starting with /api/projects is handled by projectRoutes
app.use('/api/projects', projectRoutes);

// Any request starting with /api/contact is handled by contactRoutes
app.use('/api/contact', contactRoutes);


// =========================================================
// DATABASE CONNECTION & SERVER START
// =========================================================

// Declaring environment variables ONLY ONCE
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected successfully');
    
    // Start the server only after successful database connection
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
      console.log(`Access API at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    // Log the error and exit the process if connection fails
    console.error('MongoDB Connection Error:', err.message);
    console.error('Error Code:', err.name || 'N/A'); 
    process.exit(1); 
  });
