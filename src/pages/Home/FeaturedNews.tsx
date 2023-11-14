import styles from './FeaturedNews.module.css';

import NewsListing from '../../components/NewsListing/NewsListing';

const FeaturedNews = () => {
  return (
    <section className={styles.newsWrapper}>
      <h2>Featured News</h2>
      <NewsListing />
    </section>
  );
};

export default FeaturedNews;
