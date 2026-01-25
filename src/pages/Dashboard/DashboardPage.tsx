import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";
import styles from "./DashboardPage.module.css";

type MealItem = {
  food: string;
  quantity: string;
};

type MealPlan = {
  meal: "Breakfast" | "Lunch" | "Dinner";
  items: MealItem[];
};

export default function DashboardPage() {
  const navigate = useNavigate();
  const [mealPlan, setMealPlan] = useState<MealPlan[]>([]);

  useEffect(() => {
    // 🔹 Placeholder: fetch meal plan from backend
    const fetchMealPlan = async () => {
      const dummyData: MealPlan[] = [
        {
          meal: "Breakfast",
          items: [
            { food: "Oatmeal", quantity: "1 cup" },
            { food: "Banana", quantity: "1 medium" },
          ],
        },
        {
          meal: "Lunch",
          items: [
            { food: "Grilled Chicken", quantity: "6 oz" },
            { food: "Brown Rice", quantity: "1 cup" },
          ],
        },
        {
          meal: "Dinner",
          items: [
            { food: "Salmon", quantity: "5 oz" },
            { food: "Steamed Broccoli", quantity: "1 cup" },
          ],
        },
      ];

      setMealPlan(dummyData);
    };

    fetchMealPlan();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Card>
        <h1 className={styles.title}>Meal Plan</h1>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Meal</th>
                <th>Foods</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {mealPlan.map((meal) =>
                meal.items.map((item, index) => (
                  <tr key={`${meal.meal}-${index}`}>
                    <td>{meal.meal}</td>
                    <td>{item.food}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <NavigationFooter
          onBack={() => navigate("/hub")}
          onNext={() => navigate("/groceries")}
        />
      </Card>
    </div>
  );
}
