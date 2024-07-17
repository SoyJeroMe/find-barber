import MenuHamburguer from '../icons/MenuHamburguer'
import {Link} from 'react-router-dom'
import logo from '../../img/logos/logo.png'

function Navbar() {
  return (
    <div>
      <header className="py-4 px-6 flex items-center justify-between text-white">
        <Link to={'/'} className='flex items-center'>
        <article>
          <img className="w-20 h-20" src={logo} alt="" />
        </article>
          <div className="text-2xl font-bold text-purple-800">
            Stylist <span className="text-black">Finde</span>
          </div>
        </Link>

        <article className='text-purple-800 flex list-none font-bold space-x-4 mr-12'>
  <li className='hover:scale-110 transform transition-transform duration-200'>Contactanos</li>
  <li className='hover:scale-110 transform transition-transform duration-200'>Nosotros</li>
  <li className='hover:scale-110 transform transition-transform duration-200'>Cursos</li>
  <li className='hover:scale-110 transform transition-transform duration-200'>Unete</li>
  {/* <li>Trabaja con nosotros</li> */}
</article>


        <nav className="flex items-center gap-4">
          <article className="hidden sm:block">
            <Link to={'/register'}>
              <button className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Registrate
                </span>
              </button>
            </Link>
            <Link to={''}>
              <button className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Iniciar Sesión
                </span>
              </button>
            </Link>
          </article>
          <article className="block sm:hidden">
            <MenuHamburguer />
          </article>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
