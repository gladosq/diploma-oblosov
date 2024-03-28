import {create} from 'zustand';
import {DEFAULT_CAR_LIST, DEFAULT_USERS, UserType} from './data.ts';
import {persist} from 'zustand/middleware';

export type CarType = {
  id?: string;
  name: string;
  price: number;
  transmission: string;
  horsepower: number;
  year: number;
  drive: string;
  image: string;
  imageUrl?: string;
}

type CarsState = {
  cars: CarType[];
  carsModerate: CarType[];
  users: UserType[];
  userLogged: UserType | null;
  setCars: (value: CarType[]) => void;
  setCarsModerate: (value: CarType[]) => void;
  setUserLogged: (value: UserType | null) => void;
  setUsers: (value: UserType[]) => void;
}

const useCarsStore = create<CarsState>()(
  persist(
    (set) => ({
      cars: DEFAULT_CAR_LIST,
      carsModerate: [],
      users: DEFAULT_USERS,
      userLogged: null,
      setCars: (value) => set(() => ({cars: value})),
      setCarsModerate: (value) => set(() => ({carsModerate: value})),
      setUserLogged: (value) => set(() => ({userLogged: value})),
      setUsers: (value) => set(() => ({users: value})),
    }),
    {
      name: 'app-storage',
    },
  ),
);

export default useCarsStore;
