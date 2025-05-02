const Button = () => {
  return (
    <div className="map-links">
      <a style={{color: "white"}} className="dg-widget-link" href="http://2gis.ru/volgograd/firm/70000001084381707/center/44.609606,48.82276/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap" target="_blank">
        Посмотреть на карте Волгограда
      </a>
      <div className="dg-widget-link">
        <a style={{color: "white"}} href="http://2gis.ru/volgograd/center/44.609606,48.82276/zoom/16/routeTab/rsType/bus/to/44.609606,48.82276╎Гидравлика-М?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">
          Найти проезд до Гидравлика-М
        </a>
      </div>
    </div>
  );
};


export default Button;