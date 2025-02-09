import cls from './intro.module.scss';

const Intro = () => {
  return (
    <div className={cls.intro}>
      <div className="container">
        <p>предлагаем вам</p>
        <h2>УСЛУГИ НАШЕЙ КОМПАНИИ:</h2>
      </div>
    </div>
  );
};

export default Intro;
