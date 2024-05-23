import styles from './ImagesSection.module.css';

import ImageTile from './ImageTile';

const ImagesSection = () => {
  const src =
    'https://cdn.sanity.io/images/8nn8fua5/production/931c4de4f3cbbeb30a5b65677a174f2980e44805-720x900.jpg?w=1024&fm=webp&q=65';

  return (
    <section className={styles.wrapper}>
      <ImageTile
        imageSrc={src}
        imageAlt='TEST'
        title='Patagonia'
        description='An eCommerce experience driven by Patagonia’s brand mission'
      />
      <ImageTile
        imageSrc={src}
        imageAlt='TEST'
        title='Patagonia'
        description='An eCommerce experience driven by Patagonia’s brand mission'
      />
      <ImageTile
        imageSrc={src}
        imageAlt='TEST'
        title='Patagonia'
        description='An eCommerce experience driven by Patagonia’s brand mission'
      />
    </section>
  );
};

export default ImagesSection;
