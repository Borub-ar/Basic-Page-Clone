import styles from './FooterNavigation.module.css';

type FooterNavigationProps = {
  header: string;
  links: string[];
};

const FooterNavigation = ({ header, links }: FooterNavigationProps) => {
  const linksElements = links.map(link => (
    <li key={crypto.randomUUID()} className={styles.links}>
      {link}
    </li>
  ));

  return (
    <nav aria-labelledby='navigationHeader'>
      <h3 className={styles.header} id='navigationHeader'>
        {header}
      </h3>
      <ul className={styles.navigation}>{linksElements}</ul>
    </nav>
  );
};

export default FooterNavigation;
