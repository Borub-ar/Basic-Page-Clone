import styles from './HoverButton.module.css';

type HoverButtonProps = {
  children: React.ReactNode;
};

const HoverButton = ({ children }: HoverButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};

export default HoverButton;
