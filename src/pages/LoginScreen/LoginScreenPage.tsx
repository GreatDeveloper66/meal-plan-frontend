import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import Input from "../../components/ui/Input/Input";
import styles from "./LoginScreenPage.module.css";
import { loginFormState, loginFormValidationState } from "../../data_types/data_types";
import { AppContext } from "../../AppContext/AppContext";

const initialFormState: loginFormState = {
  email: "",
  password: "",
  rememberMe: false,
};

export default function LoginScreenPage() {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);


  const [initialForm, setInitialForm] = useState<loginFormState>(initialFormState);

  const validation: loginFormValidationState = {
    email: /^\S+@\S+\.\S+$/.test(initialForm.email),
    password: initialForm.password.length >= 6,
  };

  const formIsValid = validation.email && validation.password;

  const handleLogin = () => {
    if (!formIsValid) return;
    appContext.setLoginFormState(initialForm);
    appContext.loginUser()
    // 🔹 Placeholder for auth API call
    console.log("Logging in with:", { email: initialForm.email, password: initialForm.password, rememberMe: initialForm.rememberMe });

    navigate("/hub");
  };

  return (
    <div className={styles.wrapper}>
      <Card>
        <h1 className={styles.title}>Login</h1>

        <div className={styles.form}>
          <Input
            label="Email Address"
            type="email"
            value={initialForm.email}
            onChange={(email) => setInitialForm({ ...initialForm, email })}
            isValid={validation.email}
          />

          <Input
            label="Password"
            type="password"
            value={initialForm.password}
            onChange={(password) => setInitialForm({ ...initialForm, password })}
            isValid={validation.password}
          />
        </div>

        {/* Buttons row */}
        <div className={styles.actions}>
          <button
            className={styles.backButton}
            onClick={() => navigate("/")}
          >
            Back
          </button>

          <button
            className={styles.loginButton}
            disabled={!formIsValid}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        {/* Footer row */}
        <div className={styles.footer}>
          <label className={styles.rememberMe}>
            <input
              type="checkbox"
              checked={initialForm.rememberMe}
              onChange={(e) => setInitialForm({ ...initialForm, rememberMe: e.target.checked })}
            />
            Remember Me
          </label>

          <button
            className={styles.forgotPassword}
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </button>
        </div>
      </Card>
    </div>
  );
}
