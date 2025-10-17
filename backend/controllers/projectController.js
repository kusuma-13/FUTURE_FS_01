const Project = require('../models/Project');

// GET all projects
const getProjects = async (req, res) => {
    try {
        // Find all projects and sort them by creation date (newest first)
        const projects = await Project.find().sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET a single project (Optional, but good practice for detail pages)
const getSingleProject = async (req, res) => {
    const { id } = req.params; // Get ID from URL parameter

    try {
        const project = await Project.findById(id);

        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }

        res.status(200).json(project);
    } catch (error) {
        // If the ID format is invalid (e.g., not a valid MongoDB ObjectID)
        res.status(400).json({ error: 'Invalid project ID format' });
    }
};

// Export the functions to be used in the routes file
module.exports = {
    getProjects,
    getSingleProject
    // NOTE: For a full CRUD app, you would also add createProject, updateProject, deleteProject here.
};