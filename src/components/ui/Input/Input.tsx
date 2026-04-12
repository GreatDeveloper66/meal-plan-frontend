import { InputProps } from "../../../data_types/data_types";
import styles from "./Input.module.css";

export default function Input({
  label,
  value,
  onChange,
  isValid,
  type = "text",
  autoComplete,
}: InputProps) {
  const showState = value.length > 0;

  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      <input
        type={type}
        autoComplete={autoComplete}
        className={`${styles.input} ${
          showState ? (isValid ? styles.valid : styles.invalid) : ""
        }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}