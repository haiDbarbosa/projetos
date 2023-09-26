var map = L.map("map").setView([-23.561767,-46.6470893], 15);

var marker = L.marker([-23.561767,-46.6470893]).addTo(map);
marker.bindPopup("<b>Estamos aqui<br>Venha nos conhecer!</b>").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);