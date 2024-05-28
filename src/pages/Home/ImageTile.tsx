import styles from './ImageTile.module.css';

type ImageTileProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

const ImageTile = ({ imageSrc, imageAlt, title, description }: ImageTileProps) => {
  return (
    <article className={styles.wrapper}>
      <div>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default ImageTile;
