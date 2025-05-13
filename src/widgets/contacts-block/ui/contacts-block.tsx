import { REPAIR_PHONE, SERVICE_PHONE } from 'src/shared/constants/constants';
import cls from './contacts-block.module.scss';

const ContactsBlock = (): React.ReactNode => {
  return (
    <div className={cls.contact_block}>
      <div className="container">
        <div className={cls.contact_block__wrapper}>
          <a className={cls.contact_block__link} href={`tel:${REPAIR_PHONE}`}>
            <img
              src="img/svg/icon-phone-rev.svg"
              width={40}
              height={40}
              alt="Иконка телефона"
            />
            <span>
              Ремонт гидравлического оборудования
              <br />
              8-960-872-66-22
            </span>
          </a>
          <a className={cls.contact_block__link} href={SERVICE_PHONE}>
            <img
              src="img/svg/icon-phone-rev.svg"
              width={40}
              height={40}
              alt="Иконка телефона"
            />
            <span>
            Ремонт спецтехники и служба сервиса
              <br />
              8-961-079-32-09
            </span>
          </a>

        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;
