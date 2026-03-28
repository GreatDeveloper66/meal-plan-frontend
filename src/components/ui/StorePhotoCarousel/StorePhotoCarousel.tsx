import { useState } from "react";
import styles from "./StorePhotoCarousel.module.css";
import Carousel from "../../ui/Carousel/Carousel";

type StorePhotoCarouselProps = {
  photos: string[];
  storeName: string;
};

export default function StorePhotoCarousel({ 
  photos, 
  storeName 
}: StorePhotoCarouselProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  if (!photos || photos.length === 0) {
    return (
      <div className={styles.placeholder}>
        <span>📷</span>
        <p>No photos available</p>
      </div>
    );
  }

  // Handle when slide changes in the carousel
  const handleSlideChange = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  // Create an array of photo elements for the carousel
  const photoSlides = photos.map((photo, index) => (
    <div 
      key={index} 
      className={styles.photoSlide}
      onClick={() => setIsModalOpen(true)}
    >
      <img 
        src={photo} 
        alt={`${storeName} - photo ${index + 1}`}
        className={styles.photoImage}
      />
    </div>
  ));

  return (
    <>
      <div className={styles.carouselWrapper}>
        <Carousel
          showNavigation={photos.length > 1}
          showDots={photos.length > 1}
          showCounter={false}
          wrapAround={true}
          onSlideChange={handleSlideChange}
        >
          {photoSlides}
        </Carousel>
        
        {/* Photo counter indicator */}
        {photos.length > 1 && (
          <div className={styles.photoCounter}>
            {currentPhotoIndex + 1} / {photos.length}
          </div>
        )}
      </div>

      {/* Modal for full-size image */}
      {isModalOpen && (
        <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[currentPhotoIndex]}
              alt={`${storeName} - full size`}
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