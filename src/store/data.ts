import {nanoid} from 'nanoid';
import image1 from './../../public/images/car1.jpg';
import image2 from './../../public/images/car2.jpg';
import image3 from './../../public/images/car3.jpg';
import image4 from './../../public/images/car4.jpg';
import {CarType} from './store.ts';

export const DEFAULT_CAR_LIST: CarType[] = [
  {
    id: nanoid(),
    name: 'Daihatsu Mira',
    price: 1250000,
    transmission: 'АКПП',
    horsepower: 124,
    year: 2019,
    drive: '4WD',
    image: image1
  },
  {
    id: nanoid(),
    name: 'Ниссан Х-Трейл',
    price: 3250000,
    transmission: 'АКПП',
    horsepower: 124,
    year: 2012,
    drive: '4WD',
    image: image2
  },
  {
    id: nanoid(),
    name: 'Audi Q7',
    price: 1255000,
    transmission: 'АКПП',
    horsepower: 190,
    year: 2017,
    drive: '4WD',
    image: image3
  },
  {
    id: nanoid(),
    name: 'Audi Q2',
    price: 2255000,
    transmission: 'АКПП',
    horsepower: 150,
    year: 2023,
    drive: '4WD',
    image: image4
  },
];

export const ADMIN_DATA = {
  login: 'admin',
  password: '12345'
};

export enum UserRoles {
  Manager = 'Manager',
  Admin = 'Admin',
  User = 'User'
}

export type UserType = {
  id: string;
  name: string;
  password: string;
  role: UserRoles;
  login: string;
}

export const DEFAULT_USERS: UserType[] = [
  {
    id: nanoid(),
    name: 'Виктор Львович',
    login: 'admin',
    password: '12345',
    role: UserRoles.Admin
  },
  {
    id: nanoid(),
    name: 'Вероника Степанова',
    login: 'veronika100',
    password: '00009',
    role: UserRoles.User
  }
];
