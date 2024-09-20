"use client";
import React, { useRef, useEffect, useState } from "react";
import p5 from "p5";

const P5ShadowController = () => {
  // Explicitly type the ref to be an HTMLHeadingElement
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if window is available (i.e., running on the client)
    setIsClient(true);
    if (typeof window !== "undefined") {
      const sketch = (p: p5) => {
        p.setup = () => {
          p.noCanvas(); // No canvas is needed, we are just controlling shadow
        };

        p.draw = () => {
          if (titleRef.current) {
            // Dynamically change shadow color based on mouse position
            const r = p.map(p.mouseX, 0, p.windowWidth, 0, 255);
            const g = p.map(p.mouseY, 0, p.windowHeight, 0, 255);
            const b = Math.floor(p.map(p.sin(p.frameCount * 0.05), -1, 1, 0, 255));

            // Apply the shadow style to the title element
            titleRef.current.style.textShadow = `0px 0px 8px rgba(${r}, ${g}, ${b}, 0.8), 0px 0px 10px rgba(${r}, ${g}, ${b}, 0.6), 0px 0px 20px rgba(${r}, ${g}, ${b}, 0.5), 0px 0px 40px rgba(${r}, ${g}, ${b}, 0.4)`;
            titleRef.current.style.color = `rgb(${r}, ${g}, ${b})`;
          }
        };
      };

      const p5Instance = new p5(sketch);

      return () => {
        p5Instance.remove(); // Cleanup the p5 instance
      };
    }
  }, []);

  return (
    <div>
      <h1
        ref={titleRef}
        className="mb-10 font-light tracking-wide title-shadow"
        onClick={() => (window.location.href = "/")}
      >
        Fuguo&apos;s<br/>Media Space
      </h1>
    </div>
  );
};

export default P5ShadowController;
