import s from './AutoItem.module.scss';
import EyeIcon from './../../components/UI/Icons/EyeIcon.tsx';
import Button from '../UI/Button/Button.tsx';
import {CarType} from '../../store/store.ts';

export default function AutoItem({name, price, transmission, horsepower, year, drive, image}: CarType) {
  return (
    <div className={s.wrapper}>
      <img className={s.image} src={image} alt="Изображение автомобиля"/>
      <div className={s.infoWrapper}>
        <div className={s.infoItem}>
          <EyeIcon/>
          <span>{transmission}</span>
        </div>
        <div className={s.infoItem}>
          <EyeIcon/>
          <span>{drive}</span>
        </div>
        <div className={s.infoItem}>
          <EyeIcon/>
          <span>{year}</span>
        </div>
        <div className={s.infoItem}>
          <EyeIcon/>
          <span>{horsepower} л.с</span>
        </div>
      </div>
      <div className={s.titleWrapper}>
        <h3>{name}</h3>
        <p className={s.caption}>Цена без учёта выгод</p>
        <p className={s.price}>{price} ₽</p>
        <Button>Подробнее</Button>
      </div>
    </div>
  );
}
