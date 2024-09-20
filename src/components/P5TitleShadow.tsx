"use client";
import React, { useRef, useEffect, useState } from "react";

const P5ShadowController: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [mouseX, setMouseX] = useState(0); // Track mouse X position
  const [mouseY, setMouseY] = useState(0); // Track mouse Y position

  useEffect(() => {
    // Mousemove event handler to update mouse coordinates
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    // Add event listener for mouse movements
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    // Animation loop to update the 'b' value based on time and shadow dynamically
    const animate = (time: number) => {
      if (titleRef.current) {
        const { innerWidth, innerHeight } = window;

        // Calculate 'r' and 'g' based on mouse position
        const r = Math.floor((mouseX / innerWidth) * 255);
        const g = Math.floor((mouseY / innerHeight) * 255);

        // Calculate 'b' based on time for continuous change
        const b = Math.floor((Math.sin(time * 0.001) + 1) * 127);

        // Apply the dynamic shadow and color
        titleRef.current.style.textShadow = `
          0px 0px 8px rgba(${r}, ${g}, ${b}, 0.8),
          0px 0px 10px rgba(${r}, ${g}, ${b}, 0.6),
          0px 0px 20px rgba(${r}, ${g}, ${b}, 0.5),
          0px 0px 40px rgba(${r}, ${g}, ${b}, 0.4)
        `;
        titleRef.current.style.color = `rgb(${r}, ${g}, ${b})`; // Optional: also change the text color
      }

      // Continuously request the next frame
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(animate);

    // Clean up the animation frame when component is unmounted
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]); // Re-run effect when mouseX or mouseY changes

  return (
    <div>
      <h1
        ref={titleRef}
        className="mb-10 font-light tracking-wide title-shadow"
        onClick={() => (window.location.href = "/")}
      >
        Fuguo&apos;s<br />Media Space
      </h1>
    </div>
  );
};

export default P5ShadowController;
