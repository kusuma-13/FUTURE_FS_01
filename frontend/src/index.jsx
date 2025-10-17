import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom';
import { GitHub, Linkedin, Mail, Code, BarChart, Zap, Send, AlertTriangle, GraduationCap, HardHat, ChevronsRight, Briefcase } from 'lucide-react'; 

// --- Customizable Variables (Personal Information) ---
const MY_NAME = "Kusuma V";
const MY_TITLE = "Data Analyst Intern";
const MY_BIO =
  "Passionate about leveraging data to solve real-world problems. Experienced in Python, MySQL, and statistical analysis, with a focus on fraud detection and system optimization.";
// IMPORTANT: Replace this with a public URL (e.g., from GitHub, Imgur) of your actual profile photo.
const PROFILE_IMAGE_URL = "https://raw.githubusercontent.com/kusuma-13/FUTURE_FS_03/main/assets/profile_photo.jpg";
const ACCENT_COLOR_CLASS = "sky"; // Change 'sky' to 'emerald', 'violet', or 'rose' to change theme

// --- Mock Data ---

const MOCK_PROJECTS = [
  {
    id: 1,
    title: "Transaction Fraud Pattern Analyzer",
    description: "A data analytics project utilizing Python and MySQL to identify and visualize fraudulent transaction patterns within large datasets.",
    tags: ["Python", "MySQL", "Data Analysis", "Pandas"],
    githubUrl: "https://github.com/kusuma-13/Beginner_Project.git",
    demoUrl: "#",
    icon: BarChart,
  },
  {
  id: 2,
  title: "Job Portal Resume Keyword Analyzer",
  description: "A data analytics project using Python and MYSQL to detect keywords in resumes for job portals, enhancing candidate-job matching efficiency.",
  tags: ["Python", "MYSQL", "Streamlit"],
  githubUrl: "https://github.com/kusuma-13/Intermediate_Project.git",
  demoUrl: "#",
  icon: BarChart,
}
];

// ******************************************************
// *** Internship Experience ***
// ******************************************************
const MOCK_EXPERIENCE = [
  {
    id: 1,
    company: "Rooman Technologies Pvt Ltd",
    role: "Data Analytics Intern",
    duration: "1 month",
    details: [
      "Assisted in cleaning and preprocessing raw datasets using Pandas and NumPy, improving data reliability by 15%.",
      "Developed interactive dashboards using **Power BI** for the sales team, reducing report generation time by 2 hours daily.",
      "Wrote and optimized MySQL queries for complex data extraction, supporting a system migration project.",
      "Contributed to data quality checks using **Streamlit** to build a lightweight data validation application."
    ],
  },
];
// ******************************************************

const MOCK_EDUCATION = [
  {
    id: 1,
    institution: "MLA Academy of Higher Learning",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "2023 - 2026 (Expected)",
    details: "Currently pursuing foundational knowledge in computer science, software development principles, and analytical skills. Focus on data structures and database management.",
  },
];

const MOCK_SKILLS = {
  "Programming & Scripting": ["Python (Pandas, NumPy)", "SQL (MySQL)"],
  "Data Visualization & BI": ["Power BI", "Streamlit", "Seaborn", "Matplotlib"],
  "Tools & Databases": ["Git/GitHub", "Jupyter Notebooks", "MySQL"],
};

// --- Helper Functions ---
const smoothScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Component: Project Card ---
const ProjectCard = ({ project, accentColor }) => {
  const IconComponent = project.icon || Code; 
  const color500 = `${accentColor}-500`;

  return (
    <div className={`bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-${color500}/50`}>
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <IconComponent className={`w-6 h-6 text-${color500} flex-shrink-0`} />
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

// --- Component: Header/Navigation ---
const Header = ({ name, accentColor }) => {
  const color500 = `${accentColor}-500`;
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" }, // NEW NAV ITEM
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={() => smoothScroll('home')} 
              className={`text-2xl font-extrabold tracking-tight text-white hover:text-${color500} transition-colors duration-200`}
            >
              {name.split(' ')[0]}<span className={`text-${color500}`}>.dev</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => smoothScroll(item.id)}
                className={`text-gray-300 hover:text-${color500} transition-colors duration-200 font-medium`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

// --- Main Application Component ---
const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error', 'submitting'

  // Fetch projects from the backend (using mock data as fallback)
  useEffect(() => {
    // NOTE: Replace this with a secure API call if a backend is deployed.
    const fetchProjects = async () => {
      try {
        // This is a placeholder URL and will likely fail, triggering the mock data fallback
        const response = await fetch('http://localhost:5000/api/projects'); 
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
            throw new Error("Failed to fetch projects");
        }
      } catch (error) {
        console.error("Error fetching projects from API, using mock data:", error);
        setProjects(MOCK_PROJECTS); // Fallback to mock data if API fails
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Handle contact form submission (simulated for frontend-only)
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call delay and success/failure
    try {
      // Replace with actual fetch to your contact endpoint if one exists
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      
      // Simulate success
      setFormStatus('success');
      setContactForm({ name: '', email: '', message: '' }); 

    } catch (error) {
      setFormStatus('error: Could not connect to the backend server or email service.');
    } finally {
      // Clear status after a short delay
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  const color500 = `${ACCENT_COLOR_CLASS}-500`;
  const color400 = `${ACCENT_COLOR_CLASS}-400`;

  // --- Helper component for section headers ---
  const SectionHeader = ({ title }) => (
    <h2 className={`text-4xl font-extrabold text-white text-center mb-12 border-b-2 border-${color500} inline-block pb-1`}>
      {title}
    </h2>
  );
  
  // --- Component for Experience/Education Item ---
  const TimelineItem = ({ item, index, isExperience }) => (
    <div key={item.id} className={index % 2 === 0 ? 'sm:text-right sm:pr-10' : 'sm:text-left sm:pl-10'}>
      <div className="hidden sm:block">
        {/* Time-line dot for larger screens */}
        <div className={`absolute w-4 h-4 rounded-full bg-gray-900 border-2 border-${color500} ${index % 2 === 0 ? 'right-1/2 translate-x-[9.5px]' : 'left-1/2 -translate-x-2'} top-4`}></div>
      </div>
      <div className={`p-5 rounded-xl shadow-lg bg-gray-900 border border-gray-700 transition-shadow duration-300 hover:shadow-2xl`}>
        {isExperience ? (
            <Briefcase className={`w-6 h-6 mb-2 ${index % 2 === 0 ? 'float-right' : 'float-left'} text-${color500}`} />
        ) : (
            <GraduationCap className={`w-6 h-6 mb-2 ${index % 2 === 0 ? 'float-right' : 'float-left'} text-${color500}`} />
        )}
        <h3 className="text-xl font-semibold text-white">{item.role || item.degree}</h3>
        <p className={`text-md font-medium text-${color500} mt-1`}>{item.company || item.institution}</p>
        <p className="text-sm text-gray-400 mt-1 mb-2">{item.duration}</p>
        
        {/* Experience Details (List of bullet points) */}
        {item.details && Array.isArray(item.details) ? (
            <ul className="text-gray-300 text-sm list-disc pl-5 space-y-1 mt-3 text-left">
                {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} dangerouslySetInnerHTML={{ __html: detail }}></li>
                ))}
            </ul>
        ) : (
            // Education Detail (Single paragraph)
            <p className="text-gray-300 text-sm">{item.details}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans antialiased">
      <Header name={MY_NAME} accentColor={ACCENT_COLOR_CLASS} />

      {/* --- Home/Hero Section (Personal Information & Photo) --- */}
      <section id="home" className="pt-32 pb-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
          
          <div className="flex-1 text-center md:text-left">
            <p className="text-xl text-gray-400 mb-2">Hello World! I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight text-white mb-4">
              <span className={`text-${color500}`}>{MY_NAME}</span>
            </h1>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-${color400}`}>
              {MY_TITLE}
            </h2>
            <p className="text-gray-300 max-w-2xl text-lg mb-8">
              {MY_BIO}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#contact"
                onClick={() => smoothScroll('contact')}
                className={`px-6 py-3 font-semibold rounded-lg bg-${color500} text-white hover:bg-${ACCENT_COLOR_CLASS}-600 transition-colors duration-200 shadow-xl`}
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/kusuma-13"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 font-semibold rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
              >
                <Github className="w-5 h-5 inline mr-2" /> GitHub
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className={`w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-${color500}`}>
              <img 
                src={PROFILE_IMAGE_URL} 
                alt={`${MY_NAME}'s Profile`} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src="https://raw.githubusercontent.com/kusuma-13/FUTURE_FS_03/main/assets/profile_photo.jpg";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title="Skills & Expertise" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(MOCK_SKILLS).map(([category, skills], index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700">
                <div className="flex items-center mb-4">
                    <HardHat className={`w-6 h-6 mr-3 text-${color500}`} />
                    <h3 className="text-xl font-semibold text-white">{category}</h3>
                </div>
                <ul className="space-y-2 text-left">
                  {skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-gray-300 text-sm">
                      <ChevronsRight className={`w-4 h-4 mr-2 text-${color400} flex-shrink-0`} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- NEW: Experience Section (Internship) --- */}
      <section id="experience" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title="Internship Experience" />
          
          <div className="relative pt-4">
            <div className="absolute top-0 bottom-0  -ml-0.5 w-0.5 bg-gray-700 hidden sm:block"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {MOCK_EXPERIENCE.map((exp, index) => (
                <TimelineItem key={exp.id} item={exp} index={index} isExperience={true} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Education Section --- */}
      <section id="education" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title="Education & Qualifications" />
          
          <div className="relative pt-4">
            <div className="absolute top-0 bottom-0  -ml-0.5 w-0.5 bg-gray-700 hidden sm:block"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {MOCK_EDUCATION.map((edu, index) => (
                <TimelineItem key={edu.id} item={edu} index={index} isExperience={false} />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* --- Projects Section --- */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title="Key Projects" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {loading ? (
              <div className="text-center md:col-span-3 text-gray-400">Loading projects...</div>
            ) : (
              projects.length > 0 ? (
                // Use a wrapper to center the single project in the grid
                <div className="md:col-start-2 w-full"> 
                    {projects.map((project) => (
                      <ProjectCard key={project.id} project={project} accentColor={ACCENT_COLOR_CLASS} />
                    ))}
                </div>
              ) : (
                <div className="text-center md:col-span-3 text-red-400 flex items-center justify-center p-8 bg-gray-900 rounded-xl w-full">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  No projects found. Using fallback mock data.
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Contact Me" />
          <form onSubmit={handleContactSubmit} className="space-y-6">
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-sky-500 focus:border-sky-500 transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-sky-500 focus:border-sky-500 transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                rows="4"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-sky-500 focus:border-sky-500 transition-colors"
              ></textarea>
            </div>
            
            {formStatus && (
              <div className={`p-3 rounded-lg text-sm font-medium ${
                formStatus.includes('success') ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
              }`}>
                {formStatus === 'submitting' ? 'Sending message...' : formStatus.includes('success') ? 'Message sent successfully (Simulated)!' : `Error: ${formStatus.split(': ')[1] || 'Submission failed.'}`}
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className={`w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-${color500} hover:bg-${ACCENT_COLOR_CLASS}-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md`}
            >
              <Send className="w-5 h-5 mr-2" />
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-gray-800 border-t border-gray-700/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {MY_NAME}. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://github.com/kusuma-13" target="_blank" rel="noopener noreferrer" className={`hover:text-${color500} transition-colors duration-200`}>
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/kusuma-v" target="_blank" rel="noopener noreferrer" className={`hover:text-${color500} transition-colors duration-200`}>
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:kusumavkusumav13@gmail.com" className={`hover:text-${color500} transition-colors duration-200`}>
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- MANDATORY React 18 Mounting Code ---
const container = document.getElementById('root');

if (container) {
  // FIX: Use a property on the window object to reliably ensure createRoot is called only once
  // across script reloads/re-evaluations in the execution environment, preventing the warning.
  if (window.__REACT_ROOT_INSTANCE__) {
    console.log("React root already instantiated. Skipping createRoot() call.");
  } else {
    // Initialize and store the root instance reference globally
    const root = createRoot(container);
    window.__REACT_ROOT_INSTANCE__ = root;
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
} else {
  console.error("Root container element with ID 'root' not found.");
}

export default App;
