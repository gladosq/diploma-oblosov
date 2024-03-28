import s from './CarsListPage.module.scss';
import useCarsStore from '../../store/store.ts';
import AutoItem from '../AutoItem/AutoItem.tsx';

export default function CarsListPage() {
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
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}
