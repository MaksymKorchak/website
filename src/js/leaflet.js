var mymap = L.map('mapid').setView([50.523492,30.7925641], 13);
var marker = L.marker([50.523343, 30.795116]).addTo(mymap);
marker.bindPopup("<b>Привет!</b><br>Ждем тебя тут.").openPopup();
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {

    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidnJpbmRhdmFuMTcwOCIsImEiOiJja2Y1Ym94aG0wbGN2MnFueXR1dHBtMmE1In0.MoDbJzInAPmT9gX-QHNkaQ'
}).addTo(mymap);