import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FirstProfileSetupPage.module.css";
import Input from "../../components/ui/Input/Input";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type ValidationState = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
};

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export default function FirstProfileSetupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(initialForm);

  const validation: ValidationState = {
    firstName: form.firstName.trim().length > 0,
    lastName: form.lastName.trim().length > 0,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    phone: /^\d{10,15}$/.test(form.phone),
  };

  const allValid = Object.values(validation).every(Boolean);

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (!allValid) return;

    // 🔒 Placeholder for future backend validation
    // TODO: Call user auth service to check for duplicate accounts

    navigate("/second-profile-setup");
  };

  return (
    <div className={styles.page}>
      <form className={styles.card} onSubmit={(e) => e.preventDefault()}>
        <h1 className={styles.title}>Create An Account</h1>

        <div className={styles.fields}>
          <Input
            label="First Name"
            value={form.firstName}
            onChange={(v) => handleChange("firstName", v)}
            isValid={validation.firstName}
          />

          <Input
            label="Last Name"
            value={form.lastName}
            onChange={(v) => handleChange("lastName", v)}
            isValid={validation.lastName}
          />

          <Input
            label="Email Address"
            value={form.email}
            onChange={(v) => handleChange("email", v)}
            isValid={validation.email}
          />

          <Input
            label="Phone Number"
            value={form.phone}
            onChange={(v) => handleChange("phone", v.replace(/\D/g, ""))}
            isValid={validation.phone}
          />
        </div>

        <div className={styles.navigation}>
          <button
            type="button"
            className={styles.backArrow}
            onClick={() => navigate("/")}
            aria-label="Go back"
          >
            ←
          </button>

          <button
            type="button"
            className={styles.nextArrow}
            disabled={!allValid}
            onClick={handleNext}
            aria-label="Continue"
          >
            →
          </button>
        </div>
      </form>
    </div>
  );
}

