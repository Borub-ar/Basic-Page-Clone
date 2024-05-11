import { useEffect, useRef, useContext } from 'react';
import PortalContext from '../../store/portal-context';
import styles from './VideoSection.module.css';

import HoverButton from '../../components/Buttons/HoverButton';

const VideoSection = () => {
  const sectionRef = useRef<HTMLTableSectionElement>(null);
  const portalContext = useContext(PortalContext);

  useEffect(() => {
    const options = {
      root: document.querySelector('#scrollArea'),
      rootMargin: '100px',
      threshold: 0.7,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        portalContext.changePageTheme(entry.isIntersecting);
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
      <video preload='metadata' autoPlay loop muted>
        <source
          src='https://cdn.sanity.io/files/8nn8fua5/production/e4a840ba8dfeded08ac4d0ba6e930be56fc68e3b.mp4'
          type='video/mp4'
        />
      </video>

      {/* Empty div serves as wrapper for sticky element */}
      <div>
        <div className={styles.textWrapper}>
          <h2 className={styles.header}>BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE</h2>
          <p>
            ADWEEK <span>AGENCY SPOTLIGHT</span>
          </p>
          <HoverButton href='#'>ABOUT US</HoverButton>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
