import { PumpCard } from 'src/entities/pump-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import cls from './pump-list.module.scss';


const PumpList = (): React.ReactNode => {
  return (
    <section className={cls.pump_list}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={true}
        spaceBetween={5}
        slidesPerView={3}
        loop={true}

      >
        <SwiperSlide>
          <PumpCard
            img={'img/content/a10vso.jpg'}
            img2x={'img/content/a10vso@2x.jpg'}
            webp={'img/content/a10vso.webp'}
            webp2x={'img/content/a10vso@2x.webp'}
            title={'Гидронасосы серии Rexroth a10VSO'}
            desc={'гидропривод навески сельскозяйственной и строительной техники'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PumpCard
            img={'img/content/a10vso.jpg'}
            img2x={'img/content/a10vso@2x.jpg'}
            webp={'img/content/a10vso.webp'}
            webp2x={'img/content/a10vso@2x.webp'}
            title={'Гидронасосы серии Rexroth a10VSO'}
            desc={'гидропривод навески сельскозяйственной и строительной техники'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PumpCard
            img={'img/content/a10vso.jpg'}
            img2x={'img/content/a10vso@2x.jpg'}
            webp={'img/content/a10vso.webp'}
            webp2x={'img/content/a10vso@2x.webp'}
            title={'Гидронасосы серии Rexroth a10VSO'}
            desc={'гидропривод навески сельскозяйственной и строительной техники'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PumpCard
            img={'img/content/a10vso.jpg'}
            img2x={'img/content/a10vso@2x.jpg'}
            webp={'img/content/a10vso.webp'}
            webp2x={'img/content/a10vso@2x.webp'}
            title={'Гидронасосы серии Rexroth a10VSO'}
            desc={'гидропривод навески сельскозяйственной и строительной техники'}
          />
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default PumpList;


{/* <PumpCard
img={'img/content/a10vso.jpg'}
img2x={'img/content/a10vso@2x.jpg'}
webp={'img/content/a10vso.webp'}
webp2x={'img/content/a10vso@2x.webp'}
title={'Гидронасосы серии Rexroth a10VSO'}
desc={'гидропривод навески сельскозяйственной и строительной техники'}
/> */}
