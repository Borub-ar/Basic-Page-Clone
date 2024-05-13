import styles from './Hero.module.css';

const VIDEO_URL = 'https://cdn.sanity.io/files/8nn8fua5/production/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <video preload='metadata' autoPlay loop muted>
        <source src={VIDEO_URL} type='video/mp4' />
      </video>
    </section>
  );
};

export default Hero;
