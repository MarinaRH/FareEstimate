let uber = () => {
  let inputOrigin = document.getElementById('origin'),
  inputDestination = document.getElementById('destiny'),
  btnRout = document.getElementById('btn-price'),
  autocompleteOrigin = new google.maps.places.Autocomplete(inputOrigin),
  autocompleteDestination = new google.maps.places.Autocomplete(inputDestination),
  directionsService = new google.maps.DirectionsService,
  directionsDisplay = new google.maps.DirectionsRenderer;
  

  let getPosition = localizacion => {
    let latitude = localizacion.coords.latitude,
    longitude = localizacion.coords.longitude;
    const mapBox = document.getElementById('map');
    let icon = 'assets/images/auto.gif',
    map = new google.maps.Map(mapBox, {
      zoom: 15,
      center: {
        lat: latitude,
        lng: longitude
      }
    });
    let miUbicacion = new google.maps.Marker({
      position: {
        lat: latitude,
        lng: longitude
      },
      animation: google.maps.Animation.DROP,
      map: map,
      // icon: icon,
    });
    // calculando la ruta
    function calcRoute(directionsService, directionsDisplay) {
      var directionsRequest = {
        origin: inputOrigin.value,
        destination: inputDestination.value,
        travelMode: 'DRIVING'
      };

    directionsService.route(directionsRequest, function(result, status) {
      if (status === 'OK') {
        var distanceRoute = result.routes[0].legs[0].distance.value/1000;
        var costo = (distanceRoute*2.00).toFixed(2);
      for (var i = 0; i < data.prices.length; i++) {
        var name = data.prices[i].localized_display_name;
        var distance = data.prices[i].distance;
        var price = (data.prices[i].high_estimate + data.prices[i].low_estimate)/2;
        var costo = ((distanceRoute/distance)*price).toFixed(2);
        $('.price').removeClass('hiden');
        // $('.p1').appendChild(costo);
        var div = document.createElement('div');
        div.innerHTML = name + ': '+costo;
        document.getElementById('price').appendChild(div);
      }
        directionsDisplay.setDirections(result);
      } else {
        alert('error');
      }
    });
      directionsDisplay.setMap(map);
      marker.setMap(null);
    };
    btnRout.addEventListener('click', function(event) {
    calcRoute(directionsService, directionsDisplay);
  });
};
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  } else {
    alert('La geolocalización no está disponible en el navegador');
  }
};
window.addEventListener('load', uber);