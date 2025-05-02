import { Link } from 'react-router-dom';
import cls from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <div className="container">
        <ul className={cls.navbar__list}>
          <li className={cls.navbar__item}>
            <Link className={cls.navbar__link} to="#">
              Главная
            </Link>
          </li>
          <li className={cls.navbar__item}>
            <Link className={cls.navbar__link} to="#">
              О нас
            </Link>
          </li>
          <li className={cls.navbar__item}>
            <Link className={cls.navbar__link} to="#">
              Услуги
            </Link>
          </li>
          <li className={cls.navbar__item}>
            <Link className={cls.navbar__link} to="#">
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
