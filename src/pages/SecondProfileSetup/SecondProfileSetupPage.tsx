import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/ui/Input/Input";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";
import Card from "../../components/ui/Card/Card";
import styles from "./SecondProfileSetupPage.module.css";
import { FormStateForSecondUserForm, ValidationStateForSecondUserForm } from "../../data_types/data_types";
import { AppContext } from "../../AppContext/AppContext";

const initialForm: FormStateForSecondUserForm = {
  password: "",
  confirmPassword: "",
};

export default function SecondProfileSetupPage() {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);

  const [form, setForm] = useState<FormStateForSecondUserForm>(initialForm);

  const validation: ValidationStateForSecondUserForm = {
    password: form.password.length >= 8,
    confirmPassword: form.confirmPassword === form.password && form.confirmPassword.length > 0,
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={(e) => e.preventDefault()}>
        <Card title="Create An Account">

        <div className={styles.fields}>
          <Input
            label="Password"
            type="password"
            value={form.password}
            onChange={(v) => setForm((prev) => ({ ...prev, password: v }))}
            isValid={validation.password}
          />

          <Input
            label="Confirm Password"
            type="password"
            value={form.confirmPassword}
            onChange={(v) => setForm((prev) => ({ ...prev, confirmPassword: v }))}
            isValid={validation.confirmPassword}
          />
        </div>

        <NavigationFooter
          onBack={() => navigate("/first-profile-setup")}
          onNext={() => {
            // TODO: hook into auth service
            appContext.setSecondUserFormState(form);
            appContext.registerUser();
            navigate("/third-profile-setup");
          }}
          nextDisabled={!Object.values(validation).every(Boolean)}
        />
        </Card>
      </form>
    </div>
  );
}
