"use client";

import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide components
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper"; // Import the Swiper type

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

interface SlideshowProps {
  slides: { image: string; thumbnail: string; description: string }[]; // Array of image objects with thumbnail and description
}

export default function SwiperSlider({ slides }: SlideshowProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null); // For controlling thumbnails

  return (
    <div className="swiper-container justify-center">
      {/* Main Swiper with Images */}
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        navigation
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        className="main-swiper mb-4"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              {/* Description below the image */}
              <p className="text-center mt-8 mb-12 text-sm text-caption">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={9}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="thumbnail-swiper mb-4"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              width={50}
              height={50}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom styles using Tailwind classes */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #008080;
        }
        .swiper-pagination-bullet {
          background-color:#008080;
        }
        .swiper-pagination-bullet-active {
          background-color: #FF6F61;
        }
      `}</style>
    </div>
  );
}
