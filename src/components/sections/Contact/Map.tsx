import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapComponent: React.FC = () => {
  const mapData = {
    center: [55.741482, 37.536716],
    zoom: 16,
    controls: ['zoomControl', 'fullscreenControl']
  };

  const placemarkProperties = {
    hintContent: 'Наш офис',
    balloonContent: 'Ленинградский проспект, д.1'
  };

  return (
    <YMaps query={{ apikey: '4ee30b7c-bb3f-4c4b-8684-4a30a4da6cb6' }}>
      <Map
        defaultState={mapData}
        width="100%"
        height="400px"
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        <Placemark 
          geometry={mapData.center}
          properties={placemarkProperties}
          options={{
            preset: 'islands#blueIcon',
            iconColor: '#3498db'
          }}
        />
      </Map>
    </YMaps>
  );
};

export default MapComponent; 