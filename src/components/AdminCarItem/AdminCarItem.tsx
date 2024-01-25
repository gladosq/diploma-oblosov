import s from './AdminCarItem.module.scss';
import EyeIcon from '../UI/Icons/EyeIcon.tsx';
import useCarsStore, {CarType} from '../../store/store.ts';
import Button from '../UI/Button/Button.tsx';
import {Button as AntdButton, Form, Input, Modal, Popconfirm} from 'antd';
import {useState} from 'react';

type FieldType = {
  name?: string;
  price?: string;
  transmission?: string;
  horsepower?: string;
  year?: string;
  drive?: string;
};

export default function AdminCarItem({id, name, price, transmission, horsepower, year, drive, image}: CarType) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {cars, setCars} = useCarsStore();

  const [form] = Form.useForm();

  const confirm = () => {
    const actualCars = cars.filter((item) => item.id !== id);
    setCars(actualCars);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    const currentCarIndex = cars.findIndex((item) => item.id === id);
    const oldCars = cars.filter((item) => item.id !== id);
    const updatedCar = {...cars[currentCarIndex], ...values};

    setCars([...oldCars, updatedCar]);
    setIsModalOpen(false);
  };

  return (
    <div className={s.wrapper}>
      <img className={s.image} src={image} alt='Изображение автомобиля'/>

      <div className={s.titleWrapper}>
        <h3>{name}</h3>
        <p className={s.caption}>Цена без учёта выгод</p>
        <p className={s.price}>{price} ₽</p>
      </div>
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
      <div className={s.buttons}>
        <Button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Редактировать
        </Button>
        <Popconfirm
          title='Удаление'
          description='Удалить данное объявление?'
          onConfirm={confirm}
          okText='Да'
          cancelText='Отмена'
        >
          <Button>
            Удалить
          </Button>
        </Popconfirm>
      </div>
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
          initialValues={{
            name,
            id,
            price,
            transmission,
            horsepower,
            year,
            drive
          }}
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
            Редактировать объявление
          </AntdButton>
        </Form>
      </Modal>
    </div>
  );
}
