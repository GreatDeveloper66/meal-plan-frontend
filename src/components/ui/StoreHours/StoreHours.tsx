import styles from "./StoreCard.module.css";
import Badge from "../../ui/Badge/Badge";
import StatusIndicator from "../../ui/StatusIndicator/StatusIndicator";

type HoursStatus = {
  isOpen: boolean;
  message: string;
  hoursUntilClose?: number;
  hoursUntilOpen?: number;
  nextCloseTime?: string;
  nextOpenTime?: string;
};

type StoreHoursProps = {
  currentOpeningHours?: {
    weekdayDescriptions?: string[];
    openNow?: boolean;
    periods?: Array<{
      open: { day: number; hour: number; minute: number };
      close: { day: number; hour: number; minute: number };
    }>;
  };
  regularOpeningHours?: {
    weekdayDescriptions?: string[];
  };
  hoursStatus: HoursStatus;
};

export default function StoreHours({ 
  currentOpeningHours, 
  regularOpeningHours,
  hoursStatus 
}: StoreHoursProps) {
  const getStatusType = (): "open" | "closing-soon" | "closed" | "opens-soon" => {
    if (!hoursStatus.isOpen) {
      if (hoursStatus.hoursUntilOpen && hoursStatus.hoursUntilOpen <= 1) {
        return "opens-soon";
      }
      return "closed";
    }
    if (hoursStatus.hoursUntilClose && hoursStatus.hoursUntilClose <= 1) {
      return "closing-soon";
    }
    return "open";
  };

  return (
    <div className={styles.hoursSection}>
      <StatusIndicator
        status={getStatusType()}
        message={hoursStatus.message}
      />
      
      {hoursStatus.nextCloseTime && hoursStatus.isOpen && (
        <Badge variant="warning" className={styles.closingBadge}>
          Closes at {new Date(hoursStatus.nextCloseTime).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </Badge>
      )}
      
      {hoursStatus.nextOpenTime && !hoursStatus.isOpen && (
        <Badge variant="info" className={styles.openingBadge}>
          Opens at {new Date(hoursStatus.nextOpenTime).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </Badge>
      )}

      <details className={styles.hoursDetails}>
        <summary>Hours of Operation</summary>
        <div className={styles.hoursList}>
          {regularOpeningHours?.weekdayDescriptions?.map((desc, index) => (
            <div key={index} className={styles.hoursRow}>
              {desc}
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}