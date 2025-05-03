import { Intro } from 'src/widgets/intro';
import cls from './repair-page.module.scss';
import { RepairCylinder } from 'src/widgets/repair-cylinder';
import { RepairPump } from 'src/widgets/repair-pump';

const RepairPage = (): React.ReactNode => {
  return (
    <main className={cls.repair_page}>
      <Intro>
        <h2>РЕМОНТ ГИДРАВЛИЧЕСКОГО<br/>ОБОРУДОВАНИЯ</h2>
      </Intro>
      <RepairCylinder/>
      <RepairPump/>
    </main>
  );
};

export default RepairPage;
