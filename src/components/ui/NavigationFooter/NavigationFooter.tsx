import styles from "./NavigationFooter.module.css";

type NavigationFooterProps = {
  onBack: () => void;
  onNext: () => void;
  nextDisabled?: boolean;
};

export default function NavigationFooter({
  onBack,
  onNext,
  nextDisabled = false,
}: NavigationFooterProps) {
  return (
    <div className={styles.footer}>
      <button
        type="button"
        className={styles.arrowButton}
        onClick={onBack}
        aria-label="Go back"
      >
        ←
      </button>

      <button
        type="button"
        className={`${styles.arrowButton} ${
          nextDisabled ? styles.disabled : ""
        }`}
        onClick={onNext}
        disabled={nextDisabled}
        aria-label="Go forward"
      >
        →
      </button>
    </div>
  );
}
