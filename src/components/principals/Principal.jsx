import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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

// Configurar íconos de Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function Principal() {
  const [location, setLocation] = useState([51.505, -0.09]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);

  return (
    <div>
      <main className="flex-1">
        <section className="bg-muted py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h1 className="font-black text-6xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-purple-800">
                Encuentra tu Estilo, Descubre a tu Experto.
              </span>
            </h1>

            <form className="flex items-center gap-4">
              <input
                className="flex h-10 w-full border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 rounded-md px-4 py-2 text-muted-foreground"
                placeholder="Ingresa tu ubicación"
                type="text"
              />
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 py-2 bg-purple-800 text-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </section>
        <section className="flex justify-center mb-6 space-x-8">
          <div className="text-center">
            <div className="circle bg-gradient-to-r from-black via-purple-500 to-black">
              <FiUser className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Estilista
            </p>
          </div>
          <div className="text-center">
            <div className="circle bg-gradient-to-r from-black via-purple-500 to-black">
              <FiScissors className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Peluqueria
            </p>
          </div>
          <div className="text-center">
            <div className="circle bg-gradient-to-r from-black via-purple-500 to-black">
              <FiCoffee className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Manicurista
            </p>
          </div>
          <div className="text-center">
            <div className="circle bg-gradient-to-r from-black via-purple-500 to-black">
              <FiFeather className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Pedicurista
            </p>
          </div>
          <div className="text-center">
            <div className="circle bg-gradient-to-r from-black via-purple-500 to-black">
              <FiActivity className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Masagista
            </p>
          </div>
          <div className="text-center">
            <div className="circle bg-gradient-to-r from-black via-purple-500 to-black">
              <FiSmile className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Maquillaje
            </p>
          </div>
          <div className="text-center">
            <div className="circle bg-gradient-to-r from-black via-purple-500 to-black">
              <FaArtstation className="text-3xl text-white mx-auto mb-1" />
            </div>
            <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
              Tatuaje
            </p>
          </div>
        </section>
        <section className="flex justify-center mb-6">
          <MapContainer center={location} zoom={13} style={{ width: '900px', height: '400px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={location}>
              <Popup>Tu ubicación actual</Popup>
            </Marker>
          </MapContainer>
        </section>
        <StylistsCardsMenu />
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
