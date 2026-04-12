import { useNavigate } from "react-router-dom";
import styles from "./WelcomeCarousel.module.css";
import Card from "../../components/ui/Card/Card";
import Carousel from "../../components/ui/Carousel/Carousel";
import WelcomeSlide from "../../components/ui/Slides/WelcomeSlide/WelcomeSlide";
import mealImage from "../../images/personalized_meal_planning.jpg";
import groceryListImage from "../../images/grocery_list.jpg";
import nutritionImage from "../../images/nutrition.jpg";

//title: Personalized meal planning
//description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//emoji: 🍳
//alt: Meal planning illustration

// const slides = [
//   {
//     title: "Personalized meal planning",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     imageSrc: "personalized_meal_planning.jpg"",
//     imageAlt: "Meal planning illustration",
//     imageTooltip: "Photo by <a href="https://unsplash.com/@khloephoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">khloe arledge</a> on <a href="https://unsplash.com/photos/bowl-of-vegetables-V7hibs9xhe4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>"
      
//   },
//   {
//     title: "Smart grocery lists",
//     description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     imageSrc: "grocery_list.jpg",
//     imageAlt: "Grocery list illustration",
//     imageTooltip: "Photo by <a href="https://unsplash.com/@tobben63?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Torbjørn Helgesen</a> on <a href="https://unsplash.com/photos/a-notepad-with-a-green-pen-on-top-of-it-dz35efCT3ZA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      

//   },
//   {
//     title: "Track your nutrition",
//     description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     imageSrc: "nutrition.jpg",
//     imageAlt: "Nutrition tracking illustration",
//     imageTooltip: "Photo by <a href="https://unsplash.com/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Winkler</a> on <a href="https://unsplash.com/photos/a-wooden-block-spelling-nutrition-on-a-table-3LQKDH-r-jI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
//     alt: "Nutrition tracking illustration"
//   }
// ];

const slides = [
  {
    title: "Personalized meal planning",
    description: "Create meal plans tailored to your dietary preferences and goals. Our AI-powered system generates delicious recipes and shopping lists based on your unique profile.",
    imageSrc: mealImage,
    imageAlt: "Meal planning illustration",
    imageTooltip: "Photo by <a href='https://unsplash.com/@khloephoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>khloe arledge</a> on <a href='https://unsplash.com/photos/bowl-of-vegetables-V7hibs9xhe4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
  },
  {
    title: "Smart grocery lists",
    description: "Easily create and manage grocery lists based on your meal plans. Our smart lists automatically update as you modify your meals, ensuring you always have the ingredients you need.", 
    imageSrc: groceryListImage,
    imageAlt: "Grocery list illustration",
    imageTooltip: "Photo by <a href='https://unsplash.com/@tobben63?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Torbjørn Helgesen</a> on <a href='https://unsplash.com/photos/a-notepad-with-a-green-pen-on-top-of-it-dz35efCT3ZA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>" 
  },
  {
    title: "Track your nutrition",
    description: "Monitor your nutritional intake and progress towards your health goals. Our intuitive tracking tools make it easy to log meals, analyze nutrients, and stay on top of your wellness journey.",
    imageSrc: nutritionImage,
    imageAlt: "Nutrition tracking illustration",
    imageTooltip: "Photo by <a href='https://unsplash.com/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Markus Winkler</a> on <a href='https://unsplash.com/photos/a-wooden-block-spelling-nutrition-on-a-table-3LQKDH-r-jI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
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
                imageSrc={slide.imageSrc}
                imageAlt={slide.imageAlt}
                imageTooltip={slide.imageTooltip}
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