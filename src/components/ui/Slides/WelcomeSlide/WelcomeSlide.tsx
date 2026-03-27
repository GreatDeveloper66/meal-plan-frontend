import styles from "./WelcomeSlide.module.css";

type WelcomeSlideProps = {
  title: string;
  description: string;
  imageEmoji?: string;
  imageAlt?: string;
};

export default function WelcomeSlide({ 
  title, 
  description, 
  imageEmoji = "🍳",
  imageAlt = "Illustration"
}: WelcomeSlideProps) {
  return (
    <div className={styles.slide}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.imagePlaceholder} aria-label={imageAlt}>
        {imageEmoji}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}