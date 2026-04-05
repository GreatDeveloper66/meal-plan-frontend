import styles from "./StoreCard.module.css";
// import StorePhotoCarousel from "../PhotoCarousel/PhotoCarousel";
// import StoreHours from "../StoreHours/StoreHours";
// import Badge from "../../ui/Badge/Badge";

// type StoreCardProps = {
//   store: {
//     placeId: string;
//     name: string;
//     formattedAddress: string;
//     distanceFromCurrentLocation?: number;
//     rating?: number;
//     userRatingCount?: number;
//     photos: string[];
//     businessStatus?: string;
//     priceLevel?: number;
//     phoneNumber?: string;
//     website?: string;
//     hoursStatus: {
//       isOpen: boolean;
//       message: string;
//       hoursUntilClose?: number;
//       hoursUntilOpen?: number;
//       nextCloseTime?: string;
//       nextOpenTime?: string;
//     };
//     regularOpeningHours?: {
//       weekdayDescriptions?: string[];
//     };
//     currentOpeningHours?: {
//       openNow?: boolean;
//       periods?: Array<{
//         open: { day: number; hour: number; minute: number };
//         close: { day: number; hour: number; minute: number };
//       }>;
//     };
//   };
// };

// export default function StoreCard({ store }: StoreCardProps) {
//   const formatDistance = (distance?: number) => {
//     if (!distance) return "Distance unavailable";
//     if (distance < 1) return `${Math.round(distance * 1000)} meters away`;
//     return `${distance.toFixed(1)} miles away`;
//   };

//   const getPriceLevel = (level?: number) => {
//     if (!level) return "";
//     return "💰".repeat(level);
//   };

//   const openGoogleMaps = () => {
//     const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//       store.name + " " + store.formattedAddress
//     )}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className={styles.card}>
//       {/* Photo Carousel - Now using our reusable Carousel component */}
//       <div className={styles.photoSection}>
//         <StorePhotoCarousel photos={store.photos} storeName={store.name} />
//       </div>

//       {/* Store Info */}
//       <div className={styles.infoSection}>
//         <div className={styles.header}>
//           <h2 className={styles.storeName}>{store.name}</h2>
//           <div className={styles.badgeGroup}>
//             {store.businessStatus === "OPERATIONAL" && (
//               <Badge variant="success">Open</Badge>
//             )}
//             {store.priceLevel && (
//               <Badge variant="neutral">{getPriceLevel(store.priceLevel)}</Badge>
//             )}
//           </div>
//         </div>

//         <div className={styles.distance}>
//           📍 {formatDistance(store.distanceFromCurrentLocation)}
//         </div>

//         {store.rating && (
//           <div className={styles.rating}>
//             <span className={styles.stars}>★</span>
//             <span className={styles.ratingValue}>{store.rating}</span>
//             <span className={styles.ratingCount}>
//               ({store.userRatingCount} reviews)
//             </span>
//           </div>
//         )}

//         <div className={styles.address}>
//           <button 
//             className={styles.addressLink}
//             onClick={openGoogleMaps}
//             aria-label="Open in Google Maps"
//           >
//             📍 {store.formattedAddress}
//           </button>
//         </div>

//         {store.phoneNumber && (
//           <div className={styles.phone}>
//             📞 <a href={`tel:${store.phoneNumber}`}>{store.phoneNumber}</a>
//           </div>
//         )}

//         <StoreHours
//           currentOpeningHours={store.currentOpeningHours}
//           regularOpeningHours={store.regularOpeningHours}
//           hoursStatus={store.hoursStatus}
//         />

//         {store.website && (
//           <div className={styles.website}>
//             🌐 <a href={store.website} target="_blank" rel="noopener noreferrer">
//               Visit Website
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }