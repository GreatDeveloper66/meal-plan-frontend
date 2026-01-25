import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import Input from "../../components/ui/Input/Input";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";
import styles from "./FirstEditPage.module.css";

export default function FirstEditPage() {
  const navigate = useNavigate();

  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const allValid = age && sex && weight && height;

  const handleSave = () => {
    // 🔹 Placeholder: save personal details
    console.log({ age, sex, weight, height });

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

        <Input label="Age" value={age} onChange={setAge} isValid />
        <Input label="Sex (M / F)" value={sex} onChange={setSex} isValid/>
        <Input label="Weight" value={weight} onChange={setWeight} isValid/>
        <Input label="Height" value={height} onChange={setHeight} isValid/>

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
