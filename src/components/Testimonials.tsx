import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Gracias a la asesoría pude encontrar un plan que se ajusta perfectamente a las necesidades de mi familia y nos permite ahorrar significativamente.",
      author: "Carolina Méndez",
      role: "Madre de familia",
      stars: 5
    },
    {
      id: 2,
      quote: "El proceso fue muy sencillo y rápido. Me explicaron todas las opciones disponibles y me ayudaron a elegir la mejor para mí.",
      author: "Roberto Alarcón",
      role: "Ingeniero",
      stars: 5
    },
    {
      id: 3,
      quote: "Me sorprendió lo detallado de la asesoría. Compararon todas las alternativas y me mostraron claramente los beneficios y limitaciones de cada plan.",
      author: "Javiera Soto",
      role: "Profesional independiente",
      stars: 4
    }
  ];

  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
      ));
  };

  return (
    <section className="bg-white py-12 md:py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Lo que dicen nuestros clientes
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Descubre cómo hemos ayudado a personas como tú a encontrar el plan de salud ideal.
            </p>
          </div>
          
          <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="flex flex-col rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
              >
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.stars)}
                    </div>
                    <p className="text-gray-500 italic mb-4">"{testimonial.quote}"</p>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-500">
                          <span className="text-lg font-medium leading-none text-white">
                            {testimonial.author.charAt(0)}
                          </span>
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;