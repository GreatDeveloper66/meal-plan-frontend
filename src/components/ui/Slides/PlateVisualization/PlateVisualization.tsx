import styles from "../MealSlide/MealSlide.module.css";

type FoodSegment = {
  name: string;
  angle: number;
  startAngle: number;
  color: string;
};

type PlateVisualizationProps = {
  segments: FoodSegment[];
};

export default function PlateVisualization({ segments }: PlateVisualizationProps) {
  return (
    <div className={styles.plateContainer}>
      <div className={styles.plate}>
        {segments.map((segment, index) => (
          <div
            key={index}
            className={styles.segment}
            style={{
              transform: `rotate(${segment.startAngle}deg)`,
            }}
          >
            <div
              className={styles.segmentInner}
              style={{
                background: `conic-gradient(from ${segment.startAngle}deg, ${segment.color} 0deg ${segment.angle}deg, transparent ${segment.angle}deg)`,
              }}
              aria-label={`${segment.name} segment`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}