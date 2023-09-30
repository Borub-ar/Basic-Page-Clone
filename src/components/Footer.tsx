import BasicDebtLogo from '../svg/BasicDebtLogo';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <BasicDebtLogo height='16' width='50' color='#fff' viewBox='0 0 307 100' />

      <p>We collaborate with ambitious brands and people. Let's build.</p>
    </footer>
  );
};

export default Footer;
