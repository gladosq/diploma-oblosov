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
}

type CarsState = {
  cars: CarType[];
  users: UserType[];
  userLogged: UserType | null;
  setCars: (value: CarType[]) => void;
  setUserLogged: (value: UserType | null) => void;
  setUsers: (value: UserType[]) => void;
}

const useCarsStore = create<CarsState>()(
  persist(
    (set) => ({
      cars: DEFAULT_CAR_LIST,
      users: DEFAULT_USERS,
      userLogged: null,
      setCars: (value) => set(() => ({cars: value})),
      setUserLogged: (value) => set(() => ({userLogged: value})),
      setUsers: (value) => set(() => ({users: value})),
    }),
    {
      name: 'app-storage',
    },
  ),
);

export default useCarsStore;
