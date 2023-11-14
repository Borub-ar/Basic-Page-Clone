import styles from './FeaturedNews.module.css';

import NewsListing from '../../components/NewsListing/NewsListing';

const FeaturedNews = () => {
  return (
    <section className={styles.newsWrapper}>
      <div className={styles.headerWrapper}>
        <h2>FEATURED NEWS</h2>
        <a href='#'>VIEW ALL</a>
      </div>
      <NewsListing />
    </section>
  );
};

export default FeaturedNews;
