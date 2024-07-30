import React, { useState } from 'react';
import MenuHamburguer from '../icons/MenuHamburguer';
import { Link } from 'react-router-dom';
import logoSL from '../../img/logos/LSLetra.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='sticky top-0 z-50 w-full'>
      <header className="py-1 px-6 flex items-center justify-between bg-white shadow-md">
        <Link to={'/'} className='flex items-center'>
          <img className='h-28' src={logoSL} alt="Logo" />
        </Link>

        <nav className="hidden md:flex items-center justify-center flex-1">
          <ul className='flex list-none font-bold space-x-6'>
            <li className='hover:scale-110 transform transition-transform duration-200'>
              <Link to="/app-description">¿Cómo funciona?</Link>
            </li>
            <li className='hover:scale-110 transform transition-transform duration-200'>
              <Link to="/learning">Aprendizaje</Link>
            </li>
            <li className='hover:scale-110 transform transition-transform duration-200'>
              <Link to="/contact">Contacto</Link>
            </li>
            <li className='hover:scale-110 transform transition-transform duration-200'>
              <Link to="/join-us">Únete</Link>
            </li>
            <li className='hover:scale-110 transform transition-transform duration-200'>
              <Link to="/info">Información</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to={'/register'}>
            <button className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-black hover:bg-white">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white bg-transparent rounded-md group-hover:bg-white group-hover:text-gray-900">
                Registrate
              </span>
            </button>
          </Link>
          <Link to={'/login'}>
            <button className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-black hover:bg-white">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white bg-transparent rounded-md group-hover:bg-white group-hover:text-gray-900">
                Iniciar Sesión
              </span>
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <MenuHamburguer />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <nav className="md:hidden bg-white text-purple-800">
          <ul className='flex flex-col items-center list-none font-bold space-y-4 py-4'>
            <li>
              <Link to="/contact" onClick={toggleMenu}>Contacto</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>Nosotros</Link>
            </li>
            <li>
              <Link to="/courses" onClick={toggleMenu}>Cursos</Link>
            </li>
            <li>
              <Link to="/join" onClick={toggleMenu}>Únete</Link>
            </li>
            <li>
              <Link to={'/register'} onClick={toggleMenu}>
                <button className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-black group-hover:from-purple-800 hover:text-white">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                    Regístrate
                  </span>
                </button>
              </Link>
            </li>
            <li>
              <Link to={'/login'} onClick={toggleMenu}>
                <button className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-black group-hover:from-purple-800 hover:text-white">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                    Iniciar Sesión
                  </span>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
