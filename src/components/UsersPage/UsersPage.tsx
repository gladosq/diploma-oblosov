import s from './UsersPage.module.scss';
import useCarsStore from '../../store/store.ts';
import Button from '../UI/Button/Button.tsx';

export default function UsersPage() {
  const {users} = useCarsStore();
  console.log('users:', users);

  return (
    <div className={s.wrapper}>
      <h1>Список пользователей</h1>
      <ul className={s.list}>
        {users.map((item) => {
          return (
            <li className={s.item}>
              <p>Имя: {item.name}</p>
              <p>Роль: {item.role}</p>
              <div className={s.buttons}>
                <Button>Редактировать</Button>
                <Button className={s.redButton} viewType={'red'}>Удалить</Button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
