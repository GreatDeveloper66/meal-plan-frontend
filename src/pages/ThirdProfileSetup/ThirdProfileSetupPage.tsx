import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContext";

import SelectInput from "../../components/ui/SelectInput/SelectInput";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";
import Card from "../../components/ui/Card/Card";
import styles from "./ThirdProfileSetupPage.module.css";
import { FormStateForThirdProfileForm, ValidationStateForThirdProfileForm } from "../../data_types/data_types";

const initialForm: FormStateForThirdProfileForm = {
  activityFactor: "",
  dietType: "",
  budgetLevel: "",
};


export default function ThirdProfileSetupPage() {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);


  const [form, setForm] = useState<FormStateForThirdProfileForm>(initialForm);

  const validation: ValidationStateForThirdProfileForm = {
    activityFactor: form.activityFactor.length > 0,
    dietType: form.dietType.length > 0,
    budgetLevel: form.budgetLevel.length > 0,
  };

  const handleNext = () => {
    if(!Object.values(validation).every(Boolean)) return;
     appContext.setThirdProfileFormState(form);
    navigate("/fourth-profile-setup");
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={(e) => e.preventDefault()}>
        <Card title="Lifestyle Preferences">

        <div className={styles.fields}>
          <SelectInput
            label="Activity Factor"
            value={form.activityFactor}
            onChange={(v) => setForm((prev) => ({ ...prev, activityFactor: v }))}
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
            onChange={(v) => setForm((prev) => ({ ...prev, dietType: v }))}
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
            onChange={(v) => setForm((prev) => ({ ...prev, budgetLevel: v }))}
            isValid={validation.budgetLevel}
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
            handleNext();
          }}
          nextDisabled={!Object.values(validation).every(Boolean)}
        />
        </Card>
      </form>
    </div>
  );

}
