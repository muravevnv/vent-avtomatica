document.addEventListener("DOMContentLoaded", () => {
  function initMap() {
    ymaps.ready(init);
    function init() {
      const map = new ymaps.Map("map", {
        center: [59.906070, 30.336601], 
        zoom: 13,
        controls: [],
      });
    }
  }

  initMap();
});
