import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/ui/Input/Input";
import NavigationFooter from "../../components/ui/NavigationFooter/NavigationFooter";
import Card from "../../components/ui/Card/Card";
import styles from "./SecondProfileSetupPage.module.css";

export default function SecondProfileSetupPage() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isPasswordValid = password.length >= 8;
  const isConfirmPasswordValid =
    confirmPassword.length > 0 && confirmPassword === password;

  const isFormValid = isPasswordValid && isConfirmPasswordValid;

  return (
    <div className={styles.wrapper}>
      <form onSubmit={(e) => e.preventDefault()}>
        <Card title="Create An Account">
        <h1 className={styles.title}>Create An Account</h1>

        <div className={styles.fields}>
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            isValid={isPasswordValid}
          />

          <Input
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            isValid={isConfirmPasswordValid}
          />
        </div>

        <NavigationFooter
          onBack={() => navigate("/first-profile-setup")}
          onNext={() => {
            // TODO: hook into auth service
            navigate("/third-profile-setup");
          }}
          nextDisabled={!isFormValid}
        />
        </Card>
      </form>
    </div>
  );
}
