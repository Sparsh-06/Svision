import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const TechnologySection = () => {
  useGSAP(() => {
    // ScrollTrigger animations
    gsap.from('.tech-headline', {
      opacity: 0,
      y: -50,
      duration: 1.2,
      scrollTrigger: {
        trigger: '.tech-headline',
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
      },
    });

    gsap.from('.tech-body', {
      opacity: 0,
      y: 50,
      duration: 1.2,
      scrollTrigger: {
        trigger: '.tech-body',
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
      },
    });

    gsap.from('.tech-process', {
      opacity: 0,
      y: 30,
      duration: 1.2,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.tech-process',
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
      },
    });

    gsap.from('.tech-cta', {
      opacity: 0,
      y: 20,
      duration: 1.2,
      scrollTrigger: {
        trigger: '.tech-cta',
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
      },
    });

  }, []);

  return (
    <section className="min-h-screen bg-pink-100 flex flex-col px-6 justify-center border-4 border-black rounded-3xl m-5">
      <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-7xl">
        {/* Left Column: Headline and Body */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2 className="tech-headline text-4xl md:text-5xl font-bold mb-6 text-center lg:text-left">
            The Technology Behind FaceBuddy
          </h2>
          <p className="tech-body text-lg md:text-xl text-gray-700 mb-8 text-center lg:text-left">
            FaceBuddy leverages state-of-the-art machine learning algorithms and advanced computer vision techniques to deliver exceptional performance. Our technology is designed to handle diverse conditions and ensure reliable recognition in both normal and thermal camera scenarios.
          </p>
          <div className="tech-cta mt-6">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Learn More About Our Technology
            </button>
          </div>
        </div>

        {/* Right Column: Process Steps */}
        <div className="lg:w-1/2 flex flex-col space-y-6 mt-8 lg:mt-0">
          <div className="tech-process p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Data Collection</h3>
            <p>
              Gathering and preprocessing a vast range of facial images to train our models.
            </p>
          </div>
          <div className="tech-process p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Model Training</h3>
            <p>
              Employing deep learning techniques to develop a robust facial recognition model.
            </p>
          </div>
          <div className="tech-process p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Integration</h3>
            <p>
              Seamlessly integrating the model with web platforms and security systems for practical applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
