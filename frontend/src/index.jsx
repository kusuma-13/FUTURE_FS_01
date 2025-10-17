import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
// CRITICAL FIX: All icons used anywhere in this file must be imported here.
import { 
  Github, Linkedin, Mail, Code, BarChart, Zap, Send, 
  AlertTriangle, GraduationCap, HardHat, ChevronsRight, Briefcase, 
  Menu, X
} from 'lucide-react'; 

// --- Customizable Variables (Personal Information) ---
const MY_NAME = "Kusuma V";
const MY_TITLE = "Data Analyst & Python Developer";
const MY_BIO =
  "Passionate about leveraging data to solve real-world problems. Experienced in Python, MySQL, and statistical analysis, with a focus on fraud detection and system optimization.";
// **************************************************************************************************************************************************
const PROFILE_IMAGE_URL = "https://github.com/kusuma-13/FUTURE_FS_01/blob/0d3d6f0096193f0f646f6f29f531ae51c99a68b5/frontend/src/assets/profile_photo.jpg"; 
// **************************************************************************************************************************************************
const ACCENT_COLOR_CLASS = "sky"; // Change 'sky' to 'emerald', 'violet', or 'rose' to change theme
const ACCENT_COLORS = {
    500: `${ACCENT_COLOR_CLASS}-500`,
    400: `${ACCENT_COLOR_CLASS}-400`,
    100: `${ACCENT_COLOR_CLASS}-100`,
};

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
  icon: Zap,
  },
];

const MOCK_EXPERIENCE = [
  {
    id: 1,
    company: "Data Insight Solutions (Mock Company)",
    role: "Data Analytics Intern",
    duration: "Summer 2024 (3 Months)",
    details: [
      "Assisted in cleaning and preprocessing raw datasets using Pandas and NumPy, improving data reliability by 15%.",
      "Developed interactive dashboards using Power BI for the sales team, reducing report generation time by 2 hours daily.",
      "Wrote and optimized MySQL queries for complex data extraction, supporting a system migration project.",
      "Contributed to data quality checks using Streamlit to build a lightweight data validation application."
    ],
  },
];

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

// --- 1. Header Component ---
const Header = ({ name, accentColor, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const color500 = accentColor + '-500';
  const color100 = accentColor + '-100';

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavigate = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-gray-900/95 backdrop-blur-sm shadow-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex items-center">
            <Code className={`w-6 h-6 text-${color500} mr-2`} />
            <span className="text-xl font-bold text-white tracking-wider cursor-pointer" onClick={() => handleNavigate('home')}>
              {name.split(' ')[0]}
              <span className={`text-${color500}`}>.dev</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); handleNavigate(item.id); }}
                className={`text-gray-300 hover:text-${color500} font-medium transition-colors duration-200`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* External Links */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="https://github.com/kusuma-13" target="_blank" rel="noopener noreferrer" 
               className={`p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200 border border-gray-700`}>
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/kusuma-v" target="_blank" rel="noopener noreferrer" 
               className={`p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200 border border-gray-700`}>
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-${color500}`}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className={`md:hidden bg-gray-900/90 border-t border-gray-800 shadow-lg pb-2`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); handleNavigate(item.id); }}
                className={`block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-${color500} hover:bg-gray-800 transition-colors duration-200`}
              >
                {item.name}
              </a>
            ))}
            <div className={`pt-4 border-t border-gray-700 flex justify-center space-x-4`}>
                <a href="https://github.com/kusuma-13" target="_blank" rel="noopener noreferrer" 
                    className={`p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200 border border-gray-700`}>
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/kusuma-v" target="_blank" rel="noopener noreferrer" 
                    className={`p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200 border border-gray-700`}>
                  <Linkedin className="w-6 h-6" />
                </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


// --- 2. Projects Component ---
const Projects = ({ projects, accentColor }) => {
  const color500 = accentColor + '-500';

  // Helper function for the Project Card
  const ProjectCard = ({ project }) => {
    const IconComponent = project.icon;

    return (
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:border-b-4 border-b-4 border-gray-800 hover:border-b-transparent">
        <div className={`p-6 border-t-4 border-${color500}`}>
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            {IconComponent && <IconComponent className={`w-8 h-8 text-${color500} flex-shrink-0`} />}
          </div>
          <p className="text-gray-300 mb-4 h-20 overflow-hidden line-clamp-3">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className={`text-xs font-semibold px-3 py-1 rounded-full bg-gray-700 text-${accentColor}-400`}>
                {tag}
              </span>
            ))}
          </div>

          <div className="flex space-x-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg bg-gray-700 text-gray-100 hover:bg-gray-600 transition-colors duration-200 text-sm font-medium`}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
            {project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg bg-${color500} text-white hover:bg-${accentColor}-600 transition-colors duration-200 text-sm font-medium`}
              >
                <Zap className="w-4 h-4" />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl font-extrabold text-white text-center mb-12 border-b-2 border-${color500} inline-block pb-1`}>
          Projects
        </h2>
        
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className={`p-6 bg-gray-800 border border-yellow-500 rounded-lg max-w-lg mx-auto`}>
            <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <p className="text-lg text-yellow-300">No projects found.</p>
            <p className="text-sm text-gray-400 mt-2">Check your API or verify the mock data is being used.</p>
          </div>
        )}
      </div>
    </section>
  );
};


// --- 3. Contact Component ---
const Contact = ({ accentColor }) => {
  const color500 = accentColor + '-500';

  // State for form submission
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // NOTE: In a real application, you would send this data to a backend service 
    // (e.g., Firebase Functions, Formspree, AWS Lambda) here.
    
    // Simulating a successful network request
    setTimeout(() => {
      console.log('Form Data:', formData);
      setStatus('Message Sent! I will be in touch soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);

    // If an error occurred:
    // setStatus('Failed to send message. Please try again or email directly.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl font-extrabold text-white text-center mb-12 border-b-2 border-${color500} inline-block pb-1`}>
          Contact Me
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="lg:w-1/3 flex flex-col justify-start items-center lg:items-start text-center lg:text-left space-y-8 p-6 bg-gray-800 rounded-xl shadow-lg">
                <p className="text-lg text-gray-300">
                    Feel free to reach out to discuss data projects, potential collaborations, or just to say hello!
                </p>
                
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <Mail className={`w-6 h-6 text-${color500} flex-shrink-0`} />
                        <span className="text-gray-200">kusumav@email.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Linkedin className={`w-6 h-6 text-${color500} flex-shrink-0`} />
                        <a href="https://linkedin.com/in/kusuma-v" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors duration-200">
                            Connect on LinkedIn
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Github className={`w-6 h-6 text-${color500} flex-shrink-0`} />
                        <a href="https://github.com/kusuma-13" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors duration-200">
                            View GitHub Profile
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 bg-gray-800 p-8 rounded-xl shadow-lg text-left">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-${color500} focus:border-${color500} transition-all duration-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-${color500} focus:border-${color500} transition-all duration-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-${color500} focus:border-${color500} transition-all duration-200"
                        ></textarea>
                    </div>
                    
                    <button
                        type="submit"
                        className={`w-full flex items-center justify-center space-x-2 px-6 py-3 font-semibold rounded-lg bg-${color500} text-white hover:bg-${accentColor}-600 transition-colors duration-200 shadow-xl`}
                    >
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                    </button>
                    
                    {status && (
                        <p className={`mt-4 text-center text-sm font-medium ${status.includes('Sent') ? 'text-green-400' : 'text-red-400'}`}>
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Application Component ---
const App = () => {
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  // Use a single useEffect for initial data loading
  useEffect(() => {
    // In a real application, you'd fetch all data from a single or multiple endpoints here.
    // For this demonstration, we are using mock data immediately.
    setProjects(MOCK_PROJECTS);
    setExperience(MOCK_EXPERIENCE);
    setEducation(MOCK_EDUCATION);
    setLoading(false);
  }, []);

  const color500 = ACCENT_COLOR_CLASS + '-500';
  const color400 = ACCENT_COLOR_CLASS + '-400';

  // --- Helper component for section headers ---
  const SectionHeader = ({ title }) => (
    <h2 className={`text-4xl font-extrabold text-white text-center mb-12 border-b-2 border-${color500} inline-block pb-1`}>
      {title}
    </h2>
  );
  
  // --- Component for Experience/Education Item (Timeline) ---
  const TimelineItem = ({ item, index, isExperience }) => (
    <div key={item.id} className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} mb-8 w-full`}>
      <div className="hidden sm:block sm:w-1/2 relative">
        {/* Time-line dot for larger screens */}
        <div className={`absolute w-4 h-4 rounded-full bg-gray-900 border-2 border-${color500} z-10 ${index % 2 === 0 ? 'left-[-8px]' : 'right-[-8px]'} top-4`}></div>
      </div>
      
      <div className="w-full sm:w-1/2 p-0">
          <div className={`p-5 rounded-xl shadow-lg bg-gray-800 border border-gray-700 transition-shadow duration-300 hover:shadow-2xl`}>
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">{item.role || item.degree}</h3>
                {isExperience ? (
                    <Briefcase className={`w-6 h-6 flex-shrink-0 text-${color500}`} />
                ) : (
                    <GraduationCap className={`w-6 h-6 flex-shrink-0 text-${color500}`} />
                )}
            </div>

            <p className={`text-md font-medium text-${color400} mt-1`}>{item.company || item.institution}</p>
            <p className="text-sm text-gray-400 mt-1 mb-2">{item.duration}</p>
            
            {/* Details */}
            {item.details && Array.isArray(item.details) ? (
                <ul className="text-gray-300 text-sm list-disc pl-5 space-y-1 mt-3 text-left">
                    {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} dangerouslySetInnerHTML={{ __html: detail }}></li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-300 text-sm mt-3">{item.details}</p>
            )}
          </div>
      </div>
    </div>
  );

  // --- Skill Bar Component ---
  const SkillBar = ({ title, percentage }) => {
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-gray-200 font-medium">{title}</span>
          <span className={`text-sm font-semibold text-${color400}`}>{percentage}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full bg-${color500}`} 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  // --- Skill Tag Component ---
  const SkillTag = ({ skill }) => (
    <span className={`inline-block bg-gray-700 text-${color400} text-sm font-medium px-4 py-2 rounded-full border border-gray-600 transition-all duration-200 hover:bg-gray-600`}>
      {skill}
    </span>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans antialiased">
      {/* --- Header/Navigation --- */}
      <Header 
        name={MY_NAME} 
        accentColor={ACCENT_COLOR_CLASS} 
        onNavigate={smoothScroll} 
      />

      {/* --- Home/Hero Section --- */}
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
                onClick={(e) => { e.preventDefault(); smoothScroll('contact'); }}
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
                alt={`${MY_NAME}'s profile`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Experience & Education Section --- */}
      <section id="experience" className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title="Experience & Education" />

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className={`hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-700 h-full`}></div>
            
            {/* Experience */}
            <h3 className={`text-2xl font-bold text-white mb-6 mt-4 inline-flex items-center space-x-2 p-2 rounded-lg border border-gray-700 bg-gray-800`}>
                <HardHat className={`w-6 h-6 text-${color500}`} />
                <span>Professional Experience</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                {experience.map((item, index) => (
                    <TimelineItem key={item.id} item={item} index={index} isExperience={true} />
                ))}
            </div>

            {/* Education */}
            <h3 className={`text-2xl font-bold text-white mb-6 mt-4 inline-flex items-center space-x-2 p-2 rounded-lg border border-gray-700 bg-gray-800`}>
                <GraduationCap className={`w-6 h-6 text-${color500}`} />
                <span>Academic Journey</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {education.map((item, index) => (
                    <TimelineItem key={item.id} item={item} index={index} isExperience={false} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Projects Section (Using imported component) --- */}
      {/* We pass the data and the colors as props */}
      <Projects 
        projects={projects} 
        accentColor={ACCENT_COLOR_CLASS} 
      />

      {/* --- Skills Section --- */}
      <section id="skills" className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title="Skills & Toolbox" />
          
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            
            {/* Skill Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-left">
                
                {/* Programming & Scripting */}
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                        <Code className={`w-6 h-6 mr-2 text-${color500}`} />
                        Programming & Scripting
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {MOCK_SKILLS["Programming & Scripting"].map(skill => <SkillTag key={skill} skill={skill} />)}
                    </div>
                </div>

                {/* Data Visualization & BI */}
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                        <BarChart className={`w-6 h-6 mr-2 text-${color500}`} />
                        Data Visualization & BI
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {MOCK_SKILLS["Data Visualization & BI"].map(skill => <SkillTag key={skill} skill={skill} />)}
                    </div>
                </div>

                {/* Tools & Databases */}
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                        <HardHat className={`w-6 h-6 mr-2 text-${color500}`} />
                        Tools & Databases
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {MOCK_SKILLS["Tools & Databases"].map(skill => <SkillTag key={skill} skill={skill} />)}
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-6">Core Competencies</h3>
                <div className="max-w-3xl mx-auto space-y-4">
                    <SkillBar title="Python (Pandas/NumPy)" percentage={90} />
                    <SkillBar title="SQL (MySQL/Postgres)" percentage={85} />
                    <SkillBar title="Data Analysis & Cleaning" percentage={95} />
                    <SkillBar title="Power BI / Dashboarding" percentage={75} />
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Contact Section (Using imported component) --- */}
      <Contact 
        accentColor={ACCENT_COLOR_CLASS} 
      />

      {/* --- Footer --- */}
      <footer className="bg-gray-800 py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} {MY_NAME}. Built with React and Tailwind CSS.
        </div>
      </footer>
    </div>
  );
};

// Initial Render Logic for React
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
    // Fallback if the root element isn't found
    console.error("The root element with ID 'root' was not found in the DOM.");
}

// Ensure the root element exists if running outside a typical HTML template
if (!document.getElementById('root')) {
    const rootDiv = document.createElement('div');
    rootDiv.id = 'root';
    document.body.appendChild(rootDiv);
    const root = createRoot(rootDiv);
    root.render(<App />);
}
