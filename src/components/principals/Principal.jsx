import React, { useState, useEffect } from 'react';
import logo from '../../img/logos/LogoLs_1.png';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import StylistsCardsMenu from '../principalPageComponents/StylistsCardsMenu';
import WhatOurClientsSay from '../principalPageComponents/WhatOurClientsSay';
import {
  FiScissors,
  FiUser,
  FiCoffee,
  FiFeather,
  FiActivity,
  FiSmile,
} from 'react-icons/fi';
import { FaArtstation } from 'react-icons/fa';

// Importar imágenes de Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Importar imagen personalizada del marcador
import barberIcon from '../../img/logos/logo.png';
import FuturePromises from '../principalPageComponents/FuturePromises';

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

function Principal() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error('Error obteniendo la ubicación:', error);
          setLocation([51.505, -0.09]); // Valor predeterminado si no se puede obtener la ubicación
        }
      );
    } else {
      console.error('La geolocalización no es compatible con este navegador.');
      setLocation([51.505, -0.09]); // Valor predeterminado si la geolocalización no es compatible
    }
  }, []);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAddressSearch = (e) => {
    e.preventDefault();
    if (address) {
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            const { lat, lon } = data[0];
            setLocation([parseFloat(lat), parseFloat(lon)]);
          } else {
            alert('No se encontraron resultados para la dirección ingresada.');
          }
        })
        .catch((error) => {
          console.error('Error al buscar la dirección:', error);
        });
    }
  };

  const barbers = [
    { id: 1, name: 'Barbería 1', position: [51.505, -0.10] },
    { id: 2, name: 'Barbería 2', position: [51.51, -0.09] },
    { id: 3, name: 'Barbería 3', position: [51.49, -0.08] },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-muted py-12 px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="font-black text-4xl md:text-6xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-purple-800">
                Encuentra tu Estilo, Descubre a tu Experto.
              </span>
            </h1>
            <article>
              <img className="size-44 w-52 m-auto" src={logo} alt="" />
            </article>

            <form className="flex flex-col md:flex-row items-center gap-4" onSubmit={handleAddressSearch}>
              <input
                className="flex h-14 w-full border border-input bg-background text-sm rounded-2xl px-4 py-2 text-muted-foreground bg-gradient-to-r from-black via-purple-800 to-purple-800 text-white h-30 font-bold"
                placeholder="Ingresa tu ubicación"
                type="text"
                value={address}
                onChange={handleAddressChange}
              />
              <button
                className="inline-flex items-center justify-center text-sm font-medium h-10 rounded-md px-6 py-2 bg-black text-white hover:bg-purple-900"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </section>
        <section className="flex flex-wrap justify-center mb-6 space-x-12">
          <div className="text-center mb-4">
            <div className="circle bg-gradient-to-r from-black via-black to-purple-800">
              <FiUser className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Estilista
            </p>
          </div>
          <div className="text-center mb-4">
            <div className="circle bg-gradient-to-r from-black via-black to-purple-800">
              <FiScissors className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Peluqueria
            </p>
          </div>
          <div className="text-center mb-4">
            <div className="circle bg-gradient-to-r from-black via-black to-purple-800">
              <FiCoffee className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Manicurista
            </p>
          </div>
          <div className="text-center mb-4">
            <div className="circle bg-gradient-to-r from-black via-black to-purple-800">
              <FiFeather className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Pedicurista
            </p>
          </div>
          <div className="text-center mb-4">
            <div className="circle bg-gradient-to-r from-black via-black to-purple-800">
              <FiActivity className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Masagista
            </p>
          </div>
          <div className="text-center mb-4">
            <div className="circle bg-gradient-to-r from-black via-black to-purple-800">
              <FiSmile className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Maquillaje
            </p>
          </div>
          <div className="text-center mb-4">
            <div className="circle bg-gradient-to-r from-black via-black to-purple-800">
              <FaArtstation className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Tatuaje
            </p>
          </div>
          <div className="text-center mb-4">
            <div className="circle bg-gradient-to-r from-black via-black to-purple-800">
              <FaArtstation className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Tatuaje
            </p>
          </div>
          {/* <div className="text-center mb-4">
            <div className="circle bg-gradient-to-r from-black via-purple-500 to-black">
              <FaArtstation className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Asesor imagen
            </p>
          </div> */}
        </section>
        <section className="flex justify-center mb-6 px-4">
          {location && (
            <MapContainer
              center={location}
              zoom={13}
              style={{ width: '100%', maxWidth: '900px', height: '400px' }}
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
          )}
        </section>
        <StylistsCardsMenu />
        <FuturePromises />
        <WhatOurClientsSay />
      </main>
      <style jsx>{`
        .circle {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: 0 auto 1rem auto;
        }
      `}</style>
    </div>
  );
}

export default Principal;
