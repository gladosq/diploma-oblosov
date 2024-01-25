import s from './Banner.module.scss';
import 'swiper/css';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCreative, Navigation, Pagination, Autoplay} from 'swiper/modules';

import image3 from './../../../public/images/car3.jpg';
import image1 from './../../../public/images/car1.jpg';
import image2 from './../../../public/images/car2.jpg';
import image4 from './../../../public/images/car4.jpg';
import {useRef} from 'react';

export default function Banner() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current?.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className={s.wrapper}>

      <div className={s.outerWrapper}>
        <Swiper
          className={s.swiperWrapper}
          modules={[Navigation, Pagination, EffectCreative, Autoplay]}
          spaceBetween={0}
          centeredSlides={true}
          slideActiveClass={s.activeSlide}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          pagination={{
            type: 'fraction',
            el: `.${s.pagination}`
          }}
          navigation={{
            disabledClass: `${s.arrowDisabled}`,
            prevEl: `.${s.arrowPrev}`,
            nextEl: `.${s.arrowNext}`,
          }}
          wrapperClass={s.swiperInner}
        >
          <SwiperSlide className={s.slide}>
            <h1 className={s.title}>Выгодные условия для покупки автомобиля с НДС для юридических лиц</h1>
            <div className={s.imageWrapper} >
              <img className={s.image} src={image3} alt=""/>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <h1 className={s.title}>Любой новый авто из Китая!</h1>
            <div className={s.imageWrapper} >
              <img className={s.image} src={image2} alt=""/>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <h1 className={s.title}>Новые авто</h1>
            <div className={s.imageWrapper} >
              <img className={s.image} src={image1} alt=""/>
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <div className={s.imageWrapper} >
              <img className={s.image} src={image4} alt=""/>
            </div>
          </SwiperSlide>
          <div className={s.navigation}>
            <div className={s.pagination}></div>
            <div className={s.arrowPrev}>&lt;</div>
            <div className={s.arrowNext}>&gt;</div>
            <div className={s.autoplayProgress} slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
