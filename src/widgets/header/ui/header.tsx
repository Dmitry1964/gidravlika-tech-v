import { HeaderContacts } from 'src/widgets/header-contacts';
import cls from './header.module.scss';
import { Navbar } from 'src/entities/navbar';
import { useScreenWidth } from 'src/lib/hooks';
import {useLocation} from 'react-router';
import { classNames } from 'src/shared/lib/class-names/class-names';
import { AppRoutes } from 'src/app/routes/routes';

const Header = (): React.ReactNode => {
  const screenWidth = useScreenWidth();
  const {pathname} = useLocation();

  return (
    <header className={cls.header}>
      <div className={cls.header__wrapper}>
        {screenWidth < 768 && (
          <div className={classNames(cls.header__banner_mobile, [], {[cls.header__nonmain] : pathname !== AppRoutes.Main})}>
            <picture>
              <source
                type="image/webp"
                srcSet="img/content/banner-mobile.webp, img/content/banner-mobile@2x.webp 2x"
              />
              <img
                className={cls.header__banner_img_mobile}
                src="img/content/banner-mobile.jpg"
                srcSet="img/content/banner-mobile@2x.jpg 2x"
                width="320"
                height="569"
                alt="Баннер"
              />
            </picture>
          </div>
        )}
        {screenWidth >= 768 && (
          <div className={classNames(cls.header__banner, [], {[cls.header__nonmain] : pathname !== AppRoutes.Main})}>
            <picture>
              <source
                type="image/webp"
                srcSet="img/content/banner-desktop.webp, img/content/banner-desktop@2x.webp 2x"
              />
              <img
                className={cls.header__banner_img}
                src="img/content/banner-desktop.jpg"
                srcSet="img/content/banner-desktop@2x.jpg 2x"
                width="1920"
                height="804"
                alt="Баннер"
              />
            </picture>
          </div>
        )}
        <div className={classNames(cls.header__content, [], {
          [cls.header__content_nonmain]: pathname !== AppRoutes.Main
        })}>
          <div className="container">
            <HeaderContacts />
          </div>
          <Navbar />
          <div className={classNames(cls.header__content_wrapper, [], {[cls.header__nonmain] : pathname !== AppRoutes.Main})}>
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
