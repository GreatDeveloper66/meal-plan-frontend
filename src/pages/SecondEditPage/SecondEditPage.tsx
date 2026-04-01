import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";
import styles from "./SecondEditPage.module.css";
import SelectInput from "../../components/ui/SelectInput/SelectInput";
import { FormStateForThirdProfileForm, ValidationStateForThirdProfileForm } from "../../data_types/data_types";
import { AppContext } from "../../AppContext/AppContext";
import { useContext } from "react";
const initialForm: FormStateForThirdProfileForm = {
  activityFactor: "",
  dietType: "",
  budgetLevel: "",
};

export default function SecondEditPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormStateForThirdProfileForm>(initialForm);
  const appContext = useContext(AppContext);

  const validation: ValidationStateForThirdProfileForm = {
    activityFactor: form.activityFactor.length > 0,
    dietType: form.dietType.length > 0,
    budgetLevel: form.budgetLevel.length > 0,
  };

  const handleSave = () => {
    // 🔹 Placeholder: save preference details
    // console.log({ activityFactor, dietType, budgetLevel });
    appContext.setThirdProfileFormState(form);
    appContext.updateDietProfile();
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
            value={form.activityFactor}
            onChange={(value) => setForm({ ...form, activityFactor: value })}
            isValid={validation.activityFactor}
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
            value={form.dietType}
            onChange={(value) => setForm({ ...form, dietType: value })}
            isValid={validation.dietType}
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
            value={form.budgetLevel}
            onChange={(value) => setForm({ ...form, budgetLevel: value })}
            isValid={validation.budgetLevel}
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
            disabled={!Object.values(validation).every(Boolean)}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </Card>
    </div>
  );
}
