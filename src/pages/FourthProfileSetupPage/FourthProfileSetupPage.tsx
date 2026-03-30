import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card/Card";
import Input from "../../components/ui/Input/Input";
import SelectInput from "../../components/ui/SelectInput/SelectInput";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";
import { FormStateForFourthProfileForm, ValidationStateForFourthProfileForm } from "../../data_types/data_types";

import styles from "./FourthProfileSetupPage.module.css";

const initialForm: FormStateForFourthProfileForm = {
  age: "",
  sex: "",
  weight: "",
  weightUnit: "lb",
  height: "",
  heightUnit: "cm",
};

export default function FourthProfileSetupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState<FormStateForFourthProfileForm>(initialForm);

  const validation: ValidationStateForFourthProfileForm = {
    age: Number(form.age) >= 13 && Number(form.age) <= 120,
    sex: form.sex.length > 0,
    weight: Number(form.weight) > 0,
    weightUnit: form.weightUnit === "lb" || form.weightUnit === "kg",
    height: Number(form.height) > 0,
    heightUnit: form.heightUnit === "cm" || form.heightUnit === "in",
  };

  // const [age, setAge] = useState("");
  // const [sex, setSex] = useState("");
  // const [weight, setWeight] = useState("");
  // const [weightUnit, setWeightUnit] = useState("lb");
  // const [height, setHeight] = useState("");
  // const [heightUnit, setHeightUnit] = useState("cm");

  // const ageNumber = Number(age);
  // const weightNumber = Number(weight);
  // const heightNumber = Number(height);

  // const isAgeValid = ageNumber >= 13 && ageNumber <= 120;
  // const isSexValid = sex.length > 0;
  // const isWeightValid = weightNumber > 0;
  // const isHeightValid = heightNumber > 0;

  // const isFormValid =
  //   isAgeValid && isSexValid && isWeightValid && isHeightValid;

  return (
    <div className={styles.wrapper}>
      <form>
        <Card title="Personal Details">
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
                isValid={validation.weightUnit}
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
                isValid={validation.heightUnit}
                options={[
                  { label: "cm", value: "cm" },
                  { label: "in", value: "in" },
                ]}
              />
            </div>
          </div>

          <NavigationFooter
            onBack={() => navigate("/third-profile-setup")}
            onNext={() => {
              // TODO: persist demographic data
              navigate("/hub");
            }}
            nextDisabled={!Object.values(validation).every(Boolean)}
          />
        </Card>
      </form>
    </div>
  );
}
