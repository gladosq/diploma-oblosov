import s from './MainAppLayout.module.scss';
import {Outlet, useLocation} from 'react-router-dom';
import Header from '../Header/Header.tsx';

export default function MainAppLayout() {
  // const {pathname} = useLocation();
  // const currentPaths = pathname.split('/').slice(1);

  return (
    <div className={s.wrapper}>
      <Header/>
      <Outlet/>
      <h1>footer</h1>
    </div>
  );
}
