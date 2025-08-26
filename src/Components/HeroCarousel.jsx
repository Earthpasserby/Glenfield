import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

const AutoPlayIntervalMs = 5000;

const Dot = ({ isActive, onClick }) => (
  <button
    aria-label="Go to slide"
    onClick={onClick}
    className={`h-2.5 w-2.5 rounded-full transition-all ${
      isActive ? "bg-green-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
    }`}
  />
);

/**
 * HeroCarousel
 * props:
 * - slides: Array<{ id: string|number, title: string, subtitle?: string, ctaText?: string, ctaTo?: string, imageUrl: string }>
 */
const HeroCarousel = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numSlides = slides.length;
  const timerRef = useRef(null);

  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);

  const goTo = (idx) => {
    if (numSlides === 0) return;
    const nextIndex = ((idx % numSlides) + numSlides) % numSlides;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    if (numSlides <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % numSlides);
    }, AutoPlayIntervalMs);
    return () => clearInterval(timerRef.current);
  }, [numSlides]);

  if (safeSlides.length === 0) return null;

  return (
    <section className="relative">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {safeSlides.map((slide, idx) => (
            <div key={slide.id ?? idx} className="min-w-full">
              <div className="relative h-[420px] md:h-[520px] lg:h-[580px]">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 h-full flex items-center">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl text-white">
                      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
                        {slide.title}
                      </h1>
                      {slide.subtitle ? (
                        <p className="mt-3 text-sm md:text-base text-white/90">
                          {slide.subtitle}
                        </p>
                      ) : null}
                      {slide.ctaText && slide.ctaTo ? (
                        <div className="mt-6">
                          <Link
                            to={slide.ctaTo}
                            className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                          >
                            {slide.ctaText}
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {numSlides > 1 && (
        <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/70 px-3 py-2 rounded-full shadow">
          {safeSlides.map((_, idx) => (
            <Dot
              key={idx}
              isActive={idx === currentIndex}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroCarousel;
