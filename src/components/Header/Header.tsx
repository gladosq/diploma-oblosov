import s from './Header.module.scss';
import Logo from '../UI/Icons/Logo.tsx';
import {
  Button,
  Dropdown,
  Form,
  Input,
  MenuProps,
  Modal,
  notification,
  NotificationArgsProps,
  Space
} from 'antd';
import {useState} from 'react';
import {ADMIN_DATA} from '../../store/data.ts';
import useCarsStore from '../../store/store.ts';
import {DownOutlined} from '@ant-design/icons';
import {Link, useNavigate} from "react-router-dom";

type NotificationPlacement = NotificationArgsProps['placement'];

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const {users, userLogged, setUserLogged} = useCarsStore();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: 'Авторизация',
      description:
        'Вы успешно авторизованы',
      placement,
    });
  };

  const onFinish = (values: any) => {
    if (values.username === ADMIN_DATA.login && values.password === ADMIN_DATA.password) {
      const adminUser = users.find(item => item.login === values.username);

      if (adminUser) {
        setUserLogged(adminUser);
      }

      setIsModalOpen(false);
      openNotification('top');

      return;
    }

    if (values.username !== ADMIN_DATA.login) {
      const currentUser = users.find(item => item.login === values.username);

      if (!currentUser) {
        api.info({
          message: 'Авторизация',
          description:
            'Ошибка авторизации',
          placement: 'top',
          type: 'error'
        });
      } else {

        if (currentUser.password === values.password) {
          openNotification('top');
          setUserLogged(currentUser);
          setIsModalOpen(false);
        } else {
          api.info({
            message: 'Авторизация',
            description:
              'Неверный пароль',
            placement: 'top',
            type: 'error'
          });
        }
      }
    }
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  let items: MenuProps['items'] = [
    {
      label: 'Список авто',
      key: 'cars',
    },
    {
      type: 'divider',
    },
    {
      label: 'Выйти',
      key: 'logout',
    },
  ];

  if (userLogged?.login === ADMIN_DATA.login) {
    items = [
      {
        label: 'Модерация',
        key: 'moderate',
      },
      {
        label: 'Список заявок',
        key: 'offers',
      },
      {
        label: 'Список пользователей',
        key: 'users',
      },
      {
        type: 'divider',
      },
      {
        label: 'Выйти',
        key: 'logout',
      },
    ];
  }

  const onClick: MenuProps['onClick'] = ({key}) => {
    console.log('key:', key);

    if (key === 'logout') {
      setUserLogged(null);
      navigate('/');
    }

    if (key === 'moderate') {
      navigate('/moderate');
    }

    if (key === 'users') {
      navigate('/users');
    }

    if (key === 'cars') {
      navigate('/cars');
    }


    if (key === 'offers') {
      navigate('/offers');
    }
  };

  return (
    <div className={s.wrapper}>
      {contextHolder}
      <div className={s.innerWrapper}>
        <a href='/'>
          <Logo/>
        </a>
        <div className={s.navigation}>
          <Link className={s.carsLink} to={'/'}>
            Главная
          </Link>
          <Link className={s.carsLink} to={'/cars'}>
            Список авто
          </Link>
        </div>
        <div className={s.account}>
          {userLogged ? (
            <Dropdown
              menu={{items, onClick}}
              trigger={['click']}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  console.log('e:', e);
                }}
              >
                <Space>
                  {userLogged.name}
                  <DownOutlined/>
                </Space>
              </a>
            </Dropdown>
          ) : (
            <Button
              // onClick={() => openNotification('top')}
              onClick={() => showModal()}
            >
              Войти в личный кабинет
            </Button>
          )}

        </div>
      </div>
      <Modal
        title="Войти"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          name="basic"
          labelCol={{span: 4}}
          initialValues={{remember: true}}
          onFinish={onFinish}
          autoComplete="off"
          className={s.form}
        >
          <Form.Item<FieldType>
            label="Логин"
            name="username"
            rules={[{required: true, message: 'Пожалуйста введите свой логин!'}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item<FieldType>
            label="Пароль"
            name="password"
            rules={[{required: true, message: 'Пожалуйста введите свой пароль!'}]}
          >
            <Input.Password/>
          </Form.Item>
          <Form.Item>
            <Button className={s.formButton} type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
