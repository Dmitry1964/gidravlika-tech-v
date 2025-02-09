import cls from './header-contacts.module.scss';

const HeaderContacts = () => {
  return (
    <div className={cls.header_contacts}>
      <div className={cls.header_contacts__logo}>
        <img src="img/svg/logo-desktop.svg" alt="Логотип предприятия" />
        <div className={cls.header_contacts__title}>
          <img src="img/svg/logo-name.svg" alt="Логотип предприятия" />
          <span>Ремонт и сервис гидравлических систем</span>
        </div>
      </div>
      <ul className={cls.header_contacts__list}>
        <li className={cls.header_contacts__item}>
          <a className={cls.header_contacts__link} href="tel:+79608726622">
            <svg
              width="40.000000"
              height="40.000000"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc></desc>
              <defs>
                <clipPath id="clip18_52">
                  <rect
                    id="icon-phone"
                    width="40.000000"
                    height="40.000000"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#clip18_52)">
                <ellipse
                  id="circle"
                  cx="20.000000"
                  cy="20.000000"
                  rx="20.000002"
                  ry="20.000000"
                  fill="#0788AA"
                  fill-opacity="1.000000"
                />
                <path
                  id="path"
                  d="M19.97 18.73C19.97 18.89 20.1 19 20.25 19C20.56 19 20.81 19.26 20.81 19.56C20.81 19.71 20.93 19.83 21.08 19.83C21.23 19.83 21.36 19.71 21.36 19.56C21.36 18.96 20.86 18.46 20.25 18.46C20.1 18.46 19.97 18.59 19.97 18.73ZM24.42 19.83C24.57 19.83 24.69 19.71 24.69 19.56C24.69 17.14 22.7 15.16 20.25 15.16C20.1 15.16 19.97 15.29 19.97 15.43C19.97 15.58 20.1 15.7 20.25 15.7C22.4 15.7 24.15 17.44 24.15 19.56C24.15 19.71 24.27 19.83 24.42 19.83Z"
                  fill="#15184D"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
                <path
                  id="path"
                  d="M22.48 19.56C22.48 19.71 22.6 19.83 22.75 19.83C22.9 19.83 23.02 19.71 23.02 19.56C23.02 18.05 21.78 16.81 20.25 16.81C20.1 16.81 19.97 16.94 19.97 17.08C19.97 17.24 20.1 17.35 20.25 17.35C21.48 17.35 22.48 18.35 22.48 19.56ZM20.25 13.52C20.1 13.52 19.97 13.64 19.97 13.79C19.97 13.93 20.1 14.06 20.25 14.06C23.32 14.06 25.82 16.53 25.82 19.56C25.82 19.71 25.94 19.83 26.09 19.83C26.24 19.83 26.37 19.71 26.37 19.56C26.37 16.23 23.62 13.52 20.25 13.52ZM22.92 22.41L22.56 22.6C21.95 22.92 21.48 23.82 20.74 23.15L18.8 21.2L17.12 19.56C16.27 18.49 17.22 18.24 17.55 17.64L17.74 17.29C17.96 16.89 18.04 16.44 17.97 15.99C17.91 15.55 17.7 15.14 17.38 14.81C16.98 14.42 16.45 14.2 15.88 14.2C15.32 14.2 14.79 14.42 14.39 14.81L14.25 14.95C13.51 15.68 13.43 16.94 14.01 18.49C14.56 19.98 15.66 21.59 17.12 23.02C19.33 25.21 21.8 26.48 23.57 26.48C24.26 26.48 24.86 26.28 25.28 25.86L25.42 25.72C25.82 25.33 26.04 24.81 26.04 24.24C26.04 23.69 25.81 23.15 25.42 22.77C24.76 22.11 23.73 21.97 22.92 22.41Z"
                  fill="#15184D"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
            <span>8 (960) 872-66-22</span>
          </a>
        </li>
        <li className={cls.header_contacts__item}>
          <a
            className={cls.header_contacts__link}
            href="mailto:gidravlika-m@mail.ru"
          >
            <svg
              width="40.000000"
              height="40.000000"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc></desc>
              <defs>
                <clipPath id="clip18_49">
                  <rect
                    id="icon-mail"
                    width="40.000000"
                    height="40.000000"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#clip18_49)">
                <circle
                  id="circle"
                  cx="20.000000"
                  cy="20.800003"
                  r="20.000000"
                  fill="#0788AA"
                  fill-opacity="1.000000"
                />
                <path
                  id="path"
                  d="M14.6 16.48L19.4 19.48C19.56 19.58 19.77 19.63 19.98 19.63C20.19 19.63 20.4 19.58 20.56 19.48L25.36 16.48C25.67 16.28 25.97 15.52 25.4 15.52L14.57 15.52C13.99 15.52 14.29 16.28 14.6 16.48ZM25.51 18.12L20.56 21.13C20.34 21.26 20.19 21.28 19.98 21.28C19.77 21.28 19.62 21.26 19.4 21.13C19.18 20.99 14.84 18.34 14.48 18.12C14.23 17.97 14.23 18.15 14.23 18.28L14.23 23.73C14.23 24.04 14.6 24.48 14.87 24.48L25.11 24.48C25.39 24.48 25.75 24.04 25.75 23.73L25.75 18.28C25.75 18.15 25.76 17.97 25.51 18.12Z"
                  fill="#15184E"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </g>
            </svg>

            <span>gidravlika-m@mail.ru</span>
          </a>
        </li>
        <li className={cls.header_contacts__item}>
          <a className={cls.header_contacts__link} href="#">
            <svg
              width="41.000000"
              height="40.000000"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc></desc>
              <defs />
              <rect
                id="point"
                width="40.000000"
                height="40.000000"
                transform="translate(1.000000 0.000000)"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <circle
                id="Oval 1"
                cx="20.000000"
                cy="20.000000"
                r="20.000000"
                fill="#0788AA"
                fill-opacity="1.000000"
              />
              <ellipse
                id="Oval 2"
                cx="20.000000"
                cy="20.000000"
                rx="6.999999"
                ry="7.000000"
                fill="#15184E"
                fill-opacity="1.000000"
              />
            </svg>
            <span>г.Волгоград, ул.им.Лавренёва,19Д</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderContacts;
