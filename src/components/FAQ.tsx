import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "¿Qué es una ISAPRE?",
      answer: "Las ISAPRE (Instituciones de Salud Previsional) son entidades privadas que funcionan como aseguradoras de salud en Chile. Ofrecen planes de salud a cambio de la cotización obligatoria del 7% de la remuneración imponible, con la posibilidad de aumentar este porcentaje para acceder a mejores coberturas."
    },
    {
      question: "¿Cuál es la diferencia entre ISAPRE y FONASA?",
      answer: "FONASA es el sistema público de salud, mientras que las ISAPRE son privadas. FONASA funciona con un sistema solidario donde todos aportan según sus ingresos y reciben atención según sus necesidades. Las ISAPRE, en cambio, ofrecen planes personalizados con diferentes coberturas según el monto que cotices."
    },
    {
      question: "¿Cómo sé qué plan de ISAPRE me conviene?",
      answer: "El plan ideal depende de varios factores: tu situación de salud, la de tu grupo familiar, tu presupuesto, y tus necesidades específicas de atención médica. Nuestros asesores analizan estos aspectos para recomendarte el plan más adecuado."
    },
    {
      question: "¿Tiene algún costo la asesoría?",
      answer: "No, nuestra asesoría es completamente gratuita. Nuestro servicio se financia a través de comisiones que nos pagan las ISAPRE por cada cliente que contrata un plan a través de nosotros, sin que esto afecte el precio que pagas por tu plan."
    },
    {
      question: "¿Puedo cambiarme de ISAPRE en cualquier momento?",
      answer: "Puedes cambiarte de ISAPRE después de cumplir un año de permanencia en tu ISAPRE actual. Sin embargo, existen algunas excepciones como aumentos unilaterales de precio por parte de la ISAPRE, que te permiten cambiarte antes del año."
    },
    {
      question: "¿Qué pasa con mis preexistencias si me cambio de ISAPRE?",
      answer: "Las preexistencias pueden afectar la cobertura o el precio de tu nuevo plan. Sin embargo, existen estrategias y momentos adecuados para realizar el cambio minimizando estos impactos. Nuestros asesores te guiarán en este proceso."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Resolvemos tus dudas sobre planes de ISAPRE y nuestro servicio de asesoría
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 py-6 transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-start justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              </button>
              <div 
                className={`mt-2 pr-12 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-base text-gray-500">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;