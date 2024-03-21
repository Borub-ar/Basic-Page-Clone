import styles from './VideoSection.module.css';

const VideoSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.videoPlaceholder}></div>

      <div>
        <h2>BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE</h2>
        <p>ADWEEK AGENCY SPOTLIGHT</p>
        <button>ABOUT US</button>
      </div>
    </section>
  );
};

export default VideoSection;
