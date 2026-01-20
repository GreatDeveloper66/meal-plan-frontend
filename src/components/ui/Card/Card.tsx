import { ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  title?: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className={styles.card}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {children}
    </div>
  );
}
