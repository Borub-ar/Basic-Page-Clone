import styles from './HoverButton.module.css';

type HoverButtonProps = {
  href: string;
  children: React.ReactNode;
};

const HoverButton = ({ href, children }: HoverButtonProps) => {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  );
};

export default HoverButton;
