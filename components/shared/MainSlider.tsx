"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the slides based on the available files in /public/slides/
// Note: The previous instruction mentioned slide-1.jpg, but the actual files are .jpeg/.png
const SLIDES = [
  { id: 1, src: "/slides/slide-1.png", alt: "Featured Slide 1" },
  { id: 2, src: "/slides/slide-2.png", alt: "Featured Slide 2" },
  { id: 3, src: "/slides/slide-3.png", alt: "Featured Slide 3" },
  { id: 4, src: "/slides/slide-4.png", alt: "Featured Slide 4" },
  { id: 5, src: "/slides/slide-5.png", alt: "Featured Slide 5" },
  { id: 6, src: "/slides/slide-6.png", alt: "Featured Slide 6" },
  { id: 7, src: "/slides/slide-7.png", alt: "Featured Slide 7" },
  { id: 8, src: "/slides/slide-8.png", alt: "Featured Slide 8" },
  { id: 8, src: "/slides/slide-11.png", alt: "Featured Slide 11" },
];

export default function MainSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // We use this state to prevent hydration mismatch for random/time-based stuff, 
  // though strictly not needed for static order. Kept for consistency.

  // Auto-play logic with 3-second delay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section className="relative w-full bg-white group">
      {/* 
        Responsive behavior:
        Width: 100% (w-full)
        Height: Auto (determined by image aspect ratio)
        No fixed height to prevent white bars.
      */}
      <div className="grid grid-cols-1 grid-rows-1 w-full">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              row-start-1 col-start-1 w-full flex items-center justify-center
              transition-opacity duration-1000 ease-in-out
              ${index === currentSlide ? "opacity-100 z-10 relative" : "opacity-0 z-0 pointer-events-none absolute inset-0"}
            `}
          >
            {/* 
              Using standard <img> with w-full h-auto.
              This forces the image to fill the width, and the container follows the height.
            */}
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-auto object-contain block"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/10 hover:bg-black/30 text-gray-800 hover:text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 md:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/10 hover:bg-black/30 text-gray-800 hover:text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 md:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 shadow-sm border border-gray-300 ${
              idx === currentSlide
                ? "bg-primary w-8"
                : "bg-white hover:bg-gray-100 w-2.5"
            }`}
             style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
