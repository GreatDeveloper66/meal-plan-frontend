import { useNavigate } from "react-router-dom";
import styles from "./HubPage.module.css";

export default function HubPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Your Hub</h1>
        <p className={styles.subtitle}>Where would you like to go next?</p>
      </header>

      <div className={styles.grid}>
        <button
          className={`${styles.hubButton} ${styles.dashboard}`}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>

        <button
          className={`${styles.hubButton} ${styles.edit}`}
          onClick={() => navigate("/first-edit-page")}
        >
          Edit
        </button>

        <button
          className={`${styles.hubButton} ${styles.info}`}
          onClick={() => navigate("/info")}
        >
          Info
        </button>
      </div>
    </div>
  );
}
