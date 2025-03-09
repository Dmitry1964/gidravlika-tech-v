import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapMarker,
  reactify,
} from 'src/shared/lib/ymaps';
import type { YMapLocationRequest } from 'ymaps3';
import cls from './map.module.scss';

const LOCATION: YMapLocationRequest = {
  center: [44.609915, 48.822733],
  zoom: 18,
};

const Map = () => {
  return (
    <div style={{width: '600px', height: '400px'}}>
      <YMap location={reactify.useDefault(LOCATION)}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />

        <YMapMarker
          coordinates={reactify.useDefault(LOCATION.center)}
          draggable={true}
        >
        </YMapMarker>
      </YMap>
    </div>
  );
};

export default Map;
