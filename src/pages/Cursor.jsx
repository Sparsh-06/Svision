import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./CustomCursor.css";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState("default");

  useGSAP(() => {
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setCursorSize("large");
    };

    const handleMouseLeave = () => {
      setCursorSize("default");
    };

    document.addEventListener("mousemove", moveCursor);

    const hoverableElements = document.querySelectorAll(".hoverable");
    hoverableElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverableElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  useGSAP(() => {
    gsap.to(".custom-cursor", {
      x: cursorPosition.x,
      y: cursorPosition.y,
      ease: "power2.out",
      duration: 0.1,
    });

    if (cursorSize === "large") {
      gsap.to(".custom-cursor", {
        width: "50px",
        height: "50px",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        border: "2px solid black",
        ease: "power2.out",
        duration: 0.3,
      });
    } else {
      gsap.to(".custom-cursor", {
        width: "20px",
        height: "20px",
        backgroundColor: "transparent",
        border: "2px solid black",
        ease: "power2.out",
        duration: 0.3,
      });
    }
  }, [cursorPosition, cursorSize]);

  return <div className="custom-cursor pointer-events-none fixed top-0 left-0"></div>;
};

export default CustomCursor;
