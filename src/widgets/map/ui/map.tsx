import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import cls from './map.module.scss';

const ContactMap = () => {
  return (
    <YMaps query={{apikey: '7b566516-0aa0-403a-884a-02acfe5c23eb'}}>
        <Map className={cls.map}
          defaultState={{
            center: [48.822733, 44.609915],
            zoom: 14,
            controls: ['zoomControl', 'fullscreenControl'],
            behaviors: ['false']
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <Placemark defaultGeometry={[48.822733, 44.609915]} />
        </Map>
    </YMaps>
  );
};

export default ContactMap;
