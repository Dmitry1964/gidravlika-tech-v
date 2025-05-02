import cls from './repair-cylinder.module.scss';

const RepairCylinder = (): React.ReactNode => {
  return (
    <article className={cls.repair_cylinder}>
      <h2>Ремонт гидроцилиндров</h2>
      <div className={cls.repair_cylinder__content}>
        <div className="container">
          <div className={cls.repair_cylinder__wrapper}>
            <div className={cls.repair_cylinder__telesсopу}>
              <ul className={cls.repair_cylinder__telesсopу_list}>
                <li>
                  <img
                    src="img/svg/check-icon.svg"
                    width={40}
                    height={40}
                    alt="Иконка чекбокс"
                  />
                  <span>гидроцилиндры самосвалов</span>
                </li>
                <li>
                  <img
                    src="img/svg/check-icon.svg"
                    width={40}
                    height={40}
                    alt="Иконка чекбокс"
                  />
                  <span>гидроцилиндры зерновозов</span>
                </li>
                <li>
                  <img
                    src="img/svg/check-icon.svg"
                    width={40}
                    height={40}
                    alt="Иконка чекбокс"
                  />
                  <span>гидроцилиндры сельхозтехники</span>
                </li>
              </ul>
              <div className={cls.repair_cylinder__telesсopу_img}>
                <picture>
                  <source
                    type="image/webp"
                    srcSet="img/content/tcilinder.webp, img/content/tcilinder@2x.webp 2x"
                  />
                  <img
                    src="img/content/tcilinder.png"
                    width={500}
                    height={370}
                    alt="Изображение самосвала"
                    srcSet="img/content/tcilinder@2x.png 2x"
                  />
                </picture>
              </div>
            </div>
            <div className={cls.repair_cylinder__krane}></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RepairCylinder;
