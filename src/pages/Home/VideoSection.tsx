import { useEffect, useRef, useState, useContext } from 'react';
import PortalContext from '../../store/portal-context';
import styles from './VideoSection.module.css';

const VideoSection = () => {
  const sectionRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);
  const portalContext = useContext(PortalContext);

  useEffect(() => {
    const options = {
      root: document.querySelector('#scrollArea'),
      rootMargin: '100px',
      threshold: 0.4,
    };

    let firstCallImminent = true;

    const callback = (entries: IntersectionObserverEntry[]) => {
      if (!firstCallImminent) {
        return;
      } else {
        firstCallImminent = false;
      }

      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          portalContext.changePageTheme(true);
        } else {
          portalContext.changePageTheme(false);
        }
      });
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
