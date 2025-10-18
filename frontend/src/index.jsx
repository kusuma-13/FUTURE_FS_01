import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
// CRITICAL FIX: All icons used anywhere in this file must be imported here.
import { 
  Github, Linkedin, Mail, Code, BarChart, Zap, Send, 
  GraduationCap, HardHat, Briefcase, 
  Menu, Phone, Home, User, Cpu, Database, Award, CheckCircle // CheckCircle is used in Certifications
} from 'lucide-react'; 

// --- Customizable Variables (Personal Information) ---
const MY_NAME = "Kusuma V";
const MY_TITLE = "Data Analyst Intern";
const MY_BIO =
  "I am a highly motivated Data Analyst Intern with a strong foundation in **Python (Pandas, NumPy)** and **SQL (MySQL)**. My passion lies in transforming raw data into actionable insights, specifically focused on **fraud pattern analysis** and **process optimization**. I thrive on challenges, having developed projects like a Transaction Fraud Analyzer and a Job Portal Resume Keyword Analyzer. I am proficient in creating dynamic visualizations using **Power BI** and **Streamlit** to communicate complex findings effectively, driving data-informed decisions.";

// **************************************************************************************************************************************************
const PROFILE_IMAGE_URL = "https://github.com/kusuma-13/FUTURE_FS_01/blob/main/frontend/src/assets/profile_photo.jpg?raw=true"; 
// **************************************************************************************************************************************************

const ACCENT_COLOR_CLASS = "sky"; // Change 'sky' to 'emerald', 'violet', or 'rose' to change theme
const MY_EMAIL = "kusumavkusumav13@gmail.com";
// --- UPDATED PHONE NUMBER IS PRESERVED ---
const MY_PHONE = "+91 74838 80867"; 

const ACCENT_COLORS = {
    500: `${ACCENT_COLOR_CLASS}-500`,
    400: `${ACCENT_COLOR_CLASS}-400`,
    100: `${ACCENT_COLOR_CLASS}-100`,
};

// --- Mock Data ---

// 1. EDUCATION 
const education = [
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "MLA Academy of Higher Learning, Bengaluru",
        dates: "2023 - 2026 (Expected)",
        details: ["Relevant Coursework: Data Structures, Database Management Systems, Advanced Algorithms, and Web Development Principles."],
    },
    {
        degree: "Pre-University Certification (PUC) - Commerce Stream",
        institution: "JS Pre-University College, Bengaluru",
        dates: "2021 - 2023",
        details: [
            "Core Subjects: **Business Studies**, **Accountancy**, **Statistics**, and **Computer Science**.",
            "Established a strong foundation in commercial operations, financial analysis, and quantitative methods."
        ],
    },
];

// 2. INTERNSHIP EXPERIENCE - Single Internship entry
const experience = [
  {
    title: "Data Analytics Intern",
    company: "Rooman Technologies Pvt. Ltd.",
    dates: "September 2025 (1 Month)",
    description: [
      "Assisted in cleaning and preprocessing raw datasets using **Pandas** and **NumPy**, improving data reliability by 15%.",
      "Developed interactive dashboards using **Power BI** for the sales team, reducing report generation time by 2 hours daily.",
      "Wrote and optimized **MySQL** queries for complex data extraction, supporting a system migration project.",
      "Contributed to data quality checks using **Streamlit** to build a lightweight data validation application."
    ],
  },
];

// 3. CERTIFICATIONS
const certifications = [
  { name: "Power BI", issuer: "SimpliLearn", date: "August 2025" },
  { name: "Cloud Application Development", issuer: "Skill India (PMKVY)", date: "Mar 2024" },
  { name: "Digital Marketing Short-term Course", issuer: "Inspyr", date: "April 2024" },
  { name: "Office Automation", issuer: "KSEAB", date: "July 2023" },
];

// 4. PROJECTS
const projects = [
  {
    title: "Transaction Fraud Pattern Analyzer",
    description: "A data analytics project utilizing Python and MySQL to identify and visualize fraudulent transaction patterns within large datasets.",
    tags: ["Python", "MySQL", "Data Analysis", "Pandas"],
    link: "https://github.com/kusuma-13/Beginner_Project.git",
  },
  {
    title: "Job Portal Resume Keyword Analyzer",
    description: "A data analytics project using Python and MYSQL to detect keywords in resumes for job portals, enhancing candidate-job matching efficiency.",
    tags: ["Python", "MYSQL", "Streamlit"],
    link: "https://github.com/kusuma-13/Intermediate_Project.git",
  },
];

// 5. SKILLS - Structured for display
const skills = {
  "Programming & Scripting": ["Python (Pandas, NumPy)", "SQL (MySQL)"],
  "Data Visualization & BI": ["Power BI", "Streamlit", "Seaborn", "Matplotlib"],
  "Tools & Databases": ["Git/GitHub", "Jupyter Notebooks", "MySQL"],
};

// --- Navigation Data (Section order reflecting the logical layout) ---
const NAV_LINKS = [
    { name: "Home", id: "home", icon: Home },
    { name: "About Me", id: "about", icon: User },
    { name: "Experience", id: "experience", icon: Briefcase },
    { name: "Projects", id: "projects", icon: HardHat },
    { name: "Skills", id: "skills", icon: Zap },
    { name: "Education", id: "education", icon: GraduationCap },
    { name: "Contact", id: "contact", icon: Send },
];


// --- Shared Scroll Function ---
const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        // Scroll slightly above the element to account for the fixed nav bar
        const offset = element.offsetTop - 80; 
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
};

// --- Component Definitions (UI Building Blocks) ---

const NavBar = ({ accentColor }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Using a very dark bg-gray-950 for high contrast
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-gray-950 border-b border-${accentColor}-600 shadow-2xl`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className={`flex-shrink-0 text-xl font-bold text-${accentColor}-400`}>
                        {MY_NAME}
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-4">
                        {NAV_LINKS.map(link => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`text-gray-300 hover:bg-gray-800 hover:text-${accentColor}-400 px-3 py-2 rounded-lg text-sm font-medium transition duration-150`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-md text-gray-300 hover:text-${accentColor}-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-${accentColor}-400`}
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map(link => (
                            <button
                                key={link.id}
                                onClick={() => {
                                    scrollToSection(link.id);
                                    setIsMenuOpen(false);
                                }}
                                className={`block w-full text-left text-gray-300 hover:bg-gray-800 hover:text-${accentColor}-400 px-3 py-2 rounded-lg text-base font-medium transition duration-150 flex items-center`}
                            >
                                <link.icon className="h-4 w-4 mr-2" />
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};


// HEADER: Uses flex-row-reverse on desktop to put the image on the right.
const Header = ({ name, title, imageUrl, accentColor }) => (
  <header 
    id="home" 
    // Use flex-row-reverse on medium screens up to put image on the right
    // Use justify-between to push the two elements to the edges
    className={`flex flex-col md:flex-row-reverse justify-between items-center p-8 bg-gray-800 shadow-2xl rounded-xl mb-8 pt-24 md:pt-10 border border-${accentColor}-600`}
  >
    
    {/* Image: Adjusted object-fit to cover the entire frame, removing whitespace */}
    <div className="flex-shrink-0 mb-6 md:mb-0 md:ml-10"> 
      <img
        // UPDATED: Used object-cover to ensure the circular frame is completely filled (no white space).
        className={`w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-${accentColor}-400 shadow-lg ring-4 ring-${accentColor}-700/50`}
        src={imageUrl}
        alt={`${name}'s profile`}
        // Placeholder size 256x256
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/256x256/1f2937/d1d5db?text=KV"; }}
      />
    </div>

    {/* Text: Aligned left (flex-row-reverse puts this on the left visually on desktop). 
        Text is centered on mobile for better appearance when stacked.
    */}
    <div className="flex-grow text-center md:text-left max-w-lg"> 
      <div className="mb-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-50 tracking-tight">{name}</h1>
        <p className={`text-xl font-medium text-${accentColor}-400 mt-2`}>{title}</p>
      </div>
      <div className="text-gray-300">
        <p className="text-base italic">Data Analyst | Python | MySQL | Power BI</p>
      </div>
    </div>
  </header>
);

// Section component with stronger border and shadow
const Section = ({ title, icon: Icon, accentColor, children, id, className = "" }) => (
  <section 
    id={id} 
    // Stronger section styling 
    className={`p-6 bg-gray-800 rounded-xl shadow-2xl w-full border border-gray-700 hover:border-${accentColor}-700 transition duration-300 ${className}`}
  >
    <h2 className={`text-2xl font-bold border-b-2 border-${accentColor}-500 pb-3 text-gray-50 flex items-center mb-6`}>
        <Icon className={`h-6 w-6 mr-3 text-${accentColor}-400`} />
        {title}
    </h2>
    {children}
  </section>
);

// --- Component Implementations ---

const AboutMe = ({ bio, accentColor }) => (
    <Section id="about" title="About Me" icon={User} accentColor={accentColor}>
        <p className="text-gray-300 text-lg font-medium leading-relaxed">{bio}</p>
    </Section>
)

const Experience = ({ experience, accentColor }) => (
  <Section id="experience" title="Internship & Related Experience" icon={Briefcase} accentColor={accentColor}>
    <div className="grid grid-cols-1 gap-6">
      {experience.map((exp, index) => (
        <div key={index} 
             className={`relative p-5 rounded-xl bg-gray-700/50 shadow-lg border border-gray-700 
                         hover:shadow-xl hover:border-${accentColor}-500 transition duration-300`}
        >
          {/* Accent border line at the top */}
          <div className={`absolute top-0 left-0 w-full h-1 bg-${accentColor}-600 rounded-t-xl`}></div>
          <div className="flex justify-between items-start mb-2 mt-2">
            <h3 className="text-xl font-semibold text-gray-100">{exp.title}</h3>
            <span className={`text-sm font-medium text-${accentColor}-400 flex-shrink-0 ml-4`}>{exp.dates}</span>
          </div>
          <p className="text-gray-300 text-base italic mb-3">@{exp.company}</p>
          <ul className="list-disc list-outside ml-5 mt-2 text-gray-300">
            {exp.description.map((item, i) => (
              <li key={i} className="text-sm mb-1" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

// Skills component uses 3 columns on large screens
const Skills = ({ skills, accentColor }) => (
  <Section id="skills" title="Skills & Toolbox" icon={Cpu} accentColor={accentColor}>
    {/* Outer Grid for Skill Categories: 3 columns on large screens */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
      {/* Object.entries to iterate over the skill categories */}
      {Object.entries(skills).map(([categoryTitle, tags]) => {
        // Simple icon lookup 
        const IconMap = {
            "Programming & Scripting": Code,
            "Data Visualization & BI": BarChart,
            "Tools & Databases": Database,
        };
        const CategoryIcon = IconMap[categoryTitle] || Code;
        
        return (
          // Category Card
          <div key={categoryTitle} className={`bg-gray-700/50 p-4 rounded-lg border border-gray-700 shadow-md`}>
            <h3 className={`text-lg font-bold text-gray-100 mb-3 pb-1 border-b border-gray-700 flex items-center`}>
              <CategoryIcon className={`h-5 w-5 mr-2 text-${accentColor}-400`} />
              {categoryTitle}
            </h3>
            
            {/* Tags flow naturally */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                // Skill Tag Style 
                <span key={i} 
                  className={`px-3 py-1 text-center bg-${accentColor}-600/70 rounded-full 
                             text-xs font-medium text-white border border-${accentColor}-600 shadow-sm
                             hover:bg-${accentColor}-500 transition duration-200`}
                >
                  {tag}
              </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </Section>
);

// Projects component uses 2 columns on medium screens
const Projects = ({ projects, accentColor }) => (
  <Section id="projects" title="Projects" icon={HardHat} accentColor={accentColor}>
    {/* Two-column grid for project cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
      {projects.map((proj, index) => (
        <div key={index} 
             className={`p-5 bg-gray-700/50 rounded-xl shadow-lg border border-gray-700 
                         hover:shadow-2xl hover:border-${accentColor}-500 transition duration-300 transform hover:-translate-y-1`}
        >
          <h3 className={`text-xl font-semibold text-gray-100 mb-2 hover:text-${accentColor}-400 transition`}>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.title}</a>
          </h3>
          <p className="text-gray-300 text-sm mb-4">{proj.description}</p>
          {/* Tags section border */}
          <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-700">
            {proj.tags.map((tag, i) => (
              <span key={i} 
                    className={`bg-${accentColor}-600/70 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md 
                                hover:bg-${accentColor}-500 transition`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

// Education component uses 2 columns on medium screens
const Education = ({ education, accentColor }) => (
    <Section id="education" title="Education & Qualification" icon={GraduationCap} accentColor={accentColor}>
        {/* Two-column grid for education entries to match "2 sections" request */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
                <div key={index} 
                     className={`p-5 rounded-xl bg-gray-700/50 shadow-lg border border-gray-700 
                                 hover:shadow-xl hover:border-${accentColor}-500 transition duration-300`}
                >
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold text-gray-100">{edu.degree}</h3>
                        <p className={`text-sm font-medium text-${accentColor}-400 flex-shrink-0 ml-4`}>{edu.dates}</p>
                    </div>
                    <p className="text-gray-300 mt-1">{edu.institution}</p>
                    <ul className="list-disc list-outside ml-5 mt-3 text-gray-400 text-xs">
                        {edu.details.map((item, i) => (
                            <li key={i} className="mb-1" dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </Section>
);

const Certifications = ({ certifications, accentColor }) => (
    <Section id="certifications" title="Certifications" icon={Award} accentColor={accentColor}>
        {/* Enforcing 2 columns from tablet size up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
                <div key={index} 
                     // Compact card style mimicking the density of the skills section
                     className={`p-4 rounded-lg bg-gray-700/50 shadow-md border border-${accentColor}-700 
                                 hover:border-${accentColor}-500 transition duration-300 transform hover:scale-[1.02]`}
                >
                    <h3 className={`text-base font-bold text-gray-50 mb-1 leading-snug`}>
                       <CheckCircle className={`inline h-4 w-4 mr-2 text-${accentColor}-400`} />
                       {cert.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                        Issued by: <span className="font-semibold text-gray-300">{cert.issuer}</span>
                    </p>
                    <p className={`text-xs text-${accentColor}-300 font-medium mt-0.5`}>
                        {cert.date}
                    </p>
                </div>
            ))}
        </div>
    </Section>
);

const Contact = ({ accentColor }) => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple form validation
        if (!formData.name || !formData.email) {
             console.error("Name and Email are required.");
             return;
        }
        
        setStatus('submitting');
        // Simulate API call delay for form submission
        setTimeout(() => {
            console.log("Form submitted:", formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    // Data for direct links
    const contactLinks = [
        { Icon: Mail, text: MY_EMAIL, href: `mailto:${MY_EMAIL}`, target: '_self' },
        { Icon: Phone, text: MY_PHONE, href: `tel:${MY_PHONE.replace(/\s/g, '')}`, target: '_self' },
        { Icon: Linkedin, text: 'LinkedIn Profile', href: 'https://linkedin.com/in/kusuma-v', target: '_blank' },
        { Icon: Github, text: 'GitHub Repository', href: 'https://github.com/kusuma-13', target: '_blank' },
    ];

    const isSubmitting = status === 'submitting';
    const isSuccess = status === 'success';

    return (
        <Section id="contact" title="Contact Details & Inquiry" icon={Send} accentColor={accentColor}>
            
            {/* Two-Column Layout for Contact Details and Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* LEFT COLUMN: Direct Contact Links */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-100 mb-4">Direct Connect</h3>
                    {contactLinks.map(({ Icon, text, href, target }) => (
                        <a key={text} href={href} target={target} 
                           className={`flex items-center p-3 rounded-lg bg-gray-700/50 border border-gray-700 hover:bg-gray-700/70 hover:border-${accentColor}-400 hover:text-${accentColor}-400 transition font-medium text-gray-300 shadow-md`}
                        >
                            <Icon className={`h-5 w-5 mr-3 text-${accentColor}-400 flex-shrink-0`} />
                            <span className="truncate">{text}</span>
                        </a>
                    ))}
                </div>

                {/* RIGHT COLUMN: Contact Form (Send Option) */}
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-inner border border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-100 mb-4">Send Me a Message</h3>
                    
                    {/* Success Message */}
                    {isSuccess && (
                        <div className={`p-4 mb-4 rounded-lg bg-green-900/50 border border-green-700 flex items-center text-green-300`}>
                            <CheckCircle className="h-5 w-5 mr-3" />
                            <p className="font-semibold">Message sent successfully! I'll be in touch soon.</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name (Required)"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-gray-800 text-gray-50 border border-gray-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition placeholder-gray-400"
                            disabled={isSubmitting}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email (Required)"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-gray-800 text-gray-50 border border-gray-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition placeholder-gray-400"
                            disabled={isSubmitting}
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message (Optional)"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-800 text-gray-50 border border-gray-600 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition placeholder-gray-400 resize-none"
                            disabled={isSubmitting}
                        ></textarea>
                        <button
                            type="submit"
                            className={`w-full flex items-center justify-center py-3 rounded-lg font-bold text-white transition duration-300 
                                       ${isSubmitting ? `bg-gray-500 cursor-not-allowed` : `bg-${accentColor}-600 hover:bg-${accentColor}-500 shadow-lg shadow-${accentColor}-800/50`}
                                      `}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : (
                                <span className="flex items-center">
                                    <Send className="h-5 w-5 mr-2" />
                                    Send Message
                                </span>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
};


// --- Main Application Component ---
export default function App() {
  return (
    // Main background is very dark
    <div className="min-h-screen bg-gray-950 font-sans p-4 sm:p-8 pt-16"> 
        <NavBar accentColor={ACCENT_COLOR_CLASS} />
        
        {/* Main content container is centered with max-w-6xl */}
        <div id="resume-container" className="max-w-6xl mx-auto shadow-2xl rounded-xl p-4 sm:p-8 bg-gray-900">
            
            {/* 1. HOME (Name, Title, Photo) - Full Width */}
            <Header 
              name={MY_NAME} 
              title={MY_TITLE} 
              accentColor={ACCENT_COLOR_CLASS} 
              imageUrl={PROFILE_IMAGE_URL} 
            />
            
            {/* 2. SINGLE COLUMN LAYOUT */}
            {/* All sections are now directly placed here, stacking vertically with spacing */}
            <div className="space-y-8 mt-8">
                
                <AboutMe bio={MY_BIO} accentColor={ACCENT_COLOR_CLASS} />
                
                <Experience experience={experience} accentColor={ACCENT_COLOR_CLASS} />

                <Projects projects={projects} accentColor={ACCENT_COLOR_CLASS} />
                
                <Skills skills={skills} accentColor={ACCENT_COLOR_CLASS} />

                <Education education={education} accentColor={ACCENT_COLOR_CLASS} />

                <Certifications certifications={certifications} accentColor={ACCENT_COLOR_CLASS} />

                <Contact accentColor={ACCENT_COLOR_CLASS} />
                
            </div>


            {/* 3. FOOTER - Full Width */}
            <footer className="bg-gray-950 py-6 border-t border-gray-700 mt-8 rounded-b-xl shadow-inner">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} {MY_NAME}. Built with React and Tailwind CSS.
              </div>
            </footer>
        </div>
    </div>
  );
};

// Initial Render Logic for React
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
