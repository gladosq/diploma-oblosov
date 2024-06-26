import {Route, Routes} from 'react-router-dom';
import '@/styles/global.scss';
import '@/styles/font-family.scss';
import MainAppLayout from './components/MainAppLayout/MainAppLayout.tsx';
import MainPage from './components/MainPage/MainPage.tsx';
import ModeratePage from './components/ModeratePage/ModeratePage.tsx';
import UsersPage from './components/UsersPage/UsersPage.tsx';
import CarsListPage from './components/CarsListPage/CarsListPage.tsx';
import OffersPage from './components/OffersPage/OffersPage.tsx';
import CarDetailsPage from './components/CarDetailsPage/CarDetailsPage.tsx';

export default function App() {
  return (
    <Routes location={location}>
      <Route path='/' element={<MainAppLayout/>}>
        <Route index path='/' element={<MainPage/>}/>
        <Route index path='/moderate' element={<ModeratePage/>}/>
        <Route index path='/users' element={<UsersPage/>}/>
        <Route index path='/cars' element={<CarsListPage/>}/>
        <Route index path='/cars/:carId' element={<CarDetailsPage/>}/>
        <Route index path='/offers' element={<OffersPage/>}/>
      </Route>
    </Routes>
  );
}
