import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import styles from "./InfoPage.module.css";

export default function InfoPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <Card>
        <h1 className={styles.title}>Information</h1>

        <div className={styles.content}>
          <section>
            <h2>Diet Types</h2>
            <ul>
              <li>
                <strong>Balanced:</strong> A mix of carbohydrates, proteins, and
                fats focused on long-term sustainability.
              </li>
              <li>
                <strong>High Protein:</strong> Emphasizes protein intake to
                support muscle growth and satiety.
              </li>
              <li>
                <strong>Keto:</strong> Very low carbohydrate intake designed to
                shift the body into ketosis.
              </li>
              <li>
                <strong>Vegetarian:</strong> Excludes meat while focusing on
                plant-based foods.
              </li>
              <li>
                <strong>Vegan:</strong> Excludes all animal products, including
                dairy and eggs.
              </li>
            </ul>
          </section>

          <section>
            <h2>Activity Levels</h2>
            <ul>
              <li>
                <strong>Sedentary:</strong> Little to no exercise; primarily
                sitting throughout the day.
              </li>
              <li>
                <strong>Lightly Active:</strong> Light exercise or movement 1–3
                days per week.
              </li>
              <li>
                <strong>Moderately Active:</strong> Moderate exercise 3–5 days
                per week.
              </li>
              <li>
                <strong>Very Active:</strong> Intense exercise 6–7 days per week.
              </li>
            </ul>
          </section>

          <section>
            <h2>Budget Levels</h2>
            <ul>
              <li>
                <strong>Low:</strong> Focuses on affordable staples and minimal
                specialty items.
              </li>
              <li>
                <strong>Medium:</strong> Allows a balance between cost and food
                variety.
              </li>
              <li>
                <strong>High:</strong> Includes premium ingredients and specialty
                foods.
              </li>
            </ul>
          </section>

          <section>
            <h2>About Dieting</h2>
            <p>
              Dieting is not about restriction or perfection. A successful diet
              is one that aligns with your lifestyle, preferences, and health
              goals. Consistency, balance, and sustainability matter more than
              short-term results. This app is designed to guide—not pressure—you
              toward healthier choices.
            </p>
          </section>
        </div>

        <div className={styles.footer}>
          <button
            className={styles.returnButton}
            onClick={() => navigate("/hub")}
          >
            Return
          </button>
        </div>
      </Card>
    </div>
  );
}
