import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  useGSAP(() => {
    // ScrollTrigger animations for the services cards
    gsap.from('.service-card', {
      opacity: 0,
      y: 30,
      duration: 1.2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.service-card',
        start: 'top 85%',
        end: 'top 65%',
        scrub: true,
      },
    });

    gsap.from('.services-headline', {
      opacity: 0,
      y: -20,
      duration: 1.2,
      scrollTrigger: {
        trigger: '.services-headline',
        start: 'top 85%',
        end: 'top 65%',
        scrub: true,
      },
    });

    gsap.from('.services-body', {
      opacity: 0,
      y: 20,
      duration: 1.2,
      scrollTrigger: {
        trigger: '.services-body',
        start: 'top 85%',
        end: 'top 65%',
        scrub: true,
      },
    });

    gsap.from('.services-cta', {
      opacity: 0,
      y: 10,
      duration: 1.2,
      scrollTrigger: {
        trigger: '.services-cta',
        start: 'top 85%',
        end: 'top 65%',
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col px-6 py-12 justify-center m-5">
      <div className="container mx-auto flex flex-col items-center max-w-6xl">
        {/* Header */}
        <div className="w-full flex flex-col items-center mb-12 text-center">
          <h2 className="services-headline text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            Comprehensive Solutions Tailored to Your Needs
          </h2>
          <p className="services-body text-lg md:text-xl text-gray-700 mb-10 max-w-2xl">
            At Svision Tech, we offer a wide range of services designed to help businesses and organizations harness the power of technology. Whether you're looking to develop a cutting-edge application, integrate machine learning into your operations, or enhance your web presence, our expert team is here to deliver innovative solutions.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Data Science */}
          <div className="service-card p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Data Science</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Data Analysis & Insights</li>
              <li>Predictive Modeling</li>
              <li>Data Visualization</li>
            </ul>
          </div>

          {/* Machine Learning */}
          <div className="service-card p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Machine Learning</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Custom ML Solutions</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Computer Vision</li>
            </ul>
          </div>

          {/* Web Development */}
          <div className="service-card p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Web Development</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Custom Website Development</li>
              <li>E-commerce Solutions</li>
              <li>Web Application Development</li>
            </ul>
          </div>

          {/* App Development */}
          <div className="service-card p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">App Development</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Mobile App Development</li>
              <li>Cross-Platform Solutions</li>
              <li>App Maintenance & Support</li>
            </ul>
          </div>

          {/* Cloud Solutions */}
          <div className="service-card p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Cloud Solutions</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Cloud Infrastructure</li>
              <li>DevOps Services</li>
              <li>Cloud Migration</li>
            </ul>
          </div>

          {/* AI & Automation */}
          <div className="service-card p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">AI & Automation</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Intelligent Automation</li>
              <li>Chatbots & Virtual Assistants</li>
              <li>Robotic Process Automation (RPA)</li>
            </ul>
          </div>

          {/* UI/UX Design */}
          <div className="service-card p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">UI/UX Design</h3>
            <ul className="text-gray-600 space-y-2">
              <li>User-Centered Design</li>
              <li>Prototyping & Wireframing</li>
              <li>Design Audits</li>
            </ul>
          </div>
          <div className="service-card p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">UI/UX Design</h3>
            <ul className="text-gray-600 space-y-2">
              <li>User-Centered Design</li>
              <li>Prototyping & Wireframing</li>
              <li>Design Audits</li>
            </ul>
          </div>
          <div className="service-card p-6 bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">UI/UX Design</h3>
            <ul className="text-gray-600 space-y-2">
              <li>User-Centered Design</li>
              <li>Prototyping & Wireframing</li>
              <li>Design Audits</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="services-cta mt-16 text-center">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-transform transform hover:-translate-y-1 hover:shadow-lg mr-4">
            Explore Our Services
          </button>
          <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
