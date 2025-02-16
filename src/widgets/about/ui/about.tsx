import cls from './about.module.scss';

const About = () => {
  return (
    <section className={cls.about}>
      <div className="container">
        <div className={cls.about__wrapper}>
          <div className={cls.about__content}>
            <span>25 ЛЕТ ОПЫТА РАБОТ </span>
            <h2>ТД ГИДРАВЛИКА-М</h2>
            <p>
              Ремонт оборудования ведется согласно графику, подготавливаемому
              для каждого оборудования в отдельности, а выявленные в ходе
              ремонта неисправности фиксируются для учета при ремонте средней
              сложности и капитального типа. Ремонт среднего уровня и капремонт
              относятся к категории планируемых заранее мероприятий, и на их
              исполнение выделяются профессиональные ремонтники высшей
              квалификации, обладающие большим опытом и знаниями производства
            </p>
          </div>
          <div className={cls.about__image}>
            <picture>
              <source type="image/webp" srcSet='img/content/about-first.webp, img/content/about-first@2z.webp 2x' />
              <img src="img/content/about-first.jpg" srcSet='img/content/about-first@2x.jpg 2x' width={438} height={657} alt="Изображение спецтехники на фоне города" />
            </picture>
          </div>
          <ul className={cls.about__list}>
            <li className={cls.about__item}>
              <img src="img/svg/quality.svg" width={100} height={100} alt="Знак качества" />
              <span>ВЫСОКОЕ<br/>КАЧЕСТВО</span>
            </li>
            <li className={cls.about__item}>
              <img src="img/svg/price.svg" width={100} height={100} alt="Знак стоимости" />
              <span>ДОСТУПНЫЕ<br/>ЦЕНЫ</span>
            </li>
            <li className={cls.about__item}>
              <img src="img/svg/experience.svg" width={100} height={100} alt="Знак опыта" />
              <span>БОЛЬШОЙ<br/>ОПЫТ</span>
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
