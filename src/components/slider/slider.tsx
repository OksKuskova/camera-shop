import 'swiper/css/bundle';
import './swiper-style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getPromo } from '../../mocks/promo';
import { swiperConfig } from './swiper-config';
import Banner from '../banner/banner';

function Slider(): JSX.Element {
  const promo = getPromo();

  return (
    <Swiper {...swiperConfig}>
      {promo.map((promoItem) => (
        <SwiperSlide key={promoItem.id}>
          <Banner promoItem={promoItem}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
