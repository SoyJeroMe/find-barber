import React from 'react';

const AppDescription = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Bienvenido a Nuestra App</h1>
        
        <p className="text-lg text-gray-600 mb-6">
          Nuestra aplicación está diseñada para ayudarte a gestionar tus tareas de manera eficiente y efectiva.
          Con una interfaz intuitiva y una serie de funcionalidades avanzadas, podrás organizar tu trabajo como nunca antes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Funcionalidad 1</h2>
            <p className="text-gray-600">
              Descripción detallada de la primera funcionalidad. Explica cómo esta característica puede ayudar al usuario.
            </p>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Funcionalidad 2</h2>
            <p className="text-gray-600">
              Descripción detallada de la segunda funcionalidad. Explica cómo esta característica puede ayudar al usuario.
            </p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Funcionalidad 3</h2>
            <p className="text-gray-600">
              Descripción detallada de la tercera funcionalidad. Explica cómo esta característica puede ayudar al usuario.
            </p>
          </div>
          
          <div className="bg-red-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Funcionalidad 4</h2>
            <p className="text-gray-600">
              Descripción detallada de la cuarta funcionalidad. Explica cómo esta característica puede ayudar al usuario.
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
            Comienza Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDescription;
