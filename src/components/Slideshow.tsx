"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, Autoplay, FreeMode } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "@/styles/slideshow.css";

interface SlideshowProps {
  slides: { image: string; description: string }[]; // Array of image objects with description
}

export default function Slideshow({ slides }: SlideshowProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <div className="swiper-container justify-center">
      {/* Main Swiper with Images */}
      <Swiper
        modules={[FreeMode, Navigation, Pagination, Thumbs, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="main-swiper mb-4"
        onInit={(swiper) => setSwiperInstance(swiper)}
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
                onLoadingComplete={() => {
                  if (swiperInstance) swiperInstance.update(); // Recalculate Swiper dimensions
                }}
              />
              {slide.description && (
                <p className="text-center mt-8 mb-12 text-sm text-caption">
                  {slide.description}
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={9}
        slideToClickedSlide={true} // Ensure clicking slides centers them
        watchSlidesProgress={true} // Watch the progress to update correctly
        modules={[FreeMode, Pagination, Navigation]}
        className="thumbnail-swiper mb-4"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.image}
              alt={`Thumbnail ${index + 1}`}
              width={50}
              height={50}
              className="w-full h-full object-cover"
              onLoadingComplete={() => {
                if (thumbsSwiper) thumbsSwiper.update(); // Ensure Swiper dimensions are updated after image load
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
