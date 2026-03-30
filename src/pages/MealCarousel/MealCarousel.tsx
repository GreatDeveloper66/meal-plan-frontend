import { useNavigate } from "react-router-dom";
import styles from "./MealCarousel.module.css";
import Card from "../../components/ui/Card/Card";
import Carousel from "../../components/ui/Carousel/Carousel";
import MealSlide from "../../components/ui/Slides/MealSlide/MealSlide";
import { Meal, FoodItem } from "../../data_types/data_types";

// Dummy data
const mealData: Meal[] = [
  {
    id: "1",
    name: "breakfast",
    foods: [
      { id: "b1", name: "Scrambled Eggs", calories: 280, protein: 20, carbs: 2, fat: 20, quantity: "2 eggs" },
      { id: "b2", name: "Whole Wheat Toast", calories: 160, protein: 6, carbs: 28, fat: 2, quantity: "2 slices" },
      { id: "b3", name: "Avocado", calories: 120, protein: 1.5, carbs: 6, fat: 11, quantity: "1/2 medium" },
      { id: "b4", name: "Mixed Berries", calories: 85, protein: 1, carbs: 22, fat: 0.5, quantity: "1 cup" },
    ]
  },
  {
    id: "2",
    name: "lunch",
    foods: [
      { id: "l1", name: "Grilled Chicken Breast", calories: 165, protein: 31, carbs: 0, fat: 3.6, quantity: "4 oz" },
      { id: "l2", name: "Quinoa", calories: 220, protein: 8, carbs: 40, fat: 3.5, quantity: "1 cup cooked" },
      { id: "l3", name: "Roasted Vegetables", calories: 80, protein: 2, carbs: 15, fat: 2, quantity: "1 cup" },
      { id: "l4", name: "Olive Oil Dressing", calories: 120, protein: 0, carbs: 0, fat: 14, quantity: "1 tbsp" },
    ]
  },
  {
    id: "3",
    name: "dinner",
    foods: [
      { id: "d1", name: "Salmon Fillet", calories: 350, protein: 34, carbs: 0, fat: 22, quantity: "6 oz" },
      { id: "d2", name: "Brown Rice", calories: 215, protein: 5, carbs: 45, fat: 1.8, quantity: "1 cup cooked" },
      { id: "d3", name: "Steamed Broccoli", calories: 55, protein: 4, carbs: 11, fat: 0.6, quantity: "1 cup" },
      { id: "d4", name: "Lemon Butter Sauce", calories: 150, protein: 0.5, carbs: 2, fat: 16, quantity: "2 tbsp" },
    ]
  }
];

// Helper functions
const calculateTotals = (foods: FoodItem[]) => {
  return foods.reduce(
    (acc, food) => ({
      calories: acc.calories + food.calories,
      protein: acc.protein + food.protein,
      carbs: acc.carbs + food.carbs,
      fat: acc.fat + food.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );
};

const generatePlateSegments = (foods: FoodItem[]) => {
  const totalCalories = foods.reduce((sum, food) => sum + food.calories, 0);
  const MIN_SEGMENT_PERCENT = 15;
  
  const adjustedSegments = foods.map(food => {
    const percent = (food.calories / totalCalories) * 100;
    return { ...food, percent: Math.max(percent, MIN_SEGMENT_PERCENT) };
  });
  
  const adjustedTotal = adjustedSegments.reduce((sum, seg) => sum + seg.percent, 0);
  
  let cumulativeAngle = 0;
  const segmentColors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7",
    "#DDA0DD", "#FAA275", "#9B59B6", "#3498DB", "#E67E22",
  ];
  
  return adjustedSegments.map((segment, index) => {
    const angle = (segment.percent / adjustedTotal) * 360;
    const startAngle = cumulativeAngle;
    cumulativeAngle += angle;
    return {
      name: segment.name,
      angle,
      startAngle,
      color: segmentColors[index % segmentColors.length]
    };
  });
};

export default function MealCarousel() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/shopping-list");
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
            {mealData.map((meal) => {
              const totals = calculateTotals(meal.foods);
              const plateSegments = generatePlateSegments(meal.foods);
              
              return (
                <MealSlide
                  key={meal.id}
                  mealName={meal.name}
                  foods={meal.foods}
                  plateSegments={plateSegments}
                  totals={totals}
                />
              );
            })}
          </Carousel>

          <button
            className={styles.continueButton}
            onClick={handleContinue}
          >
            Continue to Shopping List
          </button>
        </Card>
      </div>
    </div>
  );
}