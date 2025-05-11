import { PumpCard } from 'src/entities/pump-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import cls from './box-list.module.scss';

const BoxList = (): React.ReactNode => {
  return (
    <section className={cls.box_list}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={true}
        spaceBetween={3}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.5,
          },

          1280: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <PumpCard
            img={'img/content/P160.jpg'}
            img2x={'img/content/P160@2x.jpg'}
            webp={'img/content/P160.webp'}
            webp2x={'img/content/P160@2x.webp'}
            title={'Гидрораспределители Р-160'}
            desc={
              'Гидропривод навески сельскозяйственной техники, трктора Кировец'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <PumpCard
            img={'img/content/P80.jpg'}
            img2x={'img/content/P80@2x.jpg'}
            webp={'img/content/P80.webp'}
            webp2x={'img/content/P80@2x.webp'}
            title={'Гидрораспределители Р-80'}
            desc={
              'Гидропривод навески трктора МТЗ, бурильных машин'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <PumpCard
            img={'img/content/P100.jpg'}
            img2x={'img/content/P100@2x.jpg'}
            webp={'img/content/P100.webp'}
            webp2x={'img/content/P100@2x.webp'}
            title={'Гидрораспределители Р-100 / P-200'}
            desc={'Гидропривод экскаваторов-погрузчиков на базе трактора МТЗ'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PumpCard
            img={'img/content/RP70.jpg'}
            img2x={'img/content/RP70@2x.jpg'}
            webp={'img/content/RP70.webp'}
            webp2x={'img/content/RP70@2x.webp'}
            title={'Гидрораспределители РП-70'}
            desc={
              'Гидропривод навески трктора МТЗ'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <PumpCard
            img={'img/content/bosh.jpg'}
            img2x={'img/content/bosh@2x.jpg'}
            webp={'img/content/bosh.webp'}
            webp2x={'img/content/bosh@2x.webp'}
            title={'Гидрораспределители Bosch Rexroth'}
            desc={
              'Гидропривод навески сельскозяйственной техники, трктора Кировец'
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <PumpCard
            img={'img/content/box-krane.jpg'}
            img2x={'img/content/box-krane@2x.jpg'}
            webp={'img/content/box-krane.webp'}
            webp2x={'img/content/box-krane@2x.webp'}
            title={'Гидрораспределители автокранов'}
            desc={
              'Гидрораспределитель осноных операций автокрана'
            }
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BoxList;
