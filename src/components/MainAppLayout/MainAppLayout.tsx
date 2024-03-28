import s from './MainAppLayout.module.scss';
import {Outlet} from 'react-router-dom';
import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';

export default function MainAppLayout() {

  return (
    <div className={s.wrapper}>
      <Header/>
      <div className={s.body}>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}
