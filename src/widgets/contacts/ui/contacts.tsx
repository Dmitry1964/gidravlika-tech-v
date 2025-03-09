import { ContactMap } from 'src/widgets/map';
import cls from './contacts.module.scss';

const Contacts = () => {

  return (
    <section className={cls.contacts}>
      <div className="container">
        <div className={cls.contacts__content}>
          <span>мы находимся</span>
          <h2>контакты</h2>
          <ul className={cls.contacts__list}>
            <li className={cls.contacts__item}>
              <img
                src="img/svg/icon-phone.svg"
                width={50}
                height={50}
                alt="Иконка телефона"
              />
              <div className={cls.contacts__item_links}>
                <a href="tel:+79610793209">
                  Ремонт спецтехники и служба сервиса
                  <br />
                  8-961-079-32-09
                </a>
                <a href="tel:+79608726622">
                  Ремонт гидрооборудования 8-960-872-66-22
                </a>
              </div>
            </li>
            <li className={cls.contacts__item}>
              <div className={cls.contacts__item_links}>
                <a href="mailto:gidravlika-m@mail.ru">
                  <img
                    src="img/svg/icon-mail.svg"
                    width={50}
                    height={50}
                    alt="Иконка электронная почта"
                  />
                  <span>gidravlika-m@mail.ru</span>
                </a>
              </div>
            </li>
            <li className={cls.contacts__item}>
              <img
                src="img/svg/icon-point.svg"
                width={50}
                height={50}
                alt="Иконка точка на карте"
              />
              <div className={cls.contacts__item_links}>
                <span>г.Волгоград, ул.им.Лавренёва,19Д</span>
              </div>
            </li>
            <li className={cls.contacts__item}>
              <div className={cls.contacts__item_links}>
                <a href="https://t.me/gidravlika_m" target="_blank">
                  <img
                    src="img/svg/icon-telegram.svg"
                    width={50}
                    height={50}
                    alt="Иконка точка на карте"
                  />
                  <span>Гидравлика-М</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className={cls.contacts__map}>
          <ContactMap/>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
