import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";
import styles from "./SecondEditPage.module.css";

export default function SecondEditPage() {
  const navigate = useNavigate();

  const [activity, setActivity] = useState("");
  const [diet, setDiet] = useState("");
  const [budget, setBudget] = useState("");

  const allValid = activity && diet && budget;

  const handleSave = () => {
    // 🔹 Placeholder: save preference details
    console.log({ activity, diet, budget });

    navigate("/hub");
  };

  const handleCancel = () => {
    navigate("/hub");
  };

  return (
    <div className={styles.wrapper}>
      <Card>
        <h1 className={styles.title}>Edit Profile</h1>
        <p className={styles.subtitle}>Preferences</p>

        <label className={styles.label}>
          Activity Level
          <select value={activity} onChange={(e) => setActivity(e.target.value)}>
            <option value="">Select</option>
            <option value="sedentary">Sedentary</option>
            <option value="light">Lightly Active</option>
            <option value="moderate">Moderately Active</option>
            <option value="very">Very Active</option>
            <option value="extra">Extra Active</option>
          </select>
        </label>

        <label className={styles.label}>
          Diet Type
          <select value={diet} onChange={(e) => setDiet(e.target.value)}>
            <option value="">Select</option>
            <option value="normal">Normal</option>
            <option value="keto">Keto</option>
            <option value="high-protein">High Protein</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>
        </label>

        <label className={styles.label}>
          Budget Level
          <select value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option value="">Select</option>
            <option value="minimal">Minimal</option>
            <option value="normal">Normal</option>
            <option value="premium">Premium</option>
          </select>
        </label>

        <div className={styles.actions}>
          <button className={styles.secondaryButton} onClick={handleCancel}>
            Cancel
          </button>
          <button
            className={styles.primaryButton}
            disabled={!allValid}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </Card>
    </div>
  );
}
