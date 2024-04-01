import s from './CarDetailsPage.module.scss';
import {useParams} from 'react-router-dom';
import useCarsStore from '../../store/store.ts';
import EyeIcon from '../UI/Icons/EyeIcon.tsx';
import {Select} from 'antd';
import {clsx} from 'clsx';
import { Image } from 'antd';

export default function CarDetailsPage() {
  const {carId} = useParams();
  const {cars} = useCarsStore()
  const currentCar = cars.find((item) => item.id === carId);
  console.log('currentCar:', currentCar);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const carOptions = [
    { value: 'blue', label: <div className={clsx(s.buttonColor, s.blueColor)}>Синий <span></span></div> },
    { value: 'black', label: <div className={clsx(s.buttonColor, s.blackColor)}>Черный <span></span></div> },
    { value: 'metal', label: <div className={clsx(s.buttonColor, s.metalColor)}>Металик <span></span></div> },
    { value: 'white', label: <div className={clsx(s.buttonColor, s.whiteColor)}>Белый <span></span></div> },
    { value: 'orange', label: <div className={clsx(s.buttonColor, s.orangeColor)}>Белый <span></span></div> },
    { value: 'red', label: <div className={clsx(s.buttonColor, s.redColor)}>Темно-красный<span></span></div> },
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.innerWrapper}>
        <div className={s.galleryWrapper}>
          <div className={s.mainImage}>
            <img className={s.image} src={currentCar?.image} alt='Изображение автомобиля'/>
          </div>
          <div className={s.collectionImages}>
            <div className={s.collectionImageWrapper}>
              <Image
                src={currentCar?.image}
                preview={{
                  mask: <span className={s.previewText}>Просмотр</span>
                }}
              />
              <img className={s.image} src={currentCar?.image} alt='Изображение автомобиля'/>
            </div>
            <div className={s.collectionImageWrapper}>
              <img className={s.image} src={currentCar?.image} alt='Изображение автомобиля'/>
            </div>
            <div className={s.collectionImageWrapper}>
              <img className={s.image} src={currentCar?.image} alt='Изображение автомобиля'/>
            </div>
            <div className={s.collectionImageWrapper}>
              <img className={s.image} src={currentCar?.image} alt='Изображение автомобиля'/>
            </div>
            <div className={s.collectionImageWrapper}>
              <img className={s.image} src={currentCar?.image} alt='Изображение автомобиля'/>
            </div>
          </div>
        </div>
        <div className={s.infoWrapper}>
          <div className={s.infoItem}>
            <EyeIcon/>
            <span>{currentCar?.transmission}</span>
          </div>
          <div className={s.infoItem}>
            <EyeIcon/>
            <span>{currentCar?.drive}</span>
          </div>
          <div className={s.infoItem}>
            <EyeIcon/>
            <span>{currentCar?.year}</span>
          </div>
          <div className={s.infoItem}>
            <EyeIcon/>
            <span>{currentCar?.horsepower} л.с</span>
          </div>
          <div className={s.select}>
            <span className={s.caption}>Цвет машины:</span>
            <Select
              className={s.selectInner}
              defaultValue="black"
              style={{ width: '100%' }}
              onChange={handleChange}
              options={carOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
