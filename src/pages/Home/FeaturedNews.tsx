import content from '../../content/Home/FeaturedNews.json';
import styles from './FeaturedNews.module.css';

import NewsListing from '../../components/NewsListing/NewsListing';

const FeaturedNews = () => {
  const newsContent = content.content;
  console.log(newsContent);

  return (
    <section className={styles.newsWrapper}>
      <div className={styles.headerWrapper}>
        <h2>FEATURED NEWS</h2>
        <a href='#'>VIEW ALL</a>
      </div>
      <NewsListing content={newsContent} />
    </section>
  );
};

export default FeaturedNews;
