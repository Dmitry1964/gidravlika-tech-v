import { FC } from 'react';
import cls from './loading.module.scss';

export const Loading: FC = () => {
  return (
    <div className={cls.loading}>
      <div className={cls.spinner}></div>
    </div>
  );
};
