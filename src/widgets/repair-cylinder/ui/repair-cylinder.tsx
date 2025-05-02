import cls from './repair-cylinder.module.scss';

const RepairCylinder = (): React.ReactNode => {
  return (
    <article className={cls.repair_cylinder}>
      <h2>Ремонт гидроцилиндров</h2>
      <div className={cls.repair_cylinder__content}>
        <div className="container">
          <div className={cls.repair_cylinder__wrapper}>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RepairCylinder;
