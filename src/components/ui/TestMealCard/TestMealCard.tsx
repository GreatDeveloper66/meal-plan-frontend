import styles from "./TestMealCard.module.css";
import MealCard from "../MealCard/MealCard";
import { Meal } from "../../../data_types/data_types";

// Dummy data from your example
const testMeal: Meal = {
  id: "meal_001",
  name: "breakfast" as const,
  foods: [
    {
      id: "food_001",
      name: "Oatmeal",
      calories: 150,
      protein: 5,
      carbs: 27,
      fat: 3,
      quantity: "1 cup"
    },
    {
      id: "food_002",
      name: "Banana",
      calories: 90,
      protein: 1,
      carbs: 23,
      fat: 0,
      quantity: "1 medium"
    }
  ]
};

const testImageUrl = "https://oaidalleapiprodscus.blob.core.windows.net/private/org-gom8UUy24hOiC5ynbEQILDj8/user-32kuWhWvVGWQQfIB7f6TMQwX/img-cXUTgxvs0oLCe9iKdJG73DPo.png?st=2026-04-13T01%3A19%3A41Z&se=2026-04-13T03%3A19%3A41Z&sp=r&sv=2026-02-06&sr=b&rscd=inline&rsct=image/png&skoid=8b33a531-2df9-46a3-bc02-d4b1430a422c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-04-12T09%3A45%3A59Z&ske=2026-04-13T09%3A45%3A59Z&sks=b&skv=2026-02-06&sig=nDDra/mabCxdCwKh8L2HoSPwgi5WVV7Bri4Ghwltegc%3D";

export default function TestMealCard() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Meal Card Component Test</h1>
        <p className={styles.description}>
          Testing the MealCard component with breakfast meal data
        </p>

        <div className={styles.cardWrapper}>
          <MealCard meal={testMeal} mealImageUrl={testImageUrl} />
        </div>

        <div className={styles.info}>
          <h3>✓ Test Instructions:</h3>
          <ul>
            <li>Card should have title "Breakfast"</li>
            <li>Image should display at the top (desktop) or top (mobile)</li>
            <li>Ingredients should show "Oatmeal - 1 cup" and "Banana - 1 medium"</li>
            <li>Macros should show totals: Calories: 240, Protein: 6g, Carbs: 50g, Fat: 3g</li>
            <li>Desktop (≥768px): Three columns side by side</li>
            <li>Mobile (&lt;768px): Stacked vertically</li>
            <li>Dividing lines should separate sections</li>
          </ul>
        </div>
      </div>
    </div>
  );
}