import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FirstProfileSetupPage.module.css";
import Input from "../../components/ui/Input/Input";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";
import Card from "../../components/ui/Card/Card";
import { FormStateForFirstUserForm, ValidationStateForFirstUserForm } from "../../data_types/data_types";

const initialForm: FormStateForFirstUserForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export default function FirstProfileSetupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormStateForFirstUserForm>(initialForm);

  const validation: ValidationStateForFirstUserForm = {
    firstName: form.firstName.trim().length > 0,
    lastName: form.lastName.trim().length > 0,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    phone: /^\d{10,15}$/.test(form.phone),
  };

  const allValid = Object.values(validation).every(Boolean);

  const handleChange = (field: keyof FormStateForFirstUserForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (!allValid) return;

    // 🔒 Placeholder for future backend validation
    // TODO: Call user auth service to check for duplicate accounts and save user data in a central location (e.g. context or global state) for use in future steps


    navigate("/second-profile-setup");
  };

  return (
    <div className={styles.page}>
      <form onSubmit={(e) => e.preventDefault()}>
        <Card title="Create An Account">

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

        <NavigationFooter
          onBack={() => navigate("/")}
          onNext={() => navigate("/second-profile-setup")}
          nextDisabled={!allValid}
        />
        </Card>
      </form>
    </div>
  );
}
