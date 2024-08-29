import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


import React from 'react';

const Info = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Why Choose <span className="text-blue-600">SecureVision Tech</span>?
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Transforming challenges into opportunities with innovative and secure technology solutions.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Challenges Section */}
          <div className="col-span-1 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Challenges Faced by Startups & Companies</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Limited Resources</li>
              <li>Rapidly Changing Technology</li>
              <li>Data Overload</li>
              <li>Lack of Technical Expertise</li>
              <li>Time Constraints</li>
              <li>Scalability Issues</li>
              <li>Security Concerns</li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-100 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Cost-Effective Solutions</h3>
              <p className="text-gray-700">
                We offer solutions that optimize costs without compromising quality, helping you achieve more with less.
              </p>
            </div>
            <div className="bg-blue-100 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Expert Team</h3>
              <p className="text-gray-700">
                Our team of seasoned professionals brings extensive experience and technical expertise to every project.
              </p>
            </div>
            <div className="bg-blue-100 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Agile and Efficient Development</h3>
              <p className="text-gray-700">
                We embrace agile methodologies to ensure swift, efficient, and adaptive development processes.
              </p>
            </div>
            <div className="bg-blue-100 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Scalable and Secure Technologies</h3>
              <p className="text-gray-700">
                Our solutions are designed with scalability and security in mind, ensuring your growth is supported at every stage.
              </p>
            </div>
            <div className="bg-blue-100 rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Data-Driven Decision Making</h3>
              <p className="text-gray-700">
                We empower you with actionable insights derived from robust data analysis, driving smarter business decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Section */}
        <div className="mt-20 bg-gray-100 rounded-lg shadow-lg p-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Commitment to Your Success</h3>
          <p className="text-lg text-gray-700">
            At SecureVision Tech, we believe in building long-term partnerships with our clients. Our commitment to innovation, security, and customer satisfaction sets us apart. Let us help you navigate the complexities of the digital world with confidence.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-700 transition duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
