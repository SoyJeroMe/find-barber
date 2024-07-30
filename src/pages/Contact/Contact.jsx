import React from 'react';
import { Link } from 'react-router-dom';
import {FiInstagram} from 'react-icons/fi'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {AiFillTikTok} from 'react-icons/ai'
import Navbar from '../../components/principals/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contáctanos</h1>
        
        <p className="text-lg text-gray-600 mb-6 text-center">
          Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros mediante el formulario a continuación.
        </p>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="tu@correo.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Escribe tu mensaje aquí"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
        <article>
        <ul className="flex text-center m-auto items-center justify-center gap-4 mt-6">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={'https://www.instagram.com/locatestyle/?next=%2F'}
            >
              <li className="flex items-center">
                <FiInstagram className="size-8" />
              </li>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={'https://x.com/LocateStyleApp'}
            >
              <li className="flex items-center">
                <FaSquareXTwitter className="size-8" />
              </li>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={'https://www.tiktok.com/@locatestyle?lang=es'}
            >
              <li className="flex items-center">
                <AiFillTikTok className="size-8" />
              </li>
            </Link>
          </ul>
        </article>
      </div>
    </div>
    </>
  );
};

export default Contact;