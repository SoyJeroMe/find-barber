import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/principals/Navbar';
import currentUser from '../../img/options/currentUser.png'
import stylist from '../../img/options/stylist.png'

const Card = ({ href, imgSrc, imgAlt, title, description }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <a className="absolute inset-0 z-10" href={href} rel="ugc">
      <span className="sr-only">{`Seleccionar ${title}`}</span>
    </a>
    <img
      src={imgSrc}
      alt={imgAlt}
      width="600"
      height="400"
      className="object-cover w-full h-64"
      style={{ aspectRatio: '600 / 400', objectFit: 'cover' }}
    />
    <div className="p-4 bg-background">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const App = () => (
  <section>
    <Navbar />
    <h1 className='m-auto text-center mt-16 font-extrabold text-2xl'>Que quieres ser?</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto py-12 px-4">
    <Link to={'/register-stylist'}>
    <Card 
      href="#" 
      imgSrc={stylist} 
      imgAlt="Estilista/Barbero" 
      title="Estilista/Barbero" 
      description="Accede a servicios de peluquería y barbería."
    />
    </Link>
    <Link to={'/register-currrent-user'}>
    <Card 
      href="#" 
      imgSrc={currentUser} 
      imgAlt="Usuario Casual" 
      title="Usuario Casual" 
      description="Reserva citas y compra productos de belleza."
    />
    </Link>
  </div>
  </section>
);

export default App;
