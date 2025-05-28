import React from 'react';
import { Search, Activity, Briefcase, Shield } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div id="servicios" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Nuestros servicios</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Te ayudamos a tomar la mejor decisión
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Nuestro equipo de expertos te brinda asesoría profesional y personalizada para encontrar el plan de ISAPRE que mejor se adapte a tus necesidades.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <Search className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Análisis de planes</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Analizamos los diferentes planes de ISAPRE disponibles según tus necesidades específicas de salud y presupuesto.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <Activity className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Evaluación de coberturas</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Evaluamos las coberturas de cada plan en relación a tus antecedentes médicos y los de tu grupo familiar.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <Briefcase className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Trámites y gestiones</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Te ayudamos con toda la documentación y trámites necesarios para cambiarte de ISAPRE o contratar un nuevo plan.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <Shield className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Seguimiento continuo</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Realizamos un seguimiento de tu plan para asegurarnos que siga siendo la mejor opción a lo largo del tiempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;