// src/components/MapComponent.js

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Importar imágenes de Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Importar imagen personalizada del marcador
import barberIcon from '../../img/logos/logo.png';

// Configurar íconos de Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Crear un nuevo icono personalizado
const customIcon = new L.Icon({
  iconUrl: barberIcon,
  iconSize: [38, 38], // Tamaño del icono
  iconAnchor: [19, 38], // Punto de anclaje del icono
  popupAnchor: [0, -38], // Punto de anclaje del popup
});

// Componente para mover el mapa
const FlyToLocation = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 13);
    }
  }, [position, map]);
  return null;
};

const Map = ({ location, barbers }) => {
  return (
    <MapContainer
      center={location}
      zoom={13}
      style={{ 
        width: '100%', 
        maxWidth: '900px', 
        height: '560px', 
        borderRadius: '15px', // Bordes redondeados
        overflow: 'hidden', // Asegura que el contenido se ajuste a los bordes redondeados
        marginTop: '40px',
        border: '5px solid #000000'
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <FlyToLocation position={location} />
      <Marker position={location}>
        <Popup>Tu ubicación actual</Popup>
      </Marker>
      {barbers.map((barber) => (
        <Marker key={barber.id} position={barber.position} icon={customIcon}>
          <Popup>{barber.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
