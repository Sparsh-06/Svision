import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FaceBuddySection = () => {
  useGSAP(() => {
    const cards = document.querySelectorAll('.magnetic-card');

    cards.forEach(card => {
      let cardBox = card.getBoundingClientRect();
      
      card.addEventListener('mousemove', (e) => {
        const x = e.clientX - cardBox.left - cardBox.width / 2;
        const y = e.clientY - cardBox.top - cardBox.height / 2;
        gsap.to(card, {
          x: x * 0.2,
          y: y * 0.2,
          rotationX: y * 0.1,
          rotationY: -x * 0.1,
          ease: 'power2.out',
          duration: 0.3,
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          ease: 'power2.out',
          duration: 0.6,
        });
      });

      card.addEventListener('mouseenter', () => {
        cardBox = card.getBoundingClientRect();
      });
    });

    // ScrollTrigger animations for text and cards
    gsap.from('.facebuddy-title', {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: '.facebuddy-title',
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
      },
    });

    gsap.from('.facebuddy-features .magnetic-card', {
      opacity: 0,
      y: 50,
      duration: 2,
      stagger: 1,
      scrollTrigger: {
        trigger: '.facebuddy-features',
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
      },
    });

    gsap.from('.facebuddy-features h2', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.facebuddy-features',
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
      },
    });

    gsap.from('.facebuddy-features p', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.facebuddy-features',
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
      },
    });

  }, []);

  return (
    <section className="min-h-screen bg-white relative flex flex-col justify-center items-center px-6 py-16">
      <div className="text-center max-w-4xl z-10">
        <h1 className="facebuddy-title text-4xl md:text-5xl font-bold mb-6">
          FaceBuddy – Precision and Reliability in Every Pixel
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          FaceBuddy is an advanced facial recognition system developed to meet the highest standards of accuracy and efficiency. Whether it's for office security, educational institutions, medical facilities, or public safety, FaceBuddy provides a reliable and intelligent solution to identify and verify individuals seamlessly.
        </p>
        <div className="facebuddy-features grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 border border-gray-300 rounded-lg shadow-lg transition-shadow magnetic-card">
            <h2 className="text-2xl font-semibold mb-4">High Accuracy</h2>
            <p>
              Achieve 100% accuracy in face recognition under various conditions, including normal and thermal camera environments.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg shadow-lg transition-shadow magnetic-card">
            <h2 className="text-2xl font-semibold mb-4">Versatile Applications</h2>
            <p>
              Ideal for office security, school and college attendance, medical patient identification, and enhanced public safety.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg shadow-lg transition-shadow magnetic-card">
            <h2 className="text-2xl font-semibold mb-4">Real-Time Processing</h2>
            <p>
              Experience rapid and precise face detection and recognition with real-time processing capabilities.
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            See FaceBuddy in Action
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaceBuddySection;
