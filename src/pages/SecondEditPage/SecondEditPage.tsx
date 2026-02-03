import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";
import styles from "./SecondEditPage.module.css";
import SelectInput from "../../components/ui/SelectInput/SelectInput";

export default function SecondEditPage() {
  const navigate = useNavigate();

 const [activityFactor, setActivityFactor] = useState("");
  const [dietType, setDietType] = useState("");
  const [budgetLevel, setBudgetLevel] = useState("");
  const allValid = activityFactor.length > 0 && dietType.length > 0 && budgetLevel.length > 0;

  const handleSave = () => {
    // 🔹 Placeholder: save preference details
    console.log({ activityFactor, dietType, budgetLevel });

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

       <div className={styles.fields}>
          <SelectInput
            label="Activity Factor"
            value={activityFactor}
            onChange={setActivityFactor}
            isValid={activityFactor.length > 0}
            options={[
              { label: "Sedentary", value: "sedentary" },
              { label: "Lightly Active", value: "lightly_active" },
              { label: "Moderately Active", value: "moderately_active" },
              { label: "Very Active", value: "very_active" },
              { label: "Extra Active", value: "extra_active" },
            ]}
          />

          <SelectInput
            label="Diet Type"
            value={dietType}
            onChange={setDietType}
            isValid={dietType.length > 0}
            options={[
              { label: "Normal", value: "normal" },
              { label: "Keto", value: "keto" },
              { label: "High Protein", value: "high_protein" },
              { label: "Vegetarian", value: "vegetarian" },
              { label: "Vegan", value: "vegan" },
            ]}
          />

          <SelectInput
            label="Budget Level"
            value={budgetLevel}
            onChange={setBudgetLevel}
            isValid={budgetLevel.length > 0}
            options={[
              { label: "Minimal", value: "minimal" },
              { label: "Normal", value: "normal" },
              { label: "Premium", value: "premium" },
            ]}
          />
        </div>

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
