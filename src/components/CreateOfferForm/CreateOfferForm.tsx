import s from './CreateOfferForm.module.scss';
import {Button as AntdButton, Form, Input, notification} from 'antd';
import useCarsStore from '../../store/store.ts';
import {nanoid} from 'nanoid';

export default function CreateOfferForm() {

  const {carsModerate, setCarsModerate} = useCarsStore();

  const [api, contextHolder] = notification.useNotification();


  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const newCarModerate = {...values, id: nanoid()};
    setCarsModerate([...carsModerate!, newCarModerate]);
    form.resetFields();

    api.info({
      message: 'Добавление',
      description:
        'Ваше объявление отправлено в модерацию',
      placement: 'top'
    });
  };

  return (
    <div className={s.wrapper}>
      {contextHolder}
      <h1>Предложить свое объявление</h1>
      <div className={s.formWrapper}>
        <Form
          name='basic'
          onFinish={onFinish}
          autoComplete='off'
          className={s.form}
          form={form}
          layout={'vertical'}
        >
          <Form.Item
            label='Название модели'
            name='name'
            className={s.formItem}
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input className={s.input}/>
          </Form.Item>
          <Form.Item
            label='Цена'
            name='price'
            className={s.formItem}
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input className={s.input}/>
          </Form.Item>
          <Form.Item
            label='Трансмиссия'
            name='transmission'
            className={s.formItem}
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input className={s.input}/>
          </Form.Item>
          <Form.Item
            label='Л.С'
            name='horsepower'
            className={s.formItem}
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input className={s.input}/>
          </Form.Item>
          <Form.Item
            label='Год выпуска'
            name='year'
            className={s.formItem}
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input className={s.input}/>
          </Form.Item>
          <Form.Item
            label='Двигатель'
            name='drive'
            className={s.formItem}
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input className={s.input}/>
          </Form.Item>
          <Form.Item
            label='Ссылка на изображение'
            name='imageUrl'
            className={s.formItem}
            rules={[{required: true, message: 'Пожалуйста, заполните поле'}]}
          >
            <Input className={s.input}/>
          </Form.Item>
          <AntdButton className={s.formButton} type='primary' htmlType='submit'>
            Создать объявление
          </AntdButton>
        </Form>
      </div>
    </div>
  );
}
