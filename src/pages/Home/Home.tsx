import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';
import FeaturedNews from './FeaturedNews';

const Home = () => {
  return (
    <main className={styles.homeWrapper}>
      <FeaturedNews />
      <Footer />
    </main>
  );
};

export default Home;
