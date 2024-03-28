import s from './UsersPage.module.scss';
import useCarsStore from '../../store/store.ts';
import Button from '../UI/Button/Button.tsx';
import {Button as AntdButton, Form, Input, Modal, notification, Popconfirm} from 'antd';
import {useState} from 'react';
import {nanoid} from 'nanoid';
import {clsx} from 'clsx';
import {UserRoles, UserType} from '../../store/data.ts';

export default function UsersPage() {
  const {users, setUsers} = useCarsStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const [editableUser, setEditableUser] = useState<UserType>();

  const [api, contextHolder] = notification.useNotification();

  const [form] = Form.useForm();
  const [formEdit] = Form.useForm();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    const newUser = {
      id: nanoid(),
      role: UserRoles.User,
      name: values.name,
      password: values.password,
      login: values.login
    };

    setUsers([...users, newUser]);
    setIsModalOpen(false);
    form.resetFields();

    api.info({
      message: 'Добавление',
      description:
        'Пользователь успешно добавлен',
      placement: 'top'
    });
  };

  const onEditFinish = (values: any) => {
    const currentUserIndex = users.findIndex((item) => item.id === editableUser?.id);
    const oldUsers = users.filter((item) => item.id !== editableUser?.id);
    const updatedUser = {...users[currentUserIndex], ...values};

    setUsers([...oldUsers, updatedUser]);
    setIsModalEditOpen(false);
    formEdit.resetFields();

    api.info({
      message: 'Редактирование',
      description:
        'Пользователь успешно отредактирован',
      placement: 'top'
    });
  };

  const onUpdateUserHandler = (id: string) => {
    const currentUser = users.filter((item) => item.id === id);
    setEditableUser(currentUser[0]);
  };

  const confirmDeleteUser = (id: string) => {
    const actualUsers = users.filter((item) => item.id !== id);
    setUsers(actualUsers);

    api.info({
      message: 'Удаление',
      description:
        'Пользователь успешно удален',
      placement: 'top',
      type: 'success'
    });
  };

  return (
    <div className={s.wrapper}>
      {contextHolder}
      <h1>Список пользователей</h1>
      <ul className={s.list}>
        {users.map((item) => {
          return (
            <li className={s.item} key={item.id}>
              <p>Имя: {item.name}</p>
              <p>Роль: {item.role}</p>
              <div className={s.buttons}>
                <Button
                  onClick={() => {
                    onUpdateUserHandler(item.id);
                    setIsModalEditOpen(true);
                  }}
                >
                  Редактировать
                </Button>
                {(item.role === UserRoles.User || item.role === undefined) && (
                  <Popconfirm
                    title='Удаление'
                    description='Удалить данного пользователя?'
                    onConfirm={() => {
                      confirmDeleteUser(item.id);
                    }}
                    okText='Да'
                    cancelText='Отмена'
                  >
                    <Button viewType={'red'}>
                      Удалить
                    </Button>
                  </Popconfirm>
                )}
              </div>
            </li>
          )
        })}
      </ul>
      <Button
        className={s.addButton}
        onClick={() => setIsModalOpen(true)}
      >
        Добавить нового пользователя
      </Button>
      <Modal
        title='Добавить нового пользвателя'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          name='basic'
          labelCol={{span: 10}}
          initialValues={{remember: true}}
          onFinish={onFinish}
          autoComplete='off'
          className={s.form}
          form={form}
        >
          <Form.Item
            label='ФИО'
            name='name'
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label='Логин'
            name='login'
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name='password'
            label='Пароль'
            rules={[{required: true, message: 'Введите пароль'}]}
            className={clsx(s.formItem, s.formItemPassword)}
          >
            <Input.Password
              placeholder={'Пароль'}
              className={s.input}
            />
          </Form.Item>
          <Form.Item
            name='repeatPassword'
            label='Повторите пароль'
            dependencies={['password']}
            className={clsx(s.formItem, s.formItemPassword)}
            rules={[
              {required: true, message: 'Повторите пароль'},
              ({getFieldValue}) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Пароли не совпадают'));
                }
              })
            ]}
          >
            <Input.Password
              placeholder={'Повторите пароль'}
              className={s.input}
            />
          </Form.Item>
          <AntdButton className={s.formButton} type='primary' htmlType='submit'>
            Создать пользователя
          </AntdButton>
        </Form>
      </Modal>

      <Modal
        title='Редактировать пользователя'
        open={isModalEditOpen}
        onOk={() => setIsModalEditOpen(false)}
        onCancel={() => setIsModalEditOpen(false)}
        footer={false}
      >
        <Form
          name='edit'
          labelCol={{span: 10}}
          initialValues={{
            name: editableUser?.name,
            login: editableUser?.login,
            password: editableUser?.password
          }}
          onFinish={onEditFinish}
          autoComplete='off'
          className={s.form}
          form={formEdit}
        >
          <Form.Item
            label='ФИО'
            name='name'
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label='Логин'
            name='login'
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name='password'
            label='Пароль'
            rules={[{required: true, message: 'Введите пароль'}]}
            className={clsx(s.formItem, s.formItemPassword)}
          >
            <Input.Password
              placeholder={'Пароль'}
              className={s.input}
            />
          </Form.Item>
          <AntdButton className={s.formButton} type='primary' htmlType='submit'>
            Редактировать пользователя
          </AntdButton>
        </Form>
      </Modal>
    </div>
  );
}
