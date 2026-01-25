import { useState } from "react";
import Card from "../../components/ui/Card/Card";
import Input from "../../components/ui/Input/Input";
import styles from "./ForgotPasswordPage.module.css";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [codeSent, setCodeSent] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);

  // Validation
  const emailIsValid = /^\S+@\S+\.\S+$/.test(email);
  const passwordIsValid = password.length >= 6;
  const passwordsMatch = password === confirmPassword && password.length > 0;

  /* ---- Handlers (stubbed) ---- */

  const handleSendCode = () => {
    if (!emailIsValid) return;

    // 🔹 Placeholder: send email with code
    console.log("Sending reset code to:", email);

    setCodeSent(true);
  };

  const handleSubmitCode = () => {
    // 🔹 Placeholder: verify code
    console.log("Verifying code:", code);

    // Fake success for now
    setCodeVerified(true);
  };

  const handleChangePassword = () => {
    if (!passwordIsValid || !passwordsMatch) return;

    // 🔹 Placeholder: update password in DB
    console.log("Changing password:", password);
  };

  return (
    <div className={styles.wrapper}>
      <Card>
        <h1 className={styles.title}>Change Password</h1>

        {/* EMAIL STEP */}
        <p className={styles.message}>Enter email to send code</p>

        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={setEmail}
          isValid={emailIsValid}
        />

        <button
          className={styles.primaryButton}
          disabled={!emailIsValid}
          onClick={handleSendCode}
        >
          Send Code
        </button>

        {/* CODE STEP */}
        {codeSent && (
          <>
            <p className={styles.infoText}>
              If this email is in the database, a code will be sent to it.
            </p>

            <Input
              label="Code"
              type="text"
              value={code}
              onChange={setCode}
              isValid={code.length > 0}
            />

            <button
              className={styles.primaryButton}
              disabled={code.length === 0}
              onClick={handleSubmitCode}
            >
              Submit Code
            </button>
          </>
        )}

        {/* PASSWORD STEP */}
        {codeVerified && (
          <>
            <Input
              label="New Password"
              type="password"
              value={password}
              onChange={setPassword}
              isValid={passwordIsValid}
            />

            <Input
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={setConfirmPassword}
              isValid={passwordsMatch}
            />

            <button
              className={styles.primaryButton}
              disabled={!passwordIsValid || !passwordsMatch}
              onClick={handleChangePassword}
            >
              Change Password
            </button>
          </>
        )}
      </Card>
    </div>
  );
}
