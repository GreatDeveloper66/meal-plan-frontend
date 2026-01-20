import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card/Card";
import Input from "../../components/ui/Input/Input";
import SelectInput from "../../components/ui/SelectInput/SelectInput";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";

import styles from "./FourthProfileSetupPage.module.css";

export default function FourthProfileSetupPage() {
  const navigate = useNavigate();

  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("lb");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");

  const ageNumber = Number(age);
  const weightNumber = Number(weight);
  const heightNumber = Number(height);

  const isAgeValid = ageNumber >= 13 && ageNumber <= 120;
  const isSexValid = sex.length > 0;
  const isWeightValid = weightNumber > 0;
  const isHeightValid = heightNumber > 0;

  const isFormValid =
    isAgeValid && isSexValid && isWeightValid && isHeightValid;

  return (
    <div className={styles.wrapper}>
      <form>
        <Card title="Personal Details">
          <div className={styles.fields}>
            <Input
              label="Age"
              type="number"
              value={age}
              onChange={setAge}
              isValid={isAgeValid}
            />

            <SelectInput
              label="Sex"
              value={sex}
              onChange={setSex}
              isValid={isSexValid}
              options={[
                { label: "Male", value: "m" },
                { label: "Female", value: "f" },
              ]}
            />

            <div className={styles.inlineGroup}>
              <Input
                label="Weight"
                type="number"
                value={weight}
                onChange={setWeight}
                isValid={isWeightValid}
              />

              <SelectInput
                label="Unit"
                value={weightUnit}
                onChange={setWeightUnit}
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
                value={height}
                onChange={setHeight}
                isValid={isHeightValid}
              />

              <SelectInput
                label="Unit"
                value={heightUnit}
                onChange={setHeightUnit}
                isValid={true}
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
            nextDisabled={!isFormValid}
          />
        </Card>
      </form>
    </div>
  );
}
