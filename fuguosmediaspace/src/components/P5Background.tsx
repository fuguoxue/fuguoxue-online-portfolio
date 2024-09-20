import { useRef, useEffect } from "react";
import p5 from "p5";

const P5Background = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let canvas;

      // Setup function
      p.setup = () => {
        canvas = p.createCanvas(window.innerWidth, window.innerHeight);
        canvas.position(0, 0); // Position the canvas in the top-left corner
        canvas.style("z-index", "-1"); // Make sure the canvas is behind the content
      };

      // Draw function
      p.draw = () => {
        p.background(20); // Set a dark background
        p.noStroke();
        const size = 50;

        // Draw circle based on mouse movement
        const x = p.map(p.mouseX, 0, p.width, 0, p.width);
        const y = p.map(p.mouseY, 0, p.height, 0, p.height);
        p.fill(255, 100, 100, 150); // Set the circle color
        p.ellipse(x, y, size, size);
      };

      // Handle window resizing
      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };
    };

    // Create the p5 instance, ensuring sketchRef.current is an HTMLDivElement
    const p5Instance = new p5(sketch, sketchRef.current as HTMLDivElement);

    // Clean up the p5 instance on component unmount
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default P5Background;