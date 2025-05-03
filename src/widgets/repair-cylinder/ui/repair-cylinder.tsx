import { CilinderList } from 'src/widgets/cilinder-list';
import cls from './repair-cylinder.module.scss';

const RepairCylinder = (): React.ReactNode => {
  return (
    <section className={cls.repair_cylinder}>
      <h2>Ремонт гидроцилиндров</h2>
      <CilinderList/>
      {/* <div className={cls.repair_cylinder__content}>
        <div className="container">
          <div className={cls.repair_cylinder__wrapper}>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default RepairCylinder;
