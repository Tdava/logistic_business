import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './CallbackModal.scss';

interface CallbackModalProps {
  onClose: () => void;
}

const CallbackModal: React.FC<CallbackModalProps> = ({ onClose }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Введите ваше имя'),
    phone: Yup.string().required('Введите номер телефона'),
    time: Yup.string()
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h3>Заказать обратный звонок</h3>
        <Formik
          initialValues={{ name: '', phone: '', time: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              // Здесь будет логика отправки формы
              await new Promise(r => setTimeout(r, 1000));
              onClose();
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                <Field name="name" placeholder="Ваше имя" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field name="phone" placeholder="Номер телефона" />
                <ErrorMessage name="phone" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field as="select" name="time">
                  <option value="">Удобное время для звонка</option>
                  <option value="morning">9:00 - 12:00</option>
                  <option value="afternoon">12:00 - 15:00</option>
                  <option value="evening">15:00 - 18:00</option>
                </Field>
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Отправка...' : 'Заказать звонок'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CallbackModal; 