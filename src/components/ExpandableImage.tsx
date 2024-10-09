"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function ExpandableImage({ src, alt, description }: { src: string; alt: string; description: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Thumbnail image */}
      <div className="cursor-pointer my-8" onClick={openModal}>
        <Image
          src={src}
          alt={alt}
          className="w-full h-auto object-contain"
          width={300}
          height={200}
        />
        <p className="caption mt-2">{description}</p>
      </div>

      {/* Modal for expanded image */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white"
              onClick={closeModal}
            >
              Close
            </button>
            <Image
              src={src}
              alt={alt}
              className="w-auto h-auto max-w-full max-h-full object-contain"
              width={800}
              height={600}
            />
            <p>{alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
