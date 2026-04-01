import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import Input from "../../components/ui/Input/Input";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";
import styles from "./FirstEditPage.module.css";
import SelectInput from "../../components/ui/SelectInput/SelectInput";
import { FormStateForFourthProfileForm, ValidationStateForFourthProfileForm } from "../../data_types/data_types";
import { AppContext } from "../../AppContext/AppContext";
import { useContext } from "react";

const initialForm: FormStateForFourthProfileForm = {
  age: "",
  sex: "",
  weight: "",
  weightUnit: "lb",
  height: "",
  heightUnit: "cm",
};

export default function FirstEditPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormStateForFourthProfileForm>(initialForm);
  const appContext = useContext(AppContext);

  const validation: ValidationStateForFourthProfileForm = {
    age: Number(form.age) >= 13 && Number(form.age) <= 120,
    sex: form.sex.length > 0,
    weight: Number(form.weight) > 0,
    weightUnit: form.weightUnit === "lb" || form.weightUnit === "kg",
    height: Number(form.height) > 0,
    heightUnit: form.heightUnit === "cm" || form.heightUnit === "in",
  };
  const allValid = Object.values(validation).every(Boolean);

  const handleSave = () => {
    // 🔹 Placeholder: save personal details
    appContext.setFourthProfileFormState(form);
    appContext.updateDietProfile();

    navigate("/second-edit-page");
  };

  const handleCancel = () => {
    navigate("/hub");
  };

  return (
    <div className={styles.wrapper}>
      <Card>
        <h1 className={styles.title}>Edit Profile</h1>
        <p className={styles.subtitle}>Personal Details</p>

         <div className={styles.fields}>
            <Input
              label="Age"
              type="number"
              value={form.age}
              onChange={(value) => setForm({ ...form, age: value })}
              isValid={validation.age}
            />

            <SelectInput
              label="Sex"
              value={form.sex}
              onChange={(value) => setForm({ ...form, sex: value })}
              isValid={validation.sex}
              options={[
                { label: "Male", value: "m" },
                { label: "Female", value: "f" },
              ]}
            />

            <div className={styles.inlineGroup}>
              <Input
                label="Weight"
                type="number"
                value={form.weight}
                onChange={(value) => setForm({ ...form, weight: value })}
                isValid={validation.weight}
              />

              <SelectInput
                label="Unit"
                value={form.weightUnit}
                onChange={(value) => setForm({ ...form, weightUnit: value as "lb" | "kg" })}
                isValid={true}
                options={[
                  { label: "lbs", value: "lb" },
                  { label: "kg", value: "kg" },
                ]}
              />
            </div>

            <div className={styles.inlineGroup}>
              <Input
                label="Height"
                type="number"
                value={form.height}
                onChange={(value) => setForm({ ...form, height: value })}
                isValid={validation.height}
              />

              <SelectInput
                label="Unit"
                value={form.heightUnit}
                onChange={(value) => setForm({ ...form, heightUnit: value as "cm" | "in" })}
                isValid={true}
                options={[
                  { label: "cm", value: "cm" },
                  { label: "in", value: "in" },
                ]}
              />
            </div>
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
