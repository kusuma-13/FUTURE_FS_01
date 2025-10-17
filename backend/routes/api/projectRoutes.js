const express = require('express');
const { getProjects, getSingleProject } = require('../../controllers/projectController');

// Create a router instance
const router = express.Router();

// GET all projects
// URL: /api/projects/
router.get('/', getProjects);

// GET a single project (e.g., /api/projects/60c72b1f9b3e1f0015b67e5a)
router.get('/:id', getSingleProject);

module.exports = router;