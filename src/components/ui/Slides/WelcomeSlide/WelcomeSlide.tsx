import styles from "./WelcomeSlide.module.css";

type WelcomeSlideProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageTooltip: string;
};

export default function WelcomeSlide({
  title,
  description,
  imageSrc,
  imageAlt,
  imageTooltip
}: WelcomeSlideProps) {
  return (
    <div className={styles.slide}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <img
            src={imageSrc}
            alt={imageAlt}
            title={imageTooltip}
            className={styles.image}
          />
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}