import s from './AutoList.module.scss';
import AutoItem from '../AutoItem/AutoItem.tsx';
import useCarsStore from '../../store/store.ts';

export default function AutoList() {
  const {cars} = useCarsStore();

  return (
    <div className={s.wrapper}>
      {cars.map((item) => (
        <AutoItem
          image={item.image}
          name={item.name}
          price={item.price}
          transmission={item.transmission}
          horsepower={item.horsepower}
          year={item.year}
          drive={item.drive}
        />
      ))}
    </div>
  );
}
