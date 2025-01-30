import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Calculator.scss';

interface CalculatorValues {
  fromCity: string;
  toCity: string;
  weight: number;
  volume: number;
  goodsType: string;
  deliveryType: 'sea' | 'rail' | 'air';
}

const Calculator: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState<number>(0);

  const validationSchema = Yup.object({
    fromCity: Yup.string().required('Укажите город отправления'),
    toCity: Yup.string().required('Укажите город назначения'),
    weight: Yup.number()
      .required('Укажите вес груза')
      .positive('Вес должен быть больше нуля'),
    volume: Yup.number()
      .required('Укажите объем груза')
      .positive('Объем должен быть больше нуля'),
    goodsType: Yup.string().required('Выберите тип груза'),
    deliveryType: Yup.string().required('Выберите способ доставки')
  });

  const deliveryTypes = [
    { value: 'sea', label: 'Морская доставка', icon: '🚢', description: 'Оптимально для крупных партий' },
    { value: 'rail', label: 'Ж/Д доставка', icon: '🚂', description: 'Баланс скорости и стоимости' },
    { value: 'air', label: 'Авиа доставка', icon: '✈️', description: 'Быстрая доставка важных грузов' }
  ];

  const goodsTypes = [
    'Электроника',
    'Одежда и текстиль',
    'Оборудование',
    'Автозапчасти',
    'Стройматериалы',
    'Другое'
  ];

  const calculatePrice = (values: CalculatorValues): number => {
    const basePrice = values.weight * 100 + values.volume * 1000;
    const multiplier = {
      sea: 1,
      rail: 1.5,
      air: 3
    }[values.deliveryType];
    
    return Math.round(basePrice * multiplier);
  };

  const handleSubmit = (values: CalculatorValues) => {
    const price = calculatePrice(values);
    setEstimatedPrice(price);
    setShowResult(true);
  };

  return (
    <section className="calculator" id="calculator">
      <div className="container">
        <h2>Рассчитать стоимость доставки</h2>
        <div className="calculator-content">
          <Formik
            initialValues={{
              fromCity: '',
              toCity: '',
              weight: 0,
              volume: 0,
              goodsType: '',
              deliveryType: 'sea'
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form className="calculator-form">
                <div className="delivery-types">
                  <p className="section-label">Способ доставки</p>
                  <div className="delivery-options">
                    {deliveryTypes.map((type) => (
                      <div
                        key={type.value}
                        className={`delivery-option ${values.deliveryType === type.value ? 'active' : ''}`}
                        onClick={() => setFieldValue('deliveryType', type.value)}
                      >
                        <span className="icon">{type.icon}</span>
                        <div className="option-content">
                          <span className="label">{type.label}</span>
                          <span className="description">{type.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="fromCity">Город отправления</label>
                    <Field
                      type="text"
                      id="fromCity"
                      name="fromCity"
                      placeholder="Например: Гуанчжоу"
                    />
                    <ErrorMessage name="fromCity" component="div" className="error" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="toCity">Город назначения</label>
                    <Field
                      type="text"
                      id="toCity"
                      name="toCity"
                      placeholder="Например: Москва"
                    />
                    <ErrorMessage name="toCity" component="div" className="error" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="weight">Вес груза (кг)</label>
                    <Field
                      type="number"
                      id="weight"
                      name="weight"
                      placeholder="0.00"
                      min="0"
                      step="0.1"
                    />
                    <ErrorMessage name="weight" component="div" className="error" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="volume">Объем груза (м³)</label>
                    <Field
                      type="number"
                      id="volume"
                      name="volume"
                      placeholder="0.00"
                      min="0"
                      step="0.1"
                    />
                    <ErrorMessage name="volume" component="div" className="error" />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="goodsType">Тип груза</label>
                    <Field as="select" id="goodsType" name="goodsType">
                      <option value="">Выберите тип груза</option>
                      {goodsTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="goodsType" component="div" className="error" />
                  </div>
                </div>

                <button type="submit" className="submit-button">
                  Рассчитать стоимость
                </button>
              </Form>
            )}
          </Formik>

          {showResult && (
            <div className="calculator-result">
              <h3>Предварительная стоимость</h3>
              <div className="price">{estimatedPrice.toLocaleString()} ₽</div>
              <p className="note">
                * Окончательная стоимость может отличаться и зависит от деталей перевозки
              </p>
              <button 
                className="request-button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Оставить заявку
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator; 