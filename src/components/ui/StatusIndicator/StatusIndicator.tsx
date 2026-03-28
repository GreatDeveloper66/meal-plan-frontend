import styles from "./StatusIndicator.module.css";

type Status = "open" | "closing-soon" | "closed" | "opens-soon";

type StatusIndicatorProps = {
  status: Status;
  message: string;
  showDot?: boolean;
};

export default function StatusIndicator({ 
  status, 
  message, 
  showDot = true 
}: StatusIndicatorProps) {
  return (
    <div className={`${styles.indicator} ${styles[status]}`}>
      {showDot && <span className={styles.dot} />}
      <span className={styles.message}>{message}</span>
    </div>
  );
}