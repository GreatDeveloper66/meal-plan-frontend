import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import Input from "../../components/ui/Input/Input";
import styles from "./LoginScreenPage.module.css";

export default function LoginScreenPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const emailIsValid = /^\S+@\S+\.\S+$/.test(email);
  const passwordIsValid = password.length >= 6;

  const formIsValid = emailIsValid && passwordIsValid;

  const handleLogin = () => {
    if (!formIsValid) return;

    // 🔹 Placeholder for auth API call
    console.log("Logging in with:", { email, password, rememberMe });

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
            value={email}
            onChange={setEmail}
            isValid={emailIsValid}
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            isValid={passwordIsValid}
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
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
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
