import styles from "./SelectInput.module.css";

export type SelectOption = {
  label: string;
  value: string;
};

type SelectInputProps = {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  isValid: boolean;
};

export default function SelectInput({
  label,
  value,
  options,
  onChange,
  isValid,
}: SelectInputProps) {
  const showState = value.length > 0;

  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>
      <select
        className={`${styles.select} ${
          showState ? (isValid ? styles.valid : styles.invalid) : ""
        }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
