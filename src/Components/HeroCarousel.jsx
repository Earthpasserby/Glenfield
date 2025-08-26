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

const ArrowButton = ({ direction, onClick }) => (
  <button
    aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow ring-1 ring-black/5 text-gray-700"
    style={direction === "prev" ? { left: 12 } : { right: 12 }}
  >
    {direction === "prev" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M12.79 5.23a.75.75 0 010 1.06L9.08 10l3.7 3.71a.75.75 0 11-1.06 1.06l-4.24-4.25a.75.75 0 010-1.06l4.24-4.24a.75.75 0 011.06 0z"
          clipRule="evenodd"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 010-1.06L10.92 10 7.2 6.29a.75.75 0 111.06-1.06l4.25 4.24a.75.75 0 010 1.06l-4.25 4.24a.75.75 0 01-1.06 0z"
          clipRule="evenodd"
        />
      </svg>
    )}
  </button>
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
    const next = ((idx % numSlides) + numSlides) % numSlides;
    setCurrentIndex(next);
  };

  const next = () => goTo(currentIndex + 1);
  const prev = () => goTo(currentIndex - 1);

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

        {numSlides > 1 && (
          <>
            <ArrowButton direction="prev" onClick={prev} />
            <ArrowButton direction="next" onClick={next} />
          </>
        )}
      </div>

      {numSlides > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/70 px-3 py-2 rounded-full shadow">
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
