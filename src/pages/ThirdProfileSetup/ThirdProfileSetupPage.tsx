import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SelectInput from "../../components/ui/SelectInput/SelectInput";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";
import Card from "../../components/ui/Card/Card";
import styles from "./ThirdProfileSetupPage.module.css";

export default function ThirdProfileSetupPage() {
  const navigate = useNavigate();

  const [activityFactor, setActivityFactor] = useState("");
  const [dietType, setDietType] = useState("");
  const [budgetLevel, setBudgetLevel] = useState("");

  const isFormValid =
    activityFactor.length > 0 &&
    dietType.length > 0 &&
    budgetLevel.length > 0;

  return (
    <div className={styles.wrapper}>
      <form onSubmit={(e) => e.preventDefault()}>
        <Card title="Lifestyle Preferences">
        <h1 className={styles.title}>Lifestyle Preferences</h1>

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

        <NavigationFooter
          onBack={() => navigate("/second-profile-setup")}
          onNext={() => {
            // TODO: persist preferences + continue flow
            navigate("/fourth-profile-setup");
          }}
          nextDisabled={!isFormValid}
        />
        </Card>
      </form>
    </div>
  );
}
