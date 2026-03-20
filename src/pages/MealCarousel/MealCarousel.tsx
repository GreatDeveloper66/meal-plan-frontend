import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MealCarousel.module.css";
import Card from "../../components/ui/Card/Card";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";

// Types for our food data structure
type FoodItem = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  quantity?: string;
};

type Meal = {
  id: string;
  name: "breakfast" | "lunch" | "dinner";
  foods: FoodItem[];
};

// Dummy data - easily replaceable with your JSON later
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

// Helper function to calculate totals for a meal
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

// Helper function to generate plate segments with minimum size
const generatePlateSegments = (foods: FoodItem[]) => {
  const totalCalories = foods.reduce((sum, food) => sum + food.calories, 0);

  // Ensure minimum segment size (15% of the plate)
  const MIN_SEGMENT_PERCENT = 15;
  const adjustedSegments = foods.map(food => {
    const percent = (food.calories / totalCalories) * 100;
    return {
      ...food,
      percent: Math.max(percent, MIN_SEGMENT_PERCENT)
    };
  });

  // Recalculate total after adjustments
  const adjustedTotal = adjustedSegments.reduce((sum, seg) => sum + seg.percent, 0);

  // Normalize to 360 degrees
  return adjustedSegments.map(seg => ({
    ...seg,
    angle: (seg.percent / adjustedTotal) * 360
  }));
};

// Color palette for plate segments
const segmentColors = [
  "#FF6B6B", // coral red
  "#4ECDC4", // turquoise
  "#45B7D1", // sky blue
  "#96CEB4", // sage green
  "#FFEAA7", // vanilla
  "#DDA0DD", // plum
  "#FAA275", // apricot
  "#9B59B6", // purple
  "#3498DB", // blue
  "#E67E22", // orange
];

export default function MealCarousel() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < mealData.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
        setCurrentSlide(0); // Loop back to the first slide
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    } else {
        setCurrentSlide(mealData.length - 1); // Loop back to the last slide
    }
  };

  const handleContinue = () => {
    // Navigate to shopping list page (placeholder)
    navigate("/shopping-list");
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const currentMeal = mealData[currentSlide];
  const totals = calculateTotals(currentMeal.foods);
  const plateSegments = generatePlateSegments(currentMeal.foods);

  // Calculate cumulative angles for segments
  let cumulativeAngle = 0;
  const segmentsWithAngles = plateSegments.map((segment, index) => {
    const startAngle = cumulativeAngle;
    cumulativeAngle += segment.angle;
    return {
      ...segment,
      startAngle,
      color: segmentColors[index % segmentColors.length]
    };
  });

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
              {mealData.map((meal, index) => {
                const mealTotals = calculateTotals(meal.foods);
                return (
                  <div key={meal.id} className={styles.slide}>
                    <h1 className={styles.mealTitle}>{meal.name}</h1>
                    <div className={styles.contentGrid}>
                      {/* Left column - Plate visualization */}
                      <div className={styles.plateContainer}>
                        <div className={styles.plate}>
                          {index === currentSlide && segmentsWithAngles.map((segment, segIndex) => (
                            <div
                              key={segIndex}
                              className={styles.segment}
                              style={{
                                transform: `rotate(${segment.startAngle}deg)`,
                                clipPath: `polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 0)`,
                              }}
                            >
                              <div
                                className={styles.segmentInner}
                                style={{
                                  ['--segment-color' as any]: segment.color,
                                  ['--segment-angle' as any]: `${segment.angle}deg`,
                                  transform: `rotate(${-segment.startAngle}deg)`,
                                  background: `conic-gradient(from ${segment.startAngle}deg, ${segment.color} 0deg ${segment.angle}deg, transparent ${segment.angle}deg)`,
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right column - Nutrition table */}
                      <div className={styles.nutritionCard}>
                        <div className={styles.tableTitle}>Nutrition Facts</div>
                        <table className={styles.nutritionTable}>
                          <thead>
                            <tr>
                              <th>Food</th>
                              <th className={styles.calories}>Cal</th>
                              <th className={styles.protein}>P</th>
                              <th className={styles.carbs}>C</th>
                              <th className={styles.fat}>F</th>
                            </tr>
                          </thead>
                          <tbody>
                            {meal.foods.map((food) => (
                              <tr key={food.id}>
                                <td className={styles.foodName}>{food.name}</td>
                                <td className={styles.calories}>{food.calories}</td>
                                <td className={styles.protein}>{food.protein}g</td>
                                <td className={styles.carbs}>{food.carbs}g</td>
                                <td className={styles.fat}>{food.fat}g</td>
                              </tr>
                            ))}
                            <tr className={styles.totalRow}>
                              <td>Total</td>
                              <td className={styles.calories}>{mealTotals.calories}</td>
                              <td className={styles.protein}>{mealTotals.protein.toFixed(1)}g</td>
                              <td className={styles.carbs}>{mealTotals.carbs}g</td>
                              <td className={styles.fat}>{mealTotals.fat.toFixed(1)}g</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress dots */}
          <div className={styles.progressDots}>
            {mealData.map((_, index) => (
              <div
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                onClick={() => handleDotClick(index)}
                role="button"
                tabIndex={0}
                aria-label={`Go to ${mealData[index].name}`}
              />
            ))}
          </div>

          {/* Continue button */}
          <button
            className={styles.continueButton}
            onClick={handleContinue}
          >
            Continue to Shopping List
          </button>

          {/* Navigation Footer */}
          <div className={styles.navigationFooter}>
            <NavigationFooter
              onBack={handleBack}
              onNext={handleNext}
            />
          </div>

          {/* Slide indicator */}
          <div className={styles.slideIndicator}>
            {currentSlide + 1} / {mealData.length} • {mealData[currentSlide].name}
          </div>
        </Card>
      </div>
    </div>
  );
}