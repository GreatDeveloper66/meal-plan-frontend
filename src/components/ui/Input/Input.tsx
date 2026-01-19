import styles from "./Input.module.css";

export type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  isValid: boolean;
  type?: React.HTMLInputTypeAttribute;
};

export default function Input({
  label,
  value,
  onChange,
  isValid,
  type = "text",
}: InputProps) {
  const showState = value.length > 0;

  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      <input
        type={type}
        className={`${styles.input} ${
          showState ? (isValid ? styles.valid : styles.invalid) : ""
        }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
