const MyPopup = () => {
  return (
    <div className="leaflet-popup leaflet-zoom-animated" style={{
      opacity: 1,
      transform: 'translate3d(319px, 299px, 0px)',
      bottom: '43px',
      left: '-192px'
    }}>
      <div className="leaflet-popup-inner leaflet-popup_show_true">
        <a className="leaflet-popup-close-button" href="#close">×</a>
        <div className="leaflet-popup-content-wrapper" style={{ maxHeight: '236px', width: '385px' }}>
          <div className="leaflet-popup-content" style={{ margin: '16px' }}>
            <div className="dg-popup__container-wrapper">
              <div className="dg-popup__container" dir="auto">
                <div id="module-1-3-2-1" data-module="firmCallout" className="callout _module_firmCallout _emptyTitle _entrance _wideButton">
                  <address className="callout__address">Лавренёва, 19д</address>
                  <div className="callout__phone">+7‒905‒395‒32‒02</div>
                  <div className="callout__workhours">
                    <a href="http://2gis.ru/volgograd/firm/70000001084381707/center/44.609606,48.82276/zoom/17?utm_medium=widget&utm_campaign=firmsonmap&utm_source=details" target="_blank" className="link callout__scheduleToday _scheme_dark">
                      Сегодня выходной
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPopup;