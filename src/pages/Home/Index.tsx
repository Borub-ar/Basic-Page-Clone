import styles from './Index.module.css';

import FeaturedNews from './FeaturedNews';
import VideoSection from './VideoSection';
import Footer from '../../components/Footer/Footer';
// import FeaturedEngSlider from './FeaturedEngSlider';
import Hero from './Hero';
import CursorOvertake from '../../components/cursorOvertake/CursorOvertake';

export const Home = () => {
  return (
    <div className={styles['home-wrapper']}>
      <div className={styles['inner_noise_wrapper']}>
        <CursorOvertake>
          <Hero />
        </CursorOvertake>
        {/* <FeaturedEngSlider /> */}
        <VideoSection />
        <FeaturedNews />
      </div>
      <Footer />
    </div>
  );
};
