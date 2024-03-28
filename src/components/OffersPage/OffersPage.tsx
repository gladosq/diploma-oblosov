import s from './OffersPage.module.scss';
import AdminCarItem from '../AdminCarItem/AdminCarItem.tsx';
import useCarsStore from '../../store/store.ts';

export default function OffersPage() {
  const {carsModerate} = useCarsStore();

  console.log(':', );

  return (
    <div className={s.wrapper}>
      <div className={s.list}>
        {carsModerate?.map((item) => {
          return (
            <AdminCarItem
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              transmission={item.transmission}
              horsepower={item.horsepower}
              year={item.year}
              drive={item.drive}
              imageUrl={item.imageUrl}
              isModerate={true}
            />
          );
        })}
        {!carsModerate.length && (
          <div className={s.empty}>Заявок нет</div>
        )}
      </div>
    </div>
  );
}
