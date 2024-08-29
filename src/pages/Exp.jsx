import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import React, { useRef } from "react";

const SecureVisionSection = () => {
  const full = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.to(full.current, {
      scrollTrigger: {
        trigger: full.current,
        start: "top 70%",
        end: "bottom 20%",
        scrub: 1,
      },
      border: "8px solid #6b21a8",
      borderRadius: "80px",
      duration: 1,
      ease: "linear",
    });
  }, []);

  return (
    <section className="bg-white min-h-screen flex items-center justify-center p-10">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl p-14"
        ref={full}
      >
        {/* Left side - Title and Intro */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            SECURE-VISION TECH
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Experience
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            At SecureVision Tech, we pride ourselves on delivering real-time
            experiences that redefine security solutions. Our advanced facial
            recognition systems operate seamlessly in real-time, providing
            instant and accurate identification to enhance security in various
            environments such as offices, schools, and colleges.
          </p>
        </div>

        {/* Right side - Features List */}
        <div className="flex flex-col justify-center bg-gray-100 p-8 rounded-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Our real-time FaceBuddy technology ensures:
          </h3>
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
            <li>
              <strong>Immediate Response:</strong> Our systems quickly detect
              and respond to potential security threats, providing peace of mind
              and safety to our clients.
            </li>
            <li>
              <strong>Accurate Monitoring:</strong> Real-time facial recognition
              allows for precise tracking and monitoring, ensuring that only
              authorized individuals gain access to secure areas.
            </li>
            <li>
              <strong>Efficiency and Speed:</strong> By processing data
              instantly, our solutions minimize delays and improve operational
              efficiency.
            </li>
            <li>
              <strong>Seamless Integration:</strong> Our real-time systems
              integrate smoothly with existing security infrastructure, offering
              a hassle-free upgrade to advanced security measures.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SecureVisionSection;
