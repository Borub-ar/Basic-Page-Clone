import styles from './Index.module.css';

import FeaturedNews from './FeaturedNews';
import VideoSection from './VideoSection';
import Footer from '../../components/Footer/Footer';

export const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.innerWrapper}>
        <VideoSection />
        <FeaturedNews />
      </div>
      <Footer />
    </div>
  );
};
