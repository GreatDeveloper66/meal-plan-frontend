import { useState, useRef, useEffect, ReactNode } from "react";
import styles from "./Carousel.module.css";

type CarouselProps = {
  children: ReactNode[];
  showNavigation?: boolean;
  showDots?: boolean;
  showCounter?: boolean;
  onSlideChange?: (index: number) => void;
  wrapAround?: boolean;
  className?: string;
};

export default function Carousel({
  children,
  showNavigation = true,
  showDots = true,
  showCounter = false,
  onSlideChange,
  wrapAround = false,
  className = "",
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shouldTransition, setShouldTransition] = useState(true);

  const transitionTimeoutRef = useRef<number | undefined>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const totalSlides = children.length;

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  if (totalSlides === 0) return null;

  const goToSlide = (index: number, instant = false) => {
    if (index === currentSlide) return;

    const validIndex = Math.max(0, Math.min(index, totalSlides - 1));

    if (instant) {
      setShouldTransition(false);
      setCurrentSlide(validIndex);

      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }

      transitionTimeoutRef.current = window.setTimeout(() => {
        setShouldTransition(true);
      }, 50);
    } else {
      setCurrentSlide(validIndex);
    }

    onSlideChange?.(validIndex);
  };

  const handleNext = () => {
    if (currentSlide === totalSlides - 1) {
      if (wrapAround) {
        goToSlide(0, true);
      }
    } else {
      goToSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide === 0) {
      if (wrapAround) {
        goToSlide(totalSlides - 1, true);
      }
    } else {
      goToSlide(currentSlide - 1);
    }
  };

  const handleDotClick = (index: number) => {
    const isAdjacent = Math.abs(index - currentSlide) === 1;
    const isWrapAround =
      (currentSlide === 0 && index === totalSlides - 1) ||
      (currentSlide === totalSlides - 1 && index === 0);

    if (wrapAround && isWrapAround) {
      goToSlide(index, true);
    } else if (isAdjacent) {
      goToSlide(index);
    } else {
      goToSlide(index, true);
    }
  };

  // Log for debugging - helps verify the class is being applied correctly
  console.log('Current slide:', currentSlide);
  console.log('Track classes:', `${styles.track} ${shouldTransition ? styles.withTransition : ''} ${styles[`slide${currentSlide}`]}`);

  return (
    <div className={`${styles.carousel} ${className}`}>
      <div className={styles.viewport}>
        <div
          ref={trackRef}
          className={`
            ${styles.track}
            ${shouldTransition ? styles.withTransition : ''}
            ${styles[`slide${currentSlide}`]}
          `}
        >
          {children.map((child, index) => (
            <div key={index} className={styles.slide}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {showDots && totalSlides > 1 && (
        <div className={styles.dots} aria-label="Slide navigation">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
            />
          ))}
        </div>
      )}

      {showNavigation && totalSlides > 1 && (
        <div className={styles.navigation}>
          <button
            className={styles.navButton}
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            className={styles.navButton}
            onClick={handleNext}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      )}

      {showCounter && totalSlides > 1 && (
        <div className={styles.counter} aria-live="polite">
          {currentSlide + 1} / {totalSlides}
        </div>
      )}
    </div>
  );
}