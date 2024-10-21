/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
// import 'swiper/css/bundle';
// import './slider-similar-style.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { getProductsSimilar } from '../../mocks/products-similar';
// import ProductCard from '../product-card/product-card';
// import { Navigation } from 'swiper/modules';
// import { Swiper as SwiperType } from 'swiper';
// import { useRef } from 'react';

// function SliderProductSimilar(): JSX.Element {

//   const swiperRef = useRef<SwiperType>();

//   const slides = getProductsSimilar();

//   return (
//     <Swiper
//         modules={[Navigation]}
//         slidesPerView={3}
//         onBeforeInit={(swiper) => {
//           swiperRef.current = swiper;
//         }}
//         className='product-similar__slider'
//         allowTouchMove
//     >
//       {slides.map((slideItem) => (
//         <SwiperSlide key={slideItem.id} style={{ maxWidth: '280px' }}>
//           <div className="slides-container">
//             <ProductCard product={slideItem} />
//           </div>
//         </SwiperSlide>
//       ))}

//       <button className="slider-nav slider-nav--prev" type="button" aria-label="Предыдущий слайд" style={{ zIndex: 1 }} onClick={() => swiperRef.current?.slidePrev()}>
//         <svg width="7" height="12" aria-hidden="true">
//           <use xlinkHref="#icon-arrow"></use>
//         </svg>
//       </button>
//       <button className="slider-nav slider-nav--next" type="button" aria-label="Следующий слайд" style={{ zIndex: 1 }} onClick={() => swiperRef.current?.slideNext()}>
//         <svg width="7" height="12" aria-hidden="true">
//           <use xlinkHref="#icon-arrow"></use>
//         </svg>
//       </button>
//     </Swiper>
//   );

// }

// export default SliderProductSimilar;
