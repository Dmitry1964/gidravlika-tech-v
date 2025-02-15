import cls from './services.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import ServiceCard from 'src/widgets/service-card/ui/service-card';

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
          disableOnInteraction: false,
        }}
        speed={2000}
      >
        <SwiperSlide>
          <ServiceCard
            img="img/content/diag.jpeg"
            img2x="img/content/diag2x.jpeg"
            webp="img/content/diag.webp"
            webp2x="img/content/diag2x.webp"
            title="Диагностика"
            desc="диагностика гидравлической системы и гидравлического оборудования"
            url="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            img="img/content/remont-hidr.jpeg"
            img2x="img/content/remont-hidr2x.jpeg"
            webp="img/content/remont-hidr.webp"
            webp2x="img/content/remont-hidr2x.webp"
            title="Ремонт оборудования"
            desc="ремонт гидравлического оборудования"
            url="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            img="img/content/remont.jpeg"
            img2x="img/content/remont2x.jpeg"
            webp="img/content/remont.webp"
            webp2x="img/content/remont2x.webp"
            title="Ремонт спецтехники"
            desc='ремонт спецтехники - автокраны, АГП, манипуляторы'
            url="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            img="img/content/rvd.jpeg"
            img2x="img/content/rvd2x.jpeg"
            webp="img/content/rvd.webp"
            webp2x="img/content/rvd2x.webp"
            title="Изготовление РВД"
            desc="изготовление рукавов высокого давления"
            url="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard
            img="img/content/shtock.jpeg"
            img2x="img/content/shtock2x.jpeg"
            webp="img/content/shtock.webp"
            webp2x="img/content/shtock2x.webp"
            title="Штоки и гильзы"
            desc="изготовление штоков и гильз гидроцилиндров"
            url="#"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Services;
