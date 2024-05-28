import styles from './ImageTile.module.css';

type ImageTileProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  videoSrc?: string;
};

const ImageTile = ({ imageSrc, imageAlt, title, description, videoSrc }: ImageTileProps) => {
  return (
    <article className={styles.wrapper}>
      <div>
        {!videoSrc && <img src={imageSrc} alt={imageAlt} />}
        {videoSrc && (
          <video preload='metadata' autoPlay loop muted>
            <source src={videoSrc} type='video/mp4' />
          </video>
        )}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default ImageTile;
