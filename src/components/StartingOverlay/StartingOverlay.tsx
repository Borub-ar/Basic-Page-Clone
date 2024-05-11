import styles from './StartingOverlay.module.css';

type StartingOverlayProps = {
  showOverlay: boolean;
};

const StartingOverlay = ({ showOverlay }: StartingOverlayProps) => {
  return (
    <div className={`${styles.overlay} ${showOverlay ? '' : styles.hide}`} role='dialog'>
      <div className={styles['text_wrapper']}>
        <p>BASIC</p>
        <p>
          /DEBT<sub>®</sub>
        </p>
      </div>
    </div>
  );
};

export default StartingOverlay;
