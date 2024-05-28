import styles from './ImagesSection.module.css';

import ImageTile from './ImageTile';
import CONTENT from '../../content/Home/ImageSection.json';

const ImagesSection = () => {
  const content = CONTENT.content;

  const tiles = content.map(tile => (
    <ImageTile
      key={tile.id}
      imageSrc={tile.image || ''}
      imageAlt={tile.imageAlt || ''}
      title={tile.title}
      description={tile.description}
      videoSrc={tile.videoSrc}
    />
  ));

  return <section className={styles.wrapper}>{tiles}</section>;
};

export default ImagesSection;
