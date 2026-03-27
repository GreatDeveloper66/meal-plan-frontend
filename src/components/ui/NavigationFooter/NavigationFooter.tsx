import styles from "./NavigationFooter.module.css";

type NavigationFooterProps = {
  onBack: () => void;
  onNext: () => void;
  nextDisabled?: boolean;
  backDisabled?: boolean;
};

export default function NavigationFooter({
  onBack,
  onNext,
  nextDisabled = false,
  backDisabled = false
}: NavigationFooterProps) {
  return (
    <div className={styles.navigation}>
      <button
        className={styles.backArrow}
        onClick={onBack}
        disabled={backDisabled}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        className={styles.nextArrow}
        onClick={onNext}
        disabled={nextDisabled}
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}