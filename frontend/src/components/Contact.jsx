import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = ({ accentColor }) => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error', 'submitting'

  // Handle contact form submission (simulated for frontend-only)
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call delay and success/failure
    try {
      // NOTE: Replace this with an actual fetch to your contact endpoint if one exists
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
    
  const color500 = `${accentColor}-500`;
  
  // Helper component for section headers
  const SectionHeader = ({ title }) => (
    <h2 className={`text-4xl font-extrabold text-white text-center mb-12 border-b-2 border-${color500} inline-block pb-1`}>
      {title}
    </h2>
  );

  return (
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
              className={`mt-1 block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-${accentColor}-500 focus:border-${accentColor}-500 transition-colors`}
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
              className={`mt-1 block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-${accentColor}-500 focus:border-${accentColor}-500 transition-colors`}
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
              className={`mt-1 block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-${accentColor}-500 focus:border-${accentColor}-500 transition-colors`}
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
            className={`w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-${color500} hover:bg-${accentColor}-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md`}
          >
            <Send className="w-5 h-5 mr-2" />
            {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
