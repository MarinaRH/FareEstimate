var map;
  function initMap() {
    var uluru = {lat: -12.145552,lng: -77.022321};
    map = new google.maps.Map(document.getElementById('map'), {
      center: uluru,
      zoom: 15
    });
    var image = {
      url: 'assets/images/auto.gif',
    };
    var marker = new google.maps.Marker({
      
      position: uluru,
      draggable: true,
      map: map,
      animation: google.maps.Animation.BOUNCE,
      icon: image

    });
      marker.setMap(map);
      

      
  // var marker = new google.maps.Marker({
  //   position: myLatLng,
  //   map: map,
  //   icon: iconBase + 'parking_lot_maps.png'
  // });
  }