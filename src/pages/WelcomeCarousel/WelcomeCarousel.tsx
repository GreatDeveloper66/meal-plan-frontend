import { useNavigate } from "react-router-dom";
import styles from "./WelcomeCarousel.module.css";
import Card from "../../components/ui/Card/Card";
import Carousel from "../../components/ui/Carousel/Carousel";
import WelcomeSlide from "../../components/ui/Slides/WelcomeSlide/WelcomeSlide";

const slides = [
  {
    title: "Personalized meal planning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    emoji: "🍳",
    alt: "Meal planning illustration"
  },
  {
    title: "Smart grocery lists",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    emoji: "🛒",
    alt: "Grocery list illustration"
  },
  {
    title: "Track your nutrition",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    emoji: "📊",
    alt: "Nutrition tracking illustration"
  }
];

export default function WelcomeCarousel() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/first-profile-setup");
  };

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <Card>
          <Carousel
            showNavigation={true}
            showDots={true}
            showCounter={true}
            wrapAround={true}
          >
            {slides.map((slide, index) => (
              <WelcomeSlide
                key={index}
                title={slide.title}
                description={slide.description}
                imageEmoji={slide.emoji}
                imageAlt={slide.alt}
              />
            ))}
          </Carousel>

          <button
            className={styles.continueButton}
            onClick={handleContinue}
          >
            Continue
          </button>
        </Card>
      </div>
    </div>
  );
}