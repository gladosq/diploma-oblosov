import s from './AutoList.module.scss';
import AutoItem from '../AutoItem/AutoItem.tsx';
import useCarsStore from '../../store/store.ts';
import {Link} from 'react-router-dom';

export default function AutoList() {
  const {cars} = useCarsStore();

  return (
    <>
      <div className={s.wrapper}>
        {cars?.slice(0, 3).map((item) => (
          <AutoItem
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            transmission={item.transmission}
            horsepower={item.horsepower}
            year={item.year}
            drive={item.drive}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
      <Link className={s.carsLink} to={'/cars'}>
        Посмотреть все авто
      </Link>
    </>
  );
}
