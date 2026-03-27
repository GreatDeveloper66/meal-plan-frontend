import styles from "../MealSlide/MealSlide.module.css";

type FoodItem = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

type NutritionTableProps = {
  foods: FoodItem[];
  totals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
};

export default function NutritionTable({ foods, totals }: NutritionTableProps) {
  return (
    <div className={styles.nutritionCard}>
      <div className={styles.tableTitle}>Nutrition Facts</div>
      <div className={styles.tableWrapper}>
        <table className={styles.nutritionTable}>
          <thead>
            <tr>
              <th>Food</th>
              <th>Cal</th>
              <th>P</th>
              <th>C</th>
              <th>F</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
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
              <td className={styles.calories}>{totals.calories}</td>
              <td className={styles.protein}>{totals.protein.toFixed(1)}g</td>
              <td className={styles.carbs}>{totals.carbs}g</td>
              <td className={styles.fat}>{totals.fat.toFixed(1)}g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}