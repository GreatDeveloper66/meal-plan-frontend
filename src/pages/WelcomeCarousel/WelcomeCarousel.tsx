import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WelcomeCarousel.module.css";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";
import Card from "../../components/ui/Card/Card";

// Define the slide data
const slides = [
  {
    title: "Personalized meal planning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageAlt: "Meal planning illustration 1"
  },
  {
    title: "Smart grocery lists",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageAlt: "Grocery list illustration 2"
  },
  {
    title: "Track your nutrition",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageAlt: "Nutrition tracking illustration 3"
  }
];

export default function WelcomeCarousel() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
        // If on the last slide, navigate to the first profile setup page
        setCurrentSlide(0); // Loop back to the first slide
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    } else {
        // If on the first slide, navigate back to the welcome screen
        setCurrentSlide(2); // Loop back to the last slide
    }
  };

  const handleContinue = () => {
    // Navigate to the first profile setup page
    navigate("/first-profile-setup");
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <Card>
          {/* Carousel */}
          <div className={styles.carouselContainer}>
            <div
              className={styles.slidesWrapper}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className={styles.slide}>
                  <h1 className={styles.title}>{slide.title}</h1>
                  {/* Image placeholder */}
                  <div className={styles.imagePlaceholder}>
                    🍳 {slide.imageAlt}
                  </div>
                  {/* Description */}
                  <p className={styles.description}>
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress dots */}
          <div className={styles.progressDots}>
            {slides.map((_, index) => (
              <div
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                onClick={() => handleDotClick(index)}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Continue button */}
          <button
            className={styles.continueButton}
            onClick={handleContinue}
          >
            Continue
          </button>

          {/* Navigation Footer */}
          <div className={styles.navigationFooter}>
            <NavigationFooter
              onBack={handleBack}
              onNext={handleNext}
            />
          </div>

          {/* Optional: Slide indicator text */}
          <div className={styles.slideIndicator}>
            {currentSlide + 1} / {slides.length}
          </div>
        </Card>
      </div>
    </div>
  );
}