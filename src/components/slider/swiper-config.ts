import { Pagination, Autoplay } from 'swiper/modules';

export const swiperConfig = {
  modules: [Pagination, Autoplay],
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true },
};
