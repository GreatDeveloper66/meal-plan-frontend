import styles from "./MealCard.module.css";
import Card from "../Card/Card";
import { MealCardProps } from "../../../data_types/data_types";

export default function MealCard({ meal, mealImageUrl }: MealCardProps) {
  // Calculate total macros for the meal
  const totalMacros = meal.foods.reduce(
    (acc, food) => ({
      calories: acc.calories + food.calories,
      protein: acc.protein + food.protein,
      carbs: acc.carbs + food.carbs,
      fat: acc.fat + food.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  // Capitalize meal name for display
  const displayTitle = meal.name.charAt(0).toUpperCase() + meal.name.slice(1);

  return (
    <Card title={displayTitle}>
      <div className={styles.mealCard}>
        {/* Image Section */}
        {mealImageUrl && (
          <div className={styles.imageSection}>
            <img
              src={mealImageUrl}
              alt={`${meal.name} meal`}
              className={styles.mealImage}
            />
          </div>
        )}

        {/* Ingredients Section */}
        <div className={styles.ingredientsSection}>
          <h3 className={styles.sectionTitle}>Ingredients</h3>
          <ul className={styles.ingredientsList}>
            {meal.foods.map((food) => (
              <li key={food.id} className={styles.ingredientItem}>
                <span className={styles.ingredientName}>{food.name}</span>
                {food.quantity && (
                  <span className={styles.ingredientQuantity}> - {food.quantity}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Macros Section */}
        <div className={styles.macrosSection}>
          <h3 className={styles.sectionTitle}>Macros</h3>
          <ul className={styles.macrosList}>
            <li className={styles.macroItem}>
              <span className={styles.macroLabel}>Calories:</span>
              <span className={styles.macroValue}>{totalMacros.calories}</span>
            </li>
            <li className={styles.macroItem}>
              <span className={styles.macroLabel}>Protein:</span>
              <span className={styles.macroValue}>{totalMacros.protein}g</span>
            </li>
            <li className={styles.macroItem}>
              <span className={styles.macroLabel}>Carbs:</span>
              <span className={styles.macroValue}>{totalMacros.carbs}g</span>
            </li>
            <li className={styles.macroItem}>
              <span className={styles.macroLabel}>Fat:</span>
              <span className={styles.macroValue}>{totalMacros.fat}g</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
}