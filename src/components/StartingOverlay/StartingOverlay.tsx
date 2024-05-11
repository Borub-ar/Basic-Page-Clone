import styles from './StartingOverlay.module.css';

const StartingOverlay = () => {
  return (
    <div className={styles.overlay} role='dialog'>
      <p>BASIC</p>
      <p>
        /DEBT<sub>®</sub>
      </p>
    </div>
  );
};

export default StartingOverlay;
