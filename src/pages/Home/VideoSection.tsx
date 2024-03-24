import { useEffect, useRef, useState } from 'react';
import styles from './VideoSection.module.css';

const VideoSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = () => {
      console.log('aaa');
    };

    const observer = new IntersectionObserver(callback, options);
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className={styles.wrapper} ref={sectionRef}>
      <div className={styles.videoPlaceholder}></div>

      <div className={styles.textWrapper}>
        <h2 className={styles.header}>BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE</h2>
        {/* <p>ADWEEK AGENCY SPOTLIGHT</p>
        <button>ABOUT US</button> */}
      </div>
    </section>
  );
};

export default VideoSection;
