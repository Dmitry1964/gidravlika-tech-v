import cls from './services.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Services = () => {
  return (
    <section className={cls.services}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        speed={2000}
      >
        <SwiperSlide>
          <div className={cls.services__slide}>
            <picture>
              <source type='image/webp' srcSet='img/content/rvd.webp , img/content/rvd@2x.webp 2x' />
              <img src="img/content/rvd.jpeg" srcSet='img/content/rvd@2x.jpeg 2x' width={635} height={600} alt="Диагностика" />
            </picture>
          </div>
          {/* <img src="img/content/diag.jpeg" width={634} height={600} alt="Диагностика" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className={cls.services__slide}>
            <picture>
              <source type='image/webp' srcSet='img/content/diag.webp , img/content/diag@2x.webp 2x' />
              <img src="img/content/diag.jpeg" srcSet='img/content/diag@2x.jpeg 2x' width={635} height={600} alt="Диагностика" />
            </picture>
          </div>
          {/* <img src="img/content/diag.jpeg" width={634} height={600} alt="Диагностика" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className={cls.services__slide}>
            <picture>
              <source type='image/webp' srcSet='img/content/remont-hidr.webp , img/content/remont-hidr@2x.webp 2x' />
              <img src="img/content/remont-hidr.jpeg" srcSet='img/content/remont-hidr@2x.jpeg 2x' width={635} height={600} alt="Диагностика" />
            </picture>
          </div>
          {/* <img src="img/content/diag.jpeg" width={634} height={600} alt="Диагностика" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className={cls.services__slide}>
            <picture>
              <source type='image/webp' srcSet='img/content/remont-obor.webp , img/content/remont-obor@2x.webp 2x' />
              <img src="img/content/remont-obor.jpeg" srcSet='img/content/remont-obor@2x.jpeg 2x' width={635} height={600} alt="Диагностика" />
            </picture>
          </div>
          {/* <img src="img/content/diag.jpeg" width={634} height={600} alt="Диагностика" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className={cls.services__slide}>
            <picture>
              <source type='image/webp' srcSet='img/content/remont.webp , img/content/remont@2x.webp 2x' />
              <img src="img/content/remont.jpeg" srcSet='img/content/remont@2x.jpeg 2x' width={635} height={600} alt="Диагностика" />
            </picture>
          </div>
          {/* <img src="img/content/diag.jpeg" width={634} height={600} alt="Диагностика" /> */}
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Services;
