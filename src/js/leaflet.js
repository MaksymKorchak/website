var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {

    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidnJpbmRhdmFuMTcwOCIsImEiOiJja2Y1Ym94aG0wbGN2MnFueXR1dHBtMmE1In0.MoDbJzInAPmT9gX-QHNkaQ'
}).addTo(mymap);