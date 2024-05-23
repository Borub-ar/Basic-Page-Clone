import styles from './Index.module.css';

import FeaturedNews from './FeaturedNews';
import VideoSection from './VideoSection';
import Footer from '../../components/Footer/Footer';
import Hero from './Hero';
import CursorOvertake from '../../components/CursorOvertake/CursorOvertake';
// import FeaturedEngSlider from './FeaturedEngSlider';
// import SponsorsSection from './SponsorsSection';
import ImagesSection from './imagesSection';

export const Home = () => {
  return (
    <div className={styles['home-wrapper']}>
      <div className={styles['inner_noise_wrapper']}>
        {/* <CursorOvertake followerText='Watch Reel' subtext='BASIC/DEPT® 2010-∞'>
          <Hero />
        </CursorOvertake> */}
        {/* <SponsorsSection /> */}
        <ImagesSection />
        {/* <FeaturedEngSlider /> */}
        {/* <VideoSection /> */}
        <FeaturedNews />
      </div>
      <Footer />
    </div>
  );
};
