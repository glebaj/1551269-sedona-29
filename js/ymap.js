
// Yandex map

(function(){
  if (!window.ymaps) return;

  ymaps.ready(function(){
    var map, placemark;
    var data = { map: {}, placemark: {} };
    var el = document.querySelector('.ymap');

    data.map.zoom = parseInt(el.dataset.zoom) || 13;
    data.map.center = [( +el.dataset.lat || 55.7491 ),( +el.dataset.lng || 37.6227 )];
    data.map.controls = ['fullscreenControl'];

    if (el.dataset.name) {
      data.placemark.hintContent = el.dataset.name;
      data.placemark.balloonContentHeader = el.dataset.name;
    }

    if (el.dataset.address) {
      data.placemark.balloonContentBody = el.dataset.address;
    }

    map = new ymaps.Map(el, data.map, { searchControlProvider: 'yandex#search' });
    placemark = new ymaps.Placemark(data.map.center, data.placemark, data.icon);

    map.geoObjects.add(placemark);
    map.behaviors.disable('scrollZoom');

    map.controls.add('zoomControl', {position: {right: '10px', top: '60px'}});
  });
})();
