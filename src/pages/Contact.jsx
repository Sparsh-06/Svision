import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const ContactPage = () => {
  useGSAP(() => {
    gsap.from('.contact-header', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.contact-form', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from('.footer', { opacity: 0, y: 50, duration: 1, delay: 1 });
  }, []);

  return (
    <div className="contact-page min-h-screen bg-gray-900 text-gray-200 p-8">
      <header className="contact-header text-center mb-8">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
      </header>
      
      <section className="contact-form mx-auto max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <p className="text-lg mb-6">Have questions or want to learn more about FaceBuddy? Reach out to us, and our team will be happy to assist you.</p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Name" className="p-3 border border-gray-700 rounded bg-gray-900 text-gray-200"/>
            <input type="email" placeholder="Email" className="p-3 border border-gray-700 rounded bg-gray-900 text-gray-200"/>
            <input type="tel" placeholder="Phone" className="p-3 border border-gray-700 rounded bg-gray-900 text-gray-200"/>
            <textarea placeholder="Message" className="p-3 border border-gray-700 rounded bg-gray-900 text-gray-200 col-span-2" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Submit</button>
        </form>
      </section>
      
      <footer className="footer mt-12 bg-gray-800 text-gray-300 p-12 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/path/to/logo.png" alt="Company Logo" className="w-24 h-auto mr-4"/>
            <div>
              <p className="font-semibold text-lg">Company Name</p>
              <p>Address: [Company Address]</p>
              <p>Phone: [Company Phone Number]</p>
              <p>Email: [Company Email Address]</p>
            </div>
          </div>
          <div className="flex space-x-4 mb-8">
            <a href="[Facebook]" className="text-gray-300 hover:text-gray-100" aria-label="Facebook">
                <img src="src/assets/logos/facebook.png" alt="" srcset="" />
            </a>
            <a href="[Twitter]" className="text-gray-300 hover:text-gray-100" aria-label="Twitter">
                <img src="src/assets/logos/linkedin.png" alt="" srcset="" />
              
            </a>
            <a href="[LinkedIn]" className="text-gray-300 hover:text-gray-100" aria-label="LinkedIn">
                <img src="src/assets/logos/twitter.png" alt="" srcset="" />
              
            </a>
          </div>
        </div>
        <div className="mb-8 flex flex-col md:flex-row justify-between">
          <div className="quick-links">
            <a href="#" className="text-blue-400 hover:text-blue-300">About Us</a> | 
            <a href="#" className="text-blue-400 hover:text-blue-300">FaceBuddy</a> | 
            <a href="#" className="text-blue-400 hover:text-blue-300">How It Works</a> | 
            <a href="#" className="text-blue-400 hover:text-blue-300">Applications</a> | 
            <a href="#" className="text-blue-400 hover:text-blue-300">Testimonials</a> | 
            <a href="#" className="text-blue-400 hover:text-blue-300">Contact Us</a>
          </div>
          <div className="legal">
            <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a> | 
            <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a>
          </div>
        </div>
        <div className="copyright text-gray-500 text-center">
          © 2024 Svision Tech. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
