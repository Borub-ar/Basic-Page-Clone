import styles from './NewsTile.module.css';

const NewsTile = () => {
  return (
    <a href='#'>
      <article>
        <div className={styles.imgWrapper}>
          <img
            src='https://cdn.sanity.io/images/8nn8fua5/production/8d1b579ad65366a487e57e88035fbd660124ee38-870x544.png?w=720&fm=webp&q=65'
            alt=''
          />
        </div>

        <div className={styles.textPanel}>
          <h4>Breaking THRUOGHT THE BRANDUND BLAHS</h4>
          <div>Arrow</div>
          <p>PRESS 5.15.23</p>
        </div>
      </article>
    </a>
  );
};

export default NewsTile;
