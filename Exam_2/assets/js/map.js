

const mapLink = document.getElementById('load-map-link')


mapLink.onclick = function (e) {
    e.preventDefault()


    const link = document.createElement('link')

    link.setAttribute('rel', "stylesheet")
    link.setAttribute('href', "assets/plugins/leaflet/leaflet.css")

    document.head.append(link)

    const script = document.createElement('script')

    script.setAttribute('src', 'assets/plugins/leaflet/leaflet.js')

    document.body.append(script)

    script.onload = intiMap


    document.addEventListener('click', function (e) {
        const map = document.getElementById('map')




        if (!map.contains(e.target)) {
            map.style.zIndex = 1
        } else {
            map.style.zIndex = 11
        }
    })


}



function intiMap() {
    const customPin = L.icon({
        iconUrl: 'assets/images/Pin.svg',

        iconSize: [106, 106], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [56, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    mapLink.style.display = 'none'

    var map = L.map('map').setView([50.450397, 30.594897], 13);

    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);

    L.marker([50.450397, 30.594897], { icon: customPin }).addTo(map)
        .bindPopup('Hello I`m here')
        .openPopup();


}