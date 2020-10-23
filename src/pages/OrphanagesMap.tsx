import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight  } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';


const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})


function OrphanagesMap() {
    return (
        <div id="page-map">

<aside>
    <header> 
        <img src={mapMarkerImg} alt="Happy" />

<h2>Escolha um orfanato no mapa</h2>
<p>Muitas crianças estão esperando a sua visita :)</p>
    </header>

<footer> 
    <strong> Pitangui</strong>
    <span>Minas Gerais</span>
</footer>

</aside>

<Map
center={[-19.682607,-44.9083914]}
zoom={14}
style={{ width: '100%', height: '100%'}} >

<TileLayer url={ `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
/>

<Marker icon={mapIcon} position={[-19.682607,-44.9083914]} >
    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
    Lar das Meninas
    <Link to="/orphanages/1">
<FiArrowRight size={28} color="FFF" />
</Link>
</Popup>
</Marker>
</Map>

<Link to="/orphanages/create" className="create-orphanage">

<FiPlus size={32} color="#FFF" />
</Link>



 </div>
    )
}


export default OrphanagesMap;