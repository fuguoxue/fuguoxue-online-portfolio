"use client";
import { useState } from "react";
import Image from "next/image";

export default function ExpandableImage({
  src,
  alt,
  description,
}: {
  src: string;
  alt: string;
  description: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Handle clicking outside the expanded image to close the modal
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      {/* Thumbnail image with hover effect */}
      <div className="relative cursor-pointer mt-8 group" onClick={openModal}>
        <Image
          src={src}
          alt={alt}
          className="w-full h-auto object-contain"
          width={300}
          height={200}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"></div>
      </div>
      <p className="caption my-2">{description}</p>

      {/* Modal for expanded image */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleOutsideClick}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white bg-transparent border-none text-6xl cursor-pointer z-50"
            aria-label="Close"
          >
            &times;
          </button>
          {/* Scrollable content container */}
          <div className="relative flex flex-col items-center justify-center max-h-screen overflow-auto p-2">
            {/* Expanded image */}
            <Image
              src={src}
              alt={alt}
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
              width={800}
              height={600}
            />
            {/* Caption */}
            <p className="text-white mt-4 text-center">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
