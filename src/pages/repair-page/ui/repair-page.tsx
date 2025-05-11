import { Intro } from 'src/widgets/intro';
import cls from './repair-page.module.scss';
import { RepairCylinder } from 'src/widgets/repair-cylinder';
import { RepairPump } from 'src/widgets/repair-pump';
import { RepairBox } from 'src/widgets/repair-box';

const RepairPage = (): React.ReactNode => {
  return (
    <main className={cls.repair_page}>
      <Intro>
        <h2>РЕМОНТ ГИДРАВЛИЧЕСКОГО<br/>ОБОРУДОВАНИЯ</h2>
      </Intro>
      <RepairPump/>
      <RepairCylinder/>
      <RepairBox/>
    </main>
  );
};

export default RepairPage;
