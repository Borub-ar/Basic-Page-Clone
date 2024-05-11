import { useState, useRef } from 'react';
import styles from './Footer.module.css';
import { emailValidationRegexp } from '../../constants/constants.js';

import BasicDebtLogo from '../Svg/BasicDebtLogo.js';
import RightArrow from '../Svg/RightArrow.js';
import FooterNavigation from './FooterNavigation.js';

const SOCIAL_LINKS = ['instagram', 'Twitter', 'LinkedIn', 'Facebook'];
const INITIATIVES_LINKS = ['Crafted', 'Applied', 'Brandbeats', 'Moves B®'];

const OFFICES_LINKS = [
  'San Diego - CA',
  'New York - NY',
  'Bay Area - CA',
  'St. Louis - MO',
  'Amsterdam - NL',
  'London - EN',
  'Berlin- GE',
  'Argentina - AR',
];

const Footer = () => {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);

  const validateEmail = () => {
    const regexp = emailInputRef.current?.value ? emailValidationRegexp.test(emailInputRef.current.value) : false;
    if (!regexp) setShowSuccessMsg(false);
    setInvalidEmail(!regexp);
    return regexp;
  };

  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailIsValid = validateEmail();
    if (emailIsValid) setShowSuccessMsg(true);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInnerWrapper}>
        <BasicDebtLogo height='16' width='50' color='#fff' viewBox='0 0 307 100' />

        <h2 className={styles.header}>
          We collaborate with ambitious brands and people. Let's build.{' '}
          <a href='mailto: biz@basicagency.com'>biz@basicagency.com</a>
        </h2>

        <form onSubmit={handleEmailSubmit} aria-label='Enter email to subscribe' autoComplete='off'>
          <h3 className={styles.subheader}>Stay in the know</h3>
          <div className={styles.inputWrapper}>
            <label htmlFor='email-input'>Enter your email to subscribe</label>

            <input
              id='email-input'
              type='text'
              placeholder='Email Address'
              ref={emailInputRef}
              onBlur={validateEmail}
              aria-invalid={invalidEmail}
              aria-describedby='email-validation-msg'
            />

            {showSuccessMsg && <p>Thank you for signing up!</p>}
            {invalidEmail && <p id='email-validation-msg'>Email is invalid</p>}

            <button className={styles.submitBtn} aria-label='Submit your email' type='submit'>
              <RightArrow height='17' width='17' viewBox='0 0 17 17' color='#fff' />
            </button>
          </div>
        </form>

        <div className={styles.navWrapper}>
          <FooterNavigation header='SOCIAL' links={SOCIAL_LINKS} />
          <FooterNavigation header='INITIATIVES' links={INITIATIVES_LINKS} />
          <FooterNavigation header='OFFICES' links={OFFICES_LINKS} />
        </div>
      </div>

      <div className={styles.websiteTerms}>
        <p>BASIC/DEPT®, Inc 10 - 23©</p>
        <p>Easy to understand, impossible to ignore.™</p>
        <nav aria-labelledby='website-terms-header'>
          <h3 id='website-terms-header' className={styles.visuallyHidden}></h3>
          <span>TERMS,</span> <span>PRIVACY POLICY</span>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
