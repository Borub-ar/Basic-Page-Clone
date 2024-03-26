import styles from './Home.module.css';

import FeaturedNews from './FeaturedNews';
import VideoSection from './VideoSection';
import Footer from '../../components/Footer/Footer';

const Home = () => {
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

export default Home;
