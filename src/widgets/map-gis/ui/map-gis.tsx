import { useRef, useEffect } from 'react';
import cls from './map-gis.module.scss';
import DG from '2gis-maps';

const MapGis = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = DG.map('map', {
      center: [48.822733, 44.609915],
      zoom: 16,

    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id='map' ref={mapRef} className={cls.map_gis}>
      <p>chdhdhfhdfh</p>
    </div>
  );
};

export default MapGis;
