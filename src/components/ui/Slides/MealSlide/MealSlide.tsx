import styles from "./MealSlide.module.css";
import PlateVisualization from "../PlateVisualization/PlateVisualization";
import NutritionTable from "../NutritionTable/NutritionTable";

type FoodItem = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

type MealSlideProps = {
  mealName: "breakfast" | "lunch" | "dinner";
  foods: FoodItem[];
  plateSegments: Array<{
    name: string;
    angle: number;
    startAngle: number;
    color: string;
  }>;
  totals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
};

export default function MealSlide({ 
  mealName, 
  foods, 
  plateSegments, 
  totals 
}: MealSlideProps) {
  return (
    <div className={styles.slide}>
      <h1 className={styles.mealTitle}>{mealName}</h1>
      
      <div className={styles.contentGrid}>
        {/* Left column - Plate visualization */}
        <PlateVisualization segments={plateSegments} />
        
        {/* Right column - Nutrition table */}
        <NutritionTable foods={foods} totals={totals} />
      </div>
    </div>
  );
}