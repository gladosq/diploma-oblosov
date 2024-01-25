import image1 from './../../public/images/car1.jpg';
import image2 from './../../public/images/car2.jpg';
import image3 from './../../public/images/car3.jpg';
import image4 from './../../public/images/car4.jpg';
import image5 from './../../public/images/car5.jpg';
import image6 from './../../public/images/car6.jpg';
import image7 from './../../public/images/car7.webp';
import image8 from './../../public/images/car8.png';

const imagesArr = [image1, image2, image3, image4, image5, image6, image7, image8];

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomImage = () => {
  const randomIndex = getRandomInteger(0, imagesArr.length);
  return imagesArr[randomIndex];
};
