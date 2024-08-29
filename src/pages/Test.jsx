import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TestimonialsSection = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    gsap.to('.testimonial-track', {
      xPercent: -100,
      repeat: -1,
      ease: 'linear',
      duration: 40,
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-indigo-50 to-indigo-100 py-16 border-4 border-indigo-600 rounded-3xl m-5">
      <div className="container mx-auto text-center px-6">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-8">
          What Our Clients Say
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Hear from those who have experienced the transformative impact of FaceBuddy.
        </p>

        {/* Marquee Section */}
        <div
          ref={marqueeRef}
          className="overflow-hidden relative max-w-full mx-auto"
        >
          <div className="flex space-x-8 justify-center items-center testimonial-track">
            {/* Testimonial 1 */}
            <div className="testimonial-card bg-white p-6 sm:p-8 border border-gray-200 rounded-xl shadow-lg inline-block min-w-[280px] max-w-[350px] sm:max-w-[320px] transform transition-transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 text-indigo-700 rounded-full p-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4 text-left">
                  <p className="font-bold text-indigo-900 text-lg">[Client Name]</p>
                  <p className="text-sm text-gray-600">[Position], [Company]</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-left">
                "FaceBuddy has revolutionized our office security and attendance system. The accuracy and reliability are unmatched!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card bg-white p-6 sm:p-8 border border-gray-200 rounded-xl shadow-lg inline-block min-w-[280px] max-w-[350px] sm:max-w-[320px] transform transition-transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 text-indigo-700 rounded-full p-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4 text-left">
                  <p className="font-bold text-indigo-900 text-lg">[Client Name]</p>
                  <p className="text-sm text-gray-600">[Position], [Institution]</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-left">
                "The integration of FaceBuddy into our campus has significantly improved our security and operational efficiency."
              </p>
            </div>

            {/* Duplicate the cards to create a continuous scroll */}
            <div className="testimonial-card bg-white p-6 sm:p-8 border border-gray-200 rounded-xl shadow-lg inline-block min-w-[280px] max-w-[350px] sm:max-w-[320px] transform transition-transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 text-indigo-700 rounded-full p-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4 text-left">
                  <p className="font-bold text-indigo-900 text-lg">[Client Name]</p>
                  <p className="text-sm text-gray-600">[Position], [Company]</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-left">
                "FaceBuddy has revolutionized our office security and attendance system. The accuracy and reliability are unmatched!"
              </p>
            </div>

            <div className="testimonial-card bg-white p-6 sm:p-8 border border-gray-200 rounded-xl shadow-lg inline-block min-w-[280px] max-w-[350px] sm:max-w-[320px] transform transition-transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 text-indigo-700 rounded-full p-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4 text-left">
                  <p className="font-bold text-indigo-900 text-lg">[Client Name]</p>
                  <p className="text-sm text-gray-600">[Position], [Institution]</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-left">
                "The integration of FaceBuddy into our campus has significantly improved our security and operational efficiency."
              </p>
            </div>
            <div className="testimonial-card bg-white p-6 sm:p-8 border border-gray-200 rounded-xl shadow-lg inline-block min-w-[280px] max-w-[350px] sm:max-w-[320px] transform transition-transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 text-indigo-700 rounded-full p-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4 text-left">
                  <p className="font-bold text-indigo-900 text-lg">[Client Name]</p>
                  <p className="text-sm text-gray-600">[Position], [Institution]</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-left">
                "The integration of FaceBuddy into our campus has significantly improved our security and operational efficiency."
              </p>
            </div>
            <div className="testimonial-card bg-white p-6 sm:p-8 border border-gray-200 rounded-xl shadow-lg inline-block min-w-[280px] max-w-[350px] sm:max-w-[320px] transform transition-transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 text-indigo-700 rounded-full p-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4 text-left">
                  <p className="font-bold text-indigo-900 text-lg">[Client Name]</p>
                  <p className="text-sm text-gray-600">[Position], [Institution]</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-left">
                "The integration of FaceBuddy into our campus has significantly improved our security and operational efficiency."
              </p>
            </div>
            <div className="testimonial-card bg-white p-6 sm:p-8 border border-gray-200 rounded-xl shadow-lg inline-block min-w-[280px] max-w-[350px] sm:max-w-[320px] transform transition-transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 text-indigo-700 rounded-full p-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4 text-left">
                  <p className="font-bold text-indigo-900 text-lg">[Client Name]</p>
                  <p className="text-sm text-gray-600">[Position], [Institution]</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-left">
                "The integration of FaceBuddy into our campus has significantly improved our security and operational efficiency."
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            Read More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
