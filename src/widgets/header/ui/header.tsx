import { HeaderContacts } from 'src/widgets/header-contacts';
import cls from './header.module.scss';
import { Navbar } from 'src/widgets/navbar';
import { useScreenWidth } from 'src/hooks/hooks';

const Header = (): React.ReactNode => {
  const screenWidth = useScreenWidth();

  return (
    <header className={cls.header}>
      <div className={cls.header__wrapper}>
        {screenWidth < 768 && (
          <div className={cls.header__banner_mobile}>
            <picture>
              <source
                type="image/webp"
                srcSet="img/content/banner-mobile.webp, img/content/banner-mobile@2x.webp 2x"
              />
              <img
                className={cls.header__banner_img_mobile}
                src="img/content/banner-mobile.jpeg"
                srcSet="img/content/banner-mobile@2x.jpeg 2x"
                width="320"
                height="569"
                alt="Баннер"
              />
            </picture>
          </div>
        )}
        {screenWidth >= 768 && (
          <div className={cls.header__banner}>
            <picture>
              <source
                type="image/webp"
                srcSet="img/content/banner-desktop.webp, img/content/banner-desktop@2x.webp 2x"
              />
              <img
                className={cls.header__banner_img}
                src="img/content/banner-desktop.jpeg"
                srcSet="img/content/banner-desktop@2x.jpeg 2x"
                width="1920"
                height="804"
                alt="Баннер"
              />
            </picture>
          </div>
        )}
        <div className={cls.header__content}>
          <div className="container">
            <HeaderContacts />
          </div>
          <Navbar />
          <div className={cls.header__content_wrapper}>
            <div className="container">
              <h2>ЭФФЕКТИВНЫЙ РЕМОНТ - НАШ ПРИОРИТЕТ</h2>
              <h1>РЕМОНТ ГИДРАВЛИЧЕСКОГО ОБОРУДОВАНИЯ</h1>
              <p>
                Наша компания уже более 25 лет занимается ремонтом
                гидравлического оборудования,
                <br />
                сервисом и ремонтом гидравлических систем специализированной
                техники.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
