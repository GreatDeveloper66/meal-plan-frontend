import { useState } from "react";
import styles from "./PhotoCarousel.module.css";
import Carousel from "../Carousel/Carousel";

type PhotoCarouselProps = {
  /** Array of image URLs to display */
  photos: string[];
  /** Name/alt text for the images (e.g., store name, recipe name) */
  altText: string;
  /** Whether to show the photo counter (e.g., "1 / 5") */
  showCounter?: boolean;
  /** Whether to show navigation arrows */
  showNavigation?: boolean;
  /** Whether to show progress dots */
  showDots?: boolean;
  /** Whether to enable modal view on click */
  enableModal?: boolean;
  /** Whether to enable wrap around (loop back to first) */
  wrapAround?: boolean;
  /** Custom aspect ratio for images (default: 16/9) */
  aspectRatio?: string;
  /** Additional CSS class names */
  className?: string;
};

export default function PhotoCarousel({
  photos,
  altText,
  showCounter = true,
  showNavigation = true,
  showDots = true,
  enableModal = true,
  wrapAround = true,
  aspectRatio = "16 / 9",
  className = "",
}: PhotoCarouselProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Handle empty photos array
  if (!photos || photos.length === 0) {
    return (
      <div className={`${styles.placeholder} ${className}`}>
        <span>📷</span>
        <p>No photos available</p>
      </div>
    );
  }

  // Handle single photo (no carousel needed)
  if (photos.length === 1) {
    return (
      <>
        <div 
          className={`${styles.singlePhoto} ${className}`}
          style={{ aspectRatio }}
        >
          <img
            src={photos[0]}
            alt={altText}
            className={styles.photoImage}
            onClick={() => enableModal && setIsModalOpen(true)}
          />
        </div>

        {/* Modal for single photo */}
        {enableModal && isModalOpen && (
          <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <img
                src={photos[0]}
                alt={altText}
                className={styles.modalImage}
              />
              <button
                className={styles.closeButton}
                onClick={() => setIsModalOpen(false)}
                aria-label="Close full-size image"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // Handle multiple photos with carousel
  const handleSlideChange = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  // Create an array of slide elements for the carousel
  const photoSlides = photos.map((photo, index) => (
    <div 
      key={index} 
      className={styles.photoSlide}
      style={{ aspectRatio }}
      onClick={() => enableModal && setIsModalOpen(true)}
    >
      <img 
        src={photo} 
        alt={`${altText} - ${index + 1}`}
        className={styles.photoImage}
        loading="lazy"
      />
    </div>
  ));

  return (
    <>
      <div className={`${styles.carouselWrapper} ${className}`}>
        <Carousel
          showNavigation={showNavigation && photos.length > 1}
          showDots={showDots && photos.length > 1}
          showCounter={showCounter && photos.length > 1}
          wrapAround={wrapAround}
          onSlideChange={handleSlideChange}
        >
          {photoSlides}
        </Carousel>
      </div>

      {/* Modal for full-size image */}
      {enableModal && isModalOpen && (
        <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[currentPhotoIndex]}
              alt={`${altText} - full size`}
              className={styles.modalImage}
            />
            
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close full-size image"
            >
              ×
            </button>
            
            {/* Navigation buttons for modal */}
            {photos.length > 1 && (
              <>
                <button
                  className={`${styles.modalNav} ${styles.modalPrev}`}
                  onClick={() => {
                    setCurrentPhotoIndex((prev) => 
                      prev === 0 ? photos.length - 1 : prev - 1
                    );
                  }}
                  aria-label="Previous photo"
                >
                  ←
                </button>
                <button
                  className={`${styles.modalNav} ${styles.modalNext}`}
                  onClick={() => {
                    setCurrentPhotoIndex((prev) => 
                      (prev + 1) % photos.length
                    );
                  }}
                  aria-label="Next photo"
                >
                  →
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}