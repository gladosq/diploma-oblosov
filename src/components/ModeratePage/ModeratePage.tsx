import s from './ModeratePage.module.scss';
import useCarsStore from '../../store/store.ts';
import AdminCarItem from '../AdminCarItem/AdminCarItem.tsx';
import Button from '../UI/Button/Button.tsx';
import {Button as AntdButton, Form, Input, Modal} from 'antd';
import {useState} from 'react';
import {getRandomImage} from '../../utils/common.js';
import {nanoid} from 'nanoid';

type FieldType = {
  name?: string;
  price?: string;
  transmission?: string;
  horsepower?: string;
  year?: string;
  drive?: string;
};

export default function ModeratePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {cars, setCars, userLogged} = useCarsStore();

  const [form] = Form.useForm();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    const newCar = {...values, id: nanoid(), image: getRandomImage()};

    setCars([...cars, newCar]);
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <div className={s.wrapper}>
      <h1>Модерация</h1>
      <div className={s.profile}>
        <h2>Информация о профиле</h2>
        <p>Имя: {userLogged?.name}</p>
        <p>Полномочия: {userLogged?.role}</p>
      </div>
      <div className={s.list}>
        {cars.map((item) => {
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
            />
          );
        })}
      </div>
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Добавить новое объявление
      </Button>
      <Modal
        title='Войти'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          name='basic'
          labelCol={{span: 6}}
          initialValues={{remember: true}}
          onFinish={onFinish}
          autoComplete='off'
          className={s.form}
          form={form}
        >
          <Form.Item<FieldType>
            label='Название'
            name='name'
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item<FieldType>
            label='Цена'
            name='price'
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item<FieldType>
            label='Трансмиссия'
            name='transmission'
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item<FieldType>
            label='Л.С'
            name='horsepower'
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item<FieldType>
            label='Год выпуска'
            name='year'
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item<FieldType>
            label='Двигатель'
            name='drive'
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input/>
          </Form.Item>
          <AntdButton className={s.formButton} type='primary' htmlType='submit'>
            Создать объявление
          </AntdButton>
        </Form>
      </Modal>
    </div>
  );
}
