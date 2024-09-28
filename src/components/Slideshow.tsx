"use client";

import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide components
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

interface SlideshowProps {
  slides: { image: string; thumbnail: string; description: string }[]; // Array of image objects with thumbnail and description
}

export default function SwiperSlider({ slides }: SlideshowProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null); // For controlling thumbnails

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
              <p className="text-center mt-8 mb-12">{slide.description}</p>
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
        className="thumbnail-swiper"
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

      {/* Custom styles for active and inactive thumbnails */}
      <style jsx global>{`
        .thumbnail-swiper .swiper-slide {
          transition: opacity 0.3s ease, filter 0.3s ease;
        }

        /* Unselected thumbnails */
        .thumbnail-swiper .swiper-slide:not(.swiper-slide-thumb-active) {
          opacity: 0.5; /* Adjust transparency */
          filter: brightness(80%); /* Make the unselected thumbnails look dimmer */
        }

        /* Selected (active) thumbnail */
        .thumbnail-swiper .swiper-slide-thumb-active {
          opacity: 1;
          filter: brightness(100%);
        }
      `}</style>
    </div>
  );
}
