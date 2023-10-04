import { useState } from 'react';
import styles from './Footer.module.css';

import BasicDebtLogo from '../svg/BasicDebtLogo';
import RightArrow from '../svg/RightArrow';
import FooterNavigation from './FooterNavigation';

const SOCIAL_LINKS = [];
const INITIATIVES_LINKS = [];
const OFFICES_LINKS = [];

const Footer = () => {
  const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>(false);

  const arrowSVGStyles: object = {
    position: 'absolute',
    right: '0',
  };

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
        <h3 className={styles.subheader}>Stay in the know</h3>

        <div className={styles.inputWrapper}>
          <label htmlFor='email-input'>Enter your email to subscribe</label>
          <input id='email-input' type='email' placeholder='Email Address' />
          {showSuccessMsg && <p>Thank you for signing up!</p>}
          <RightArrow height='17' width='17' viewBox='0 0 17' color='#fff' styles={arrowSVGStyles} />
        </div>
      </form>

      <FooterNavigation header='SOCIAL' />
      <FooterNavigation header='INITIATIVES' />
      <FooterNavigation header='OFFICES' />

      <div className={styles.websiteTerms}>
        <p>BASIC/DEPT®, Inc 10 - 23©</p>
        <p>Easy to understand, impossible to ignore.™</p>
        <nav>
          <span>TERMS,</span> <span>PRIVACY POLICY</span>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
