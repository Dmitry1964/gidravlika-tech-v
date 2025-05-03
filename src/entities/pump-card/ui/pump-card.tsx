import cls from './pump-card.module.scss';

type PumpCardType = {
  img: string;
  img2x: string;
  webp: string;
  webp2x: string;
  title: string;
  desc: string;
};

const PumpCard = (card: PumpCardType): React.ReactNode => {
  const { img, img2x, webp, webp2x, title, desc } = card;
  return (
    <article className={cls.pump_card}>
      <div className={cls.pump_card__wrapper}>
        <div className={cls.pump_card__img}>
          <picture>
            <source type="image/webp" srcSet={`${webp}, ${webp2x}`} />
            <img
              src={img}
              width={200}
              height={210}
              alt={title}
              srcSet={img2x}
            />
          </picture>
        </div>
        <div className={cls.pump_card__content}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </article>
  );
};

export default PumpCard;
