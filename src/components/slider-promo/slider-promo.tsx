import 'swiper/css/bundle';
import './slider-promo-style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCatalog } from '../../hooks/use-catalog';
import { Autoplay, Pagination } from 'swiper/modules';
import Banner from '../banner/banner';

function SliderPromo(): JSX.Element {

  const { promo: slides } = useCatalog();

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      loop={Boolean(slides.length)}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true }}
    >
      {slides.map((slideItem) => (
        <SwiperSlide key={slideItem.id}>
          <Banner promoItem={slideItem} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderPromo;
