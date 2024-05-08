import { useEffect, useRef, useContext } from 'react';
import PortalContext from '../../store/portal-context';
import styles from './VideoSection.module.css';
import HoverButton from '../../components/Buttons/HoverLinkButton';

const VideoSection = () => {
  const sectionRef = useRef(null);
  const portalContext = useContext(PortalContext);

  useEffect(() => {
    const options = {
      root: document.querySelector('#scrollArea'),
      rootMargin: '100px',
      threshold: 0.9,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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
  }, [portalContext]);

  return (
    <section className={styles.wrapper} ref={sectionRef}>
      <div className={styles.videoPlaceholder}></div>

      <div className={styles.textWrapper}>
        <h2 className={styles.header}>BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE</h2>
        <p>
          ADWEEK <span>AGENCY SPOTLIGHT</span>
        </p>
        <HoverButton href='#'>ABOUT US</HoverButton>
      </div>
    </section>
  );
};

export default VideoSection;
