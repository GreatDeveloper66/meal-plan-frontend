import styles from "./TestPhotoCarousel.module.css";
import PhotoCarousel from "../../components/ui/PhotoCarousel/PhotoCarousel";
import Card from "../../components/ui/Card/Card";

// Test photos from various sources
const testPhotos = [
  "https://picsum.photos/id/1015/800/600",  // Mountain landscape
  "https://picsum.photos/id/104/800/600",  // Dog
  "https://picsum.photos/id/169/800/600",  // Sun rising over lake
  "https://picsum.photos/id/155/800/600",  // Sailing ship
  "https://picsum.photos/id/20/800/600",   // Coffee
];

const singlePhoto = [
  "https://picsum.photos/id/10/800/600",   // Nature landscape
];

const noPhotos: string[] = [];

export default function TestPhotoCarousel() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Photo Carousel Component Test</h1>
        <p className={styles.description}>
          Testing the generic PhotoCarousel component - counter should appear BELOW the navigation arrows (same as WelcomeCarousel)
        </p>
        
        {/* Test 1: Multiple Photos */}
        <div className={styles.testSection}>
          <h2>Test 1: Multiple Photos (5 images)</h2>
          <p>Counter should be below navigation arrows, not as an overlay</p>
          <Card title="Mountain Adventure">
            <PhotoCarousel 
              photos={testPhotos} 
              altText="Scenic views"
              showCounter={true}
              showNavigation={true}
              showDots={true}
              enableModal={true}
            />
          </Card>
        </div>

        {/* Test 2: Single Photo */}
        <div className={styles.testSection}>
          <h2>Test 2: Single Photo</h2>
          <p>Should show just the image without any navigation elements</p>
          <Card title="Nature Scene">
            <PhotoCarousel 
              photos={singlePhoto} 
              altText="Nature landscape"
              showCounter={true}
              enableModal={true}
            />
          </Card>
        </div>

        {/* Test 3: No Photos */}
        <div className={styles.testSection}>
          <h2>Test 3: No Photos</h2>
          <p>Should show placeholder with message</p>
          <Card title="No Images Available">
            <PhotoCarousel 
              photos={noPhotos} 
              altText="Empty gallery"
            />
          </Card>
        </div>

        {/* Test Instructions */}
        <div className={styles.info}>
          <h3>✓ Layout Verification:</h3>
          <ul>
            <li>Photo counter (1/5) should appear BELOW the navigation arrows</li>
            <li>Navigation arrows should be above the counter (same as WelcomeCarousel)</li>
            <li>Dots should appear above or below navigation? (WelcomeCarousel has them above)</li>
            <li>The layout should match the generic Carousel component exactly</li>
          </ul>
          
          <h3>✓ Functionality Tests:</h3>
          <ul>
            <li>Click arrows to navigate through photos</li>
            <li>Click dots to jump to specific photos</li>
            <li>Click image to open modal</li>
            <li>Modal navigation should work with arrows</li>
            <li>Close modal with X or clicking outside</li>
          </ul>
        </div>
      </div>
    </div>
  );
}