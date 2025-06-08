"use client";
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Optional: Using FontAwesome for the icon

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button depending on the scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-14 right-4 bg-primary bg-opacity-80 text-background backdrop-blur-md p-2 m-2 hover:text-secondary hover:scale-105 duration-300 transition text-lg"
        >
          <div><span className='inline-flex'>Back to Top<FaArrowUp className="w-6 h-6 ml-2" /></span></div>
        </button>
      )}
    </>
  );
}
