import React, { useEffect } from 'react';
import './YandexMap.scss';

const YandexMap: React.FC = () => {
  useEffect(() => {
    const loadYandexMap = () => {
      // @ts-ignore
      window.ymaps.ready(() => {
        // @ts-ignore
        const map = new window.ymaps.Map('map', {
          center: [55.796127, 37.536091], // Координаты Ленинградский проспект 35с2
          zoom: 16,
          controls: ['zoomControl', 'fullscreenControl']
        });

        // @ts-ignore
        const placemark = new window.ymaps.Placemark(
          [55.796127, 37.536091],
          {
            hintContent: 'Наш офис',
            balloonContent: 'Ленинградский проспект 35, строение 2'
          },
          {
            preset: 'islands#blueIcon'
          }
        );

        map.geoObjects.add(placemark);
      });
    };

    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=f749f5cd-3af7-430d-b060-fc5914004020&lang=ru_RU`;
    script.async = true;
    script.onload = loadYandexMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map" className="yandex-map" />;
};

export default YandexMap; 