import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import './CalculationForm.scss';

const validationSchema = Yup.object({
  name: Yup.string().required('Обязательное поле'),
  phone: Yup.string()
    .required('Обязательное поле')
    .matches(/^(\+7|8)\d{10}$/, 'Неверный формат телефона'),
  fromCity: Yup.string().required('Обязательное поле'),
  toCity: Yup.string().required('Обязательное поле'),
  weight: Yup.number()
    .required('Обязательное поле')
    .positive('Вес должен быть положительным числом'),
  volume: Yup.number()
    .required('Обязательное поле')
    .positive('Объем должен быть положительным числом'),
  goodsType: Yup.string().required('Обязательное поле')
});

const CalculationForm: React.FC = () => {
  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      // TODO: Implement API call
      console.log('Calculation form submitted:', values);
      resetForm();
      alert('Заявка на расчет отправлена! Мы свяжемся с вами в ближайшее время.');
    } catch (error) {
      alert('Произошла ошибка при отправке формы. Попробуйте позже.');
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        fromCity: '',
        toCity: '',
        weight: '',
        volume: '',
        goodsType: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="calculation-form">
        <div className="form-row">
          <Input name="name" label="Ваше имя" />
          <Input name="phone" label="Телефон" type="tel" />
        </div>
        <div className="form-row">
          <Input name="fromCity" label="Город отправления" />
          <Input name="toCity" label="Город назначения" />
        </div>
        <div className="form-row">
          <Input name="weight" label="Вес (кг)" type="number" />
          <Input name="volume" label="Объем (м³)" type="number" />
        </div>
        <Input name="goodsType" label="Тип товара" />
        <button type="submit" className="btn primary">
          Рассчитать стоимость
        </button>
      </Form>
    </Formik>
  );
};

export default CalculationForm; 