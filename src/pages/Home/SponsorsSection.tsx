import styles from './SponsorsSection.module.css';

import AdAgeLogo from '../../components/Svg/AdAgeLogo';
import CampaignLogo from '../../components/Svg/CampaignLogo';
import TheWebbyAwardsLogo from '../../components/Svg/TheWebbyAwardsLogo';

const SponsorsSection = () => {
  return (
    <section className={styles.wrapper}>
      <a href='#'>
        <AdAgeLogo width='40px' color='#252422' />
        <p>DESIGN AND BRANDING AGENCY OF THE YEAR</p>
      </a>
      <a href='#'>
        <TheWebbyAwardsLogo width='40px' color='#252422' />
        <p>AGENCY OF THE YEAR</p>
      </a>
      <a href='#'>
        <CampaignLogo width='100px' height='auto' viewBox='0 0 100 100' color='#252422' />
        <p> INNOVATION AGENCY OF THE YEAR FINALIST</p>
      </a>
    </section>
  );
};

export default SponsorsSection;
