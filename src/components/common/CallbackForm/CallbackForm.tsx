import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Input/Input';
import './CallbackForm.scss';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Обязательное поле')
    .min(2, 'Минимум 2 символа'),
  phone: Yup.string()
    .required('Обязательное поле')
    .matches(/^(\+7|8)\d{10}$/, 'Неверный формат телефона')
});

const CallbackForm: React.FC = () => {
  const handleSubmit = async (values: { name: string; phone: string }, { resetForm }: any) => {
    try {
      // TODO: Implement API call
      console.log('Form submitted:', values);
      resetForm();
      alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    } catch (error) {
      alert('Произошла ошибка при отправке формы. Попробуйте позже.');
    }
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="callback-form">
        <Input
          name="name"
          label="Ваше имя"
          placeholder="Введите ваше имя"
        />
        <Input
          name="phone"
          label="Телефон"
          placeholder="+7 (___) ___-__-__"
          type="tel"
        />
        <button type="submit" className="btn primary">
          Заказать звонок
        </button>
      </Form>
    </Formik>
  );
};

export default CallbackForm; 