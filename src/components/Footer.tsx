import { useState } from 'react';
import BasicDebtLogo from '../svg/BasicDebtLogo';
import styles from './Footer.module.css';

const Footer = () => {
  const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>(false);

  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowSuccessMsg(true);
  };

  return (
    <footer className={styles.footer}>
      <BasicDebtLogo height='16' width='50' color='#fff' viewBox='0 0 307 100' />

      <h2 className={styles.information}>
        We collaborate with ambitious brands and people. Let's build.{' '}
        <a href='mailto: biz@basicagency.com'>biz@basicagency.com</a>
      </h2>

      <form onSubmit={handleEmailSubmit}>
        <h3>Stay in the know</h3>

        <div className={styles.inputWrapper}>
          <label htmlFor='email-input'>Enter your email to subscribe</label>
          <input id='email-input' type='email' placeholder='Email Address' />
          {showSuccessMsg && <p>Thank you for signing up!</p>}
        </div>
      </form>
    </footer>
  );
};

export default Footer;
