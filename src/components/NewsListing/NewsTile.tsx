import styles from './NewsTile.module.css';
import RightArrow from '../Svg/RightArrow';

type NewsTileProps = {
  tileData: {
    title: string;
    image: string;
    imageAlt: string;
    pressNumber: string;
    link: string;
  };
};

const NewsTile = ({ tileData }: NewsTileProps) => {
  return (
    <a href='#'>
      <article>
        <div className={styles.imgWrapper}>
          <img src={tileData.image} alt={tileData.imageAlt} />
        </div>

        <div className={styles.textPanel}>
          <h4>{tileData.title}</h4>

          <div className={styles.arrowWrapper}>
            <RightArrow width='50' height='50' viewBox='0 0 30 30' color='#000' />
          </div>

          <p>PRESS {tileData.pressNumber}</p>
        </div>
      </article>
    </a>
  );
};

export default NewsTile;
