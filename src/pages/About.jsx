import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

const About = () => {
  const first = useRef(null);
  const second = useRef(null);
  const slider = useRef(null);
  let xpercent = 0;
  let direction = 1;
  

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animator);

    gsap.to(slider.current,{
      scrollTrigger:{
        trigger:(slider.current),
        start:0.5,
        end:'100%',
        scrub:0.8,
        onUpdate: e => direction = e.direction * -1
      },
      x:"-=180px",
    })
  },[])

  const animator = () =>{
    if (xpercent <= -100){
      xpercent = 0;
    }

    if(xpercent > 0){
      xpercent = -100;
    }
    gsap.set(first.current,{xPercent:xpercent});
    gsap.set(second.current,{xPercent:xpercent});
    xpercent += 0.25* direction;
    requestAnimationFrame(animator)
  }


  return (
    <div className="relative mx-auto overflow-hidden bg-slate-50">
      {/* Marquee Background */}
      <div className="absolute top-[25%] z-0 opacity-10 overflow-hidden">
        <div className="relative whitespace-nowrap flex hehe" ref={slider}>
          <p className="m-0 text-[240px] font-[500]" ref={first}>
            Who We Are -
          </p>
          <p className="ml-0 text-[240px] font-[500] absolute left-full" ref={second}>
            Who We Are -
          </p>
        </div>
      </div>

      {/* About Content */}
      <section className="relative z-10 px-6 md:px-16 md:py-24 lg:py-20">
        <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl xl:text-6xl/none text-[#2e146d] font-semibold my-6 tracking-tight">
                At Svision Tech ..
              </h1>
              <p className="max-w-full md:max-w-[600px] font-medium md:text-xl py-4">
                We are pioneers in advanced facial recognition technology. Our mission is to revolutionize the way the world interacts with technology through innovative solutions. FaceBuddy is our flagship product, designed to deliver unparalleled accuracy and performance in facial recognition for various applications.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#6b21a8] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#6b21a8]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Learn More
              </a>

            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width="350"
            height="350"
            alt="Acme AI"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-video"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
