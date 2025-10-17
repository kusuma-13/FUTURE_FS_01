import React from 'react';
import { Code, Zap, Github, AlertTriangle, BarChart } from 'lucide-react';

// --- Component: Project Card ---
// This component displays a single project entry.
const ProjectCard = ({ project, accentColor }) => {
  // Use the icon provided in the project data, falling back to a generic 'Code' icon.
  const IconComponent = project.icon || Code; 
  const color500 = `${accentColor}-500`;

  // Dynamically include the BarChart icon if needed, though most icons are imported at the top.
  // We'll rely on the main index.jsx to pass the required icon props based on project type.
  
  return (
    <div className={`bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-${color500}/50`}>
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        {/* Render the icon */}
        <BarChart className={`w-6 h-6 text-${color500} flex-shrink-0`} />
      </div>
      <p className="text-gray-400 mb-4 text-sm min-h-[60px]">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className={`text-xs font-medium px-2.5 py-0.5 rounded-full bg-${accentColor}-900 text-${accentColor}-300`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex space-x-4 mt-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center text-${color500} hover:text-${accentColor}-400 transition-colors duration-200 text-sm`}
        >
          <Github className="w-4 h-4 mr-1" />
          GitHub
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center text-gray-400 hover:text-white transition-colors duration-200 text-sm ${project.demoUrl === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Zap className="w-4 h-4 mr-1" />
          Live Demo
        </a>
      </div>
    </div>
  );
};

// --- Component: Projects Section (Main Export) ---
const Projects = ({ projects, loading, accentColor }) => {
  const color500 = `${accentColor}-500`;

  // Helper component for section headers (internal to this file)
  const SectionHeader = ({ title }) => (
    <h2 className={`text-4xl font-extrabold text-white text-center mb-12 border-b-2 border-${color500} inline-block pb-1`}>
      {title}
    </h2>
  );
  
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader title="Key Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {loading ? (
            <div className="text-center md:col-span-3 text-gray-400">Loading projects...</div>
          ) : (
            projects.length > 0 ? (
              // Use a wrapper to center the single project in the grid
              // This renders all projects returned by the API or mock data
              <>
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} accentColor={accentColor} />
                ))}
              </>
            ) : (
              <div className="text-center md:col-span-3 text-red-400 flex items-center justify-center p-8 bg-gray-900 rounded-xl w-full">
                <AlertTriangle className="w-5 h-5 mr-2" />
                No projects found. Check API connection or backend status.
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
