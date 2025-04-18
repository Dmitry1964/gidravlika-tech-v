import cls from './contacts.module.scss';
import { MapGis } from 'src/widgets/map-gis';

const Contacts = () => {
  return (
    <section className={cls.contacts}>
      <div className="container">
        <div className={cls.contacts__wrapper}>
          <div className={cls.contacts__content}>
            <h3>мы находимся</h3>
            <h2>контакты</h2>
            <ul className={cls.contacts__list}>
              <li className={cls.contacts__item}>
                <img
                  src="img/svg/icon-phone.svg"
                  width={30}
                  height={30}
                  alt="Иконка телефона"
                />
                <div className={cls.contacts__item_links}>
                  <a href="tel:+79610793209">
                    <span>
                      Ремонт спецтехники и служба сервиса
                      <br />
                      8-961-079-32-09
                    </span>
                  </a>
                  <a href="tel:+79608726622">
                    <span>Ремонт гидрооборудования<br/>8-960-872-66-22</span>
                  </a>
                </div>
              </li>
              <li className={cls.contacts__item}>
                <img
                  src="img/svg/icon-mail.svg"
                  width={30}
                  height={30}
                  alt="Иконка телефона"
                />
                <div className={cls.contacts__item_links}>
                  <a href="mailto:gidravlika-m@mail.ru">
                    <span>gidravlika-m@mail.ru</span>
                  </a>
                </div>
              </li>
              <li className={cls.contacts__item}>
                <img
                  src="img/svg/icon-point.svg"
                  width={30}
                  height={30}
                  alt="Иконка точка на карте"
                />
                <div className={cls.contacts__item_links}>
                  <span>г.Волгоград, ул.им.Лавренёва,19Д</span>
                </div>
              </li>
            </ul>
            <ul className={cls.contacts__social_list}>
              <li className={cls.contacts__social_item}>
                <div className={cls.contacts__item_links}>
                  <a href="https://t.me/gidravlika_m" target="_blank">
                    <img
                      src="img/svg/icons-telegram.svg"
                      width={35}
                      height={35}
                      alt="Иконка телеграмм"
                    />
                  </a>
                </div>
              </li>
              <li className={cls.contacts__social__item}>
                <div className={cls.contacts__item_links}>
                  <a href="https://wa.me/+79608726622" target="_blank">
                    <img
                      src="img/svg/icons-whatsapp.svg"
                      width={35}
                      height={35}
                      alt="Иконка whatsapp"
                    />
                  </a>derv
                </div>
              </li>
            </ul>
          </div>
          <div className={cls.contacts__map}>
            {/* <ContactMap /> */}
            <MapGis/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
