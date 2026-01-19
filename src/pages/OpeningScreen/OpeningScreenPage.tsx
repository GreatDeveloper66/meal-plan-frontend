import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../components/layout/PageContainer";
import styles from "./OpeningScreenPage.module.css";

export default function OpeningScreenPage() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Are you a new or returning user?
        </h1>

        <div className={styles.actions}>
          <button
            className={styles.secondaryButton}
            onClick={() => navigate("/first-profile-setup")}
          >
            New User
          </button>

          <button
            className={styles.primaryButton}
            onClick={() => navigate("/login")}
          >
            Returning User
          </button>
        </div>
      </div>
    </PageContainer>
  );
}
