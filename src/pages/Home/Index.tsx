import styles from './Index.module.css';

import FeaturedNews from './FeaturedNews';
import VideoSection from './VideoSection';
import Footer from '../../components/Footer/Footer';
import FeaturedEngSlider from './FeaturedEngSlider';

export const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.innerWrapper}>
        <FeaturedEngSlider />
        <VideoSection />
        <FeaturedNews />
      </div>
      <Footer />
    </div>
  );
};
