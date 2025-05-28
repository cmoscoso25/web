import React from 'react';
import { ArrowRight, Shield, Users, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <div className="inline-flex items-center text-blue-600 bg-blue-100 rounded-full p-1 pr-2 mb-4">
                <span className="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-600 rounded-full text-white">
                  Nuevo
                </span>
                <span className="ml-2 text-sm">
                  Asesoría personalizada en planes de ISAPRE
                </span>
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                <span className="block">Encuentra el mejor</span>
                <span className="block text-blue-600">plan de ISAPRE para ti</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl">
                Te ayudamos a entender y elegir el plan de salud ideal para ti y tu familia. 
                Nuestros asesores expertos te guiarán en cada paso del proceso.
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#registro"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105"
                  >
                    Solicitar asesoría
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#servicios"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 border-blue-100 md:py-4 md:text-lg md:px-10"
                  >
                    Conocer más
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center justify-center">
                      <Shield className="h-8 w-8 text-blue-500 mb-2" />
                      <span className="text-sm font-medium text-gray-600">Protección</span>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg flex flex-col items-center justify-center">
                      <Users className="h-8 w-8 text-green-500 mb-2" />
                      <span className="text-sm font-medium text-gray-600">Familia</span>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg flex flex-col items-center justify-center">
                      <Star className="h-8 w-8 text-yellow-500 mb-2" />
                      <span className="text-sm font-medium text-gray-600">Calidad</span>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg flex flex-col items-center justify-center">
                      <svg className="h-8 w-8 text-purple-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-600">Confianza</span>
                    </div>
                  </div>
                  <h3 className="text-center text-lg font-medium text-gray-900">
                    Más de 1,000 clientes satisfechos
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;