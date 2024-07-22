import React from 'react';
import Navbar from '../../components/principals/Navbar';

const RegisterCurrentUser = () => {
  return (
    <section className="min-h-screen bg-gray-100">
      <Navbar />
      <div
        className="mt-8 mb-8 rounded-lg border bg-white text-gray-800 shadow-lg w-full max-w-xl mx-auto p-8 sm:p-10"
      >
        <div className="flex flex-col space-y-3 mb-6">
          <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold text-center">Registro de Usuario</h3>
          <p className="text-md text-gray-500 text-center">Completa los siguientes campos para crear tu cuenta.</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                Nombre
              </label>
              <input
                className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-bold"
                id="firstName"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="lastName"
              >
                Apellido
              </label>
              <input
                className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-bold"
                id="lastName"
                placeholder="Ingresa tu apellido"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-bold"
              id="email"
              placeholder="Ingresa tu correo"
              type="email"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="birthDate"
              >
                Fecha de Nacimiento
              </label>
              <input
                className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-semibold"
                id="birthDate"
                type="date"
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="phone"
              >
                Número de Teléfono
              </label>
              <input
                className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-bold"
                id="phone"
                placeholder="Ingresa tu número"
                type="tel"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="address"
            >
              Dirección
            </label>
            <textarea
              className="flex min-h-[80px] w-full rounded-lg border border-gray-300 bg-white font-bold px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              id="address"
              rows="3"
              placeholder="Ingresa tu dirección"
            ></textarea>
          </div>
        </div>
        <div className="flex items-center mt-6">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm  transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-purple-800 text-white hover:bg-black h-10 px-4 py-2 w-full font-bold"
            type="submit"
          >
            Registrarse
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegisterCurrentUser;
