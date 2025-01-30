import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import './ContactForm.scss';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const PhoneInput = ({ field, form, ...props }: any) => (
  <InputMask
    mask="+7 (999) 999-99-99"
    value={field.value}
    onChange={field.onChange}
    onBlur={field.onBlur}
    {...props}
  >
    {(inputProps: any) => (
      <input
        {...inputProps}
        type="tel"
        className="form-control"
        placeholder="+7 (___) ___-__-__"
      />
    )}
  </InputMask>
);

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues: FormValues = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Пожалуйста, введите ваше имя')
      .min(2, 'Имя должно содержать минимум 2 символа'),
    email: Yup.string()
      .email('Неверный формат email')
      .required('Пожалуйста, введите email'),
    phone: Yup.string()
      .required('Пожалуйста, введите номер телефона')
      .test('phone', 'Введите полный номер телефона', value => {
        if (!value) return false;
        return value.replace(/[^0-9]/g, '').length === 11;
      }),
    company: Yup.string(),
    message: Yup.string()
      .required('Пожалуйста, введите сообщение')
      .min(10, 'Сообщение должно содержать минимум 10 символов')
  });

  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    setIsLoading(true);
    try {
      // Здесь будет логика отправки формы на сервер
      await new Promise(resolve => setTimeout(resolve, 1500)); // Имитация запроса
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact-form">
        <div className="success-message">
          <div className="success-icon">✅</div>
          <h4>Спасибо за ваше сообщение!</h4>
          <p>Мы свяжемся с вами в ближайшее время.</p>
          <button 
            className="btn primary" 
            onClick={() => setIsSubmitted(false)}
            style={{ marginTop: '1rem' }}
          >
            Отправить еще сообщение
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <h3>Напишите нам</h3>
      <p className="form-description">
        Оставьте ваши контактные данные, и наши специалисты свяжутся с вами в течение 24 часов
      </p>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Ваше имя *</label>
                <Field 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Иван Иванов"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <Field 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="example@domain.com"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Телефон *</label>
                <Field 
                  name="phone"
                  component={PhoneInput}
                  id="phone"
                />
                <ErrorMessage name="phone" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="company">Компания</label>
                <Field 
                  type="text" 
                  id="company" 
                  name="company" 
                  placeholder="Название вашей компании"
                />
                <ErrorMessage name="company" component="div" className="error" />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Сообщение *</label>
                <Field 
                  as="textarea" 
                  id="message" 
                  name="message" 
                  placeholder="Опишите ваш запрос подробнее..."
                />
                <ErrorMessage name="message" component="div" className="error" />
              </div>
            </div>

            <div className="form-footer">
              <button 
                type="submit" 
                disabled={isSubmitting || isLoading}
              >
                {isLoading ? (
                  <span className="loading-spinner" />
                ) : (
                  'Отправить сообщение'
                )}
              </button>
              
              <p className="privacy-notice">
                Нажимая кнопку «Отправить сообщение», вы соглашаетесь с 
                <a href="/privacy-policy"> политикой конфиденциальности</a>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm; 