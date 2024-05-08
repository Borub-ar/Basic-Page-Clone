import News from '../../content/Home/FeaturedNews.json';
import styles from './FeaturedNews.module.css';

import NewsListing from '../../components/NewsListing/NewsListing';
import HoverButton from '../../components/Buttons/HoverLinkButton';

const FeaturedNews = () => {
  const newsContent = News.content;

  return (
    <section>
      <div className={styles.headerWrapper}>
        <h2 className='section_header--2'>FEATURED NEWS</h2>
        <HoverButton href='#'>VIEW ALL</HoverButton>
      </div>
      <NewsListing content={newsContent} />
    </section>
  );
};

export default FeaturedNews;
