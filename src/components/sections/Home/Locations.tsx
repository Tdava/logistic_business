import React, { useState } from 'react';
import './Locations.scss';

interface Location {
  id: number;
  city: string;
  address: string;
  type: 'office' | 'warehouse';
  coordinates: {
    lat: number;
    lng: number;
  };
  contacts: {
    phone: string;
    email: string;
  };
  workingHours: string;
}

const Locations: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  const locations: Location[] = [
    {
      id: 1,
      city: 'Москва',
      address: 'ул. Ленинская Слобода, 19, БЦ "Омега Плаза"',
      type: 'office',
      coordinates: {
        lat: 55.7558,
        lng: 37.6173
      },
      contacts: {
        phone: '+7 (495) 123-45-67',
        email: 'moscow@logistic.ru'
      },
      workingHours: 'Пн-Пт: 9:00 - 18:00'
    },
    {
      id: 2,
      city: 'Санкт-Петербург',
      address: 'Невский проспект, 100, БЦ "Невский"',
      type: 'office',
      coordinates: {
        lat: 59.9311,
        lng: 30.3609
      },
      contacts: {
        phone: '+7 (812) 987-65-43',
        email: 'spb@logistic.ru'
      },
      workingHours: 'Пн-Пт: 9:00 - 18:00'
    },
    {
      id: 3,
      city: 'Владивосток',
      address: 'ул. Портовая, 50, Складской комплекс "Восток"',
      type: 'warehouse',
      coordinates: {
        lat: 43.1198,
        lng: 131.8869
      },
      contacts: {
        phone: '+7 (423) 234-56-78',
        email: 'vld@logistic.ru'
      },
      workingHours: 'Пн-Вс: Круглосуточно'
    }
  ];

  const LocationIcon: React.FC<{ type: 'office' | 'warehouse' }> = ({ type }) => (
    <span className={`location-icon ${type}`}>
      {type === 'office' ? '🏢' : '🏭'}
    </span>
  );

  return (
    <section className="locations">
      <div className="container">
        <h2>Наши офисы и склады</h2>
        <div className="locations-content">
          <div className="locations-list">
            {locations.map(location => (
              <div
                key={location.id}
                className={`location-card ${activeLocation === location.id ? 'active' : ''}`}
                onClick={() => setActiveLocation(location.id)}
              >
                <div className="location-header">
                  <LocationIcon type={location.type} />
                  <div className="location-title">
                    <h3>{location.city}</h3>
                    <span className="type">
                      {location.type === 'office' ? 'Офис' : 'Склад'}
                    </span>
                  </div>
                </div>
                <div className="location-details">
                  <p className="address">
                    <span className="icon">📍</span>
                    {location.address}
                  </p>
                  <p className="phone">
                    <span className="icon">📞</span>
                    <a href={`tel:${location.contacts.phone}`}>
                      {location.contacts.phone}
                    </a>
                  </p>
                  <p className="email">
                    <span className="icon">✉️</span>
                    <a href={`mailto:${location.contacts.email}`}>
                      {location.contacts.email}
                    </a>
                  </p>
                  <p className="working-hours">
                    <span className="icon">🕒</span>
                    {location.workingHours}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="map-container">
            {/* Здесь будет интеграция с Google Maps или Яндекс.Картами */}
            <div className="map-placeholder">
              <p>Карта с отмеченными локациями</p>
              <p className="note">* Для работы карты необходима интеграция с картографическим сервисом</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations; 