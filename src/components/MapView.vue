<script setup>
//Import éléments de vue 
import { onMounted,ref} from 'vue';

//Import Leaflet
import * as Leaflet from 'leaflet'

//Css leaflet
import 'leaflet/dist/leaflet.css'

//Canvas pour la carte
let tileLayer = Leaflet.tileLayer

//Initialisation de la carte sous forme d'une ref
let map = ref()

//Coordonnées de l'utilisateur
let coordMe = ref({
    latitude : 0,
    longitude : 0,
})

//Lorsque le composant est monté dans la vue
onMounted( async ()=> {
    //Caractéristiques de la carte
    tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });

    // Création de la carte sur la div ayant l'id = 'map'
    map = Leaflet.map('map',
    {
        zoomControl: true,
        layers: [tileLayer],
        maxZoom: 18,
        minZoom: 6
    })

    // Projection de la carte avec centrage aux coordonnées indiqués, avec facteur d'agrandissement
    .setView([47.530068039564, 6.809506765437977], 17)

    
    // Création d'une icone
let myIcon = Leaflet.icon({
    iconUrl: 'images/marker-icon.png',
    shadowUrl: 'images/marker-shadow.png',
    iconSize: [25,41],
    shadowSize: [25,41],
    iconAnchor: [-10,-10],
    shadowAnchor: [-10,-10],
    popupAnchor: [0,0]
})

// Ajout d'un marqueur
let marker = Leaflet.marker([47.530068039564, 6.809506765437977], {icon: myIcon}).addTo(map)

//Recentrage de la carte au bout de 5 secondes à une autre position
setTimeout(
    function() {
        map.panTo([47.530068039564, 6.809506765437977])
    }, 5000
)

}) // Fin de OnMounted

</script>

<template>
<section class="p-10">
    <div class="">
        <div class="container mx-auto px-4 py-10 bg-gris rounded-lg">
            <div id="map"> 
            </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
#map {
    width: 100%;
    height: 70vh;
}
</style>