import React, { useState, useEffect } from 'react';
import logo from '../../img/logos/LogoLs_1.png';
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
import Map from '../map/Map';
import FuturePromises from '../principalPageComponents/FuturePromises';

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
        },
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
      fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${address}`,
      )
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
    { id: 1, name: 'Barbería Esteban', position: [51.505, -0.1] },
    { id: 2, name: 'Barbería 2', position: [51.51, -0.09] },
    { id: 3, name: 'Barbería 3', position: [51.49, -0.08] },
  ];

  return (
    <div className="flex flex-col min-h-screen z-80">
      <main className="flex-1">
        <section className="flex flex-col md:flex-row justify-between mx-6 mt-3 pl-6 pr-6 md:pl-12 md:pr-12">
          <div className="flex flex-col w-full md:w-1/2 md:mr-9 mb-6 md:mb-0">
            <section className="bg-muted py-8 px-4 md:py-12 md:px-6 text-left">
              <div className="space-y-4">
                <h1 className="font-black text-3xl md:text-6xl text-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-purple-900 block text-7xl">
                    Localiza Tu Estilo
                  </span>
                  <span className='text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-purple-900 block'>
                    En Cualquier Momento.
                  </span>
                </h1>
                <article>
                  <img className="size-44 w-40 md:w-52 m-auto" src={logo} alt="" />
                </article>

                <form
                  className="flex flex-col md:flex-row items-center gap-4"
                  onSubmit={handleAddressSearch}
                >
                  <input
                    className="flex h-12 md:h-14 w-full border border-input bg-background text-sm rounded-2xl px-4 py-2 text-muted-foreground bg-gradient-to-r from-black via-purple-800 to-purple-800 text-white font-bold"
                    placeholder="Ingresa tu ubicación"
                    type="text"
                    value={address}
                    onChange={handleAddressChange}
                  />
                  <button
                    className="inline-flex items-center justify-center text-sm font-medium h-10 md:h-14 rounded-md px-4 md:px-6 py-2 bg-black text-white hover:bg-purple-900"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </section>
            <section className="flex flex-wrap ml-3 mb-6 mt-4 space-x-4 md:space-x-7">
              {[
                { icon: FiUser, label: 'Estilista' },
                { icon: FiScissors, label: 'Peluqueria' },
                { icon: FiCoffee, label: 'Manicurista' },
                { icon: FiFeather, label: 'Pedicurista' },
                { icon: FiActivity, label: 'Masagista' },
                { icon: FiSmile, label: 'Maquillaje' },
                { icon: FaArtstation, label: 'Tatuaje' },
              ].map((service, index) => (
                <div key={index} className="text-center mb-4">
                  <div className="circle bg-gradient-to-r from-black via-black to-purple-800">
                    <service.icon className="text-3xl text-white mx-auto mb-1" />
                  </div>
                  <p className="font-bold border-0 hover:border-b-4 border-b-purple-800">
                    {service.label}
                  </p>
                </div>
              ))}
            </section>
          </div>
          <div className="flex flex-col w-full md:w-1/2 items-center md:items-end z-0">
            {location && (
              <div className="w-full h-64 md:h-[560px]"> {/* Ajusta la altura aquí */}
                <Map location={location} barbers={barbers} />
              </div>
            )}
          </div>
        </section>
        <section>
          <StylistsCardsMenu />
        </section>
        <section>
          <FuturePromises />
        </section>
        <section>
          <WhatOurClientsSay />
        </section>
      </main>
      <style jsx>{`
        .circle {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: 0 auto 0.5rem auto;
        }

        @media (min-width: 768px) {
          .circle {
            width: 60px;
            height: 60px;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Principal;
