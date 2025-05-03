import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './services.scss';
import { UnitCard } from 'src/entities/unit-card';

const CilinderList = () => {
  return (
    <section className='services'>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={5}
        slidesPerView={3}
        loop={true}
        navigation={true}
        pagination={true}
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
            slidesPerView: 3
          }

        }}
        // autoplay={{
        //   delay: 0,
        //   pauseOnMouseEnter: true,
        //   disableOnInteraction: false,
        // }}
        // speed={3000}
      >
        <SwiperSlide>
          <UnitCard
            img="img/content/dump-track.jpg"
            img2x="img/content/dump-track2x.jpg"
            webp="img/content/dump-track.webp"
            webp2x="img/content/dump-track2x.webp"
            title="Телескопические цилиндры"
            list={['цилиндры самосвалов', 'цилиндры зерновозов', 'цилиндры сельхозтележек']}
          />
        </SwiperSlide>
        <SwiperSlide>
          <UnitCard
            img="img/content/remont-hidr.jpg"
            img2x="img/content/remont-hidr2x.jpg"
            webp="img/content/remont-hidr.webp"
            webp2x="img/content/remont-hidr2x.webp"
            title="Ремонт оборудования"
            list={['hfp', 'gfdfdfd', 'wueweuwuewewu']}
          />
        </SwiperSlide>
        <SwiperSlide>
          <UnitCard
            img="img/content/krane.png"
            img2x="img/content/krane2x.png"
            webp="img/content/krane.webp"
            webp2x="img/content/krane2x.webp"
            title="Ремонт спецтехники"
            list={['hfp', 'gfdfdfd', 'wueweuwuewewu']}
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <UnitCard
            img="img/content/rvd.jpg"
            img2x="img/content/rvd2x.jpg"
            webp="img/content/rvd.webp"
            webp2x="img/content/rvd2x.webp"
            title="Изготовление РВД"
          />
        </SwiperSlide>
        <SwiperSlide>
          <UnitCard
            img="img/content/shtock.jpg"
            img2x="img/content/shtock2x.jpg"
            webp="img/content/shtock.webp"
            webp2x="img/content/shtock2x.webp"
            title="Штоки и гильзы"
          />
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default CilinderList;

