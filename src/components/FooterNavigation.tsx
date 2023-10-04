import styles from './FooterNavigation.module.css';

const FooterNavigation = props => {
  //   const links = props.linksList.map(link => (
  //     <li>
  //       <a>{link.label}</a>
  //     </li>
  //   ));

  return (
    <nav aria-labelledby='navigationHeader'>
      <h3 className={styles.header} id='navigationHeader'>
        {props.header}
      </h3>
      {/* <ul>{links}</ul> */}
    </nav>
  );
};

export default FooterNavigation;
