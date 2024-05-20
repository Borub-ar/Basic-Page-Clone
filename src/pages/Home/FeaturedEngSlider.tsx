import styles from './FeaturedEngSlider.module.css';

import SliderItem from './SliderItem';

const FeaturedEngSlider = () => {
  return (
    <section className={styles.sliderWrapper}>
      <h2 className='section_header--2'>Featured Engagements</h2>

      <div className={styles.slider}>
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </div>
    </section>
  );
};

export default FeaturedEngSlider;
