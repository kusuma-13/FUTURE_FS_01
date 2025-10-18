import React from 'react';

/**
 * Header Component for site navigation.
 * It is responsible for displaying the site title and navigation links.
 * * @param {string} name - The name to display in the header (e.g., "Kusuma").
 * @param {string} accentColor - The Tailwind color class prefix (e.g., "sky").
 * @param {function} onNavigate - A function to handle navigation/scrolling (e.g., smoothScroll).
 */
const Header = ({ name, accentColor, onNavigate }) => {
  const color500 = `${accentColor}-500`;
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" }, 
    { name: "Academics & Core Skills", id: "academics-skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            {/* Clickable site title for Home navigation */}
            <button
              onClick={() => onNavigate('home')} 
              className={`text-2xl font-extrabold tracking-tight text-white hover:text-${color500} transition-colors duration-200`}
            >
              {name.split(' ')[0]}<span className={`text-${color500}`}>.dev</span>
            </button>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)} // Uses the function passed from App
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

export default Header;
