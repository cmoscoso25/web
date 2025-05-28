import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  isapre: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    isapre: 'no-seleccionado',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!/^\d{9,}$/.test(formData.telefono.replace(/\s+/g, ''))) {
      newErrors.telefono = 'Teléfono inválido (mínimo 9 dígitos)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      // Reset form after submission
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
        isapre: 'no-seleccionado',
      });
    }
  };

  return (
    <div id="registro" className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" className="text-blue-100" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Solicita tu asesoría gratuita
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Completa el formulario y un asesor se pondrá en contacto contigo en menos de 24 horas
          </p>
        </div>
        
        {submitted ? (
          <div className="mt-12 bg-green-50 p-6 rounded-lg border border-green-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-green-800">¡Solicitud recibida!</h3>
                <div className="mt-2 text-green-700">
                  <p>
                    Gracias por contactarnos. Un asesor se comunicará contigo dentro de las próximas 24 horas.
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    onClick={() => setSubmitted(false)}
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-12">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div className="sm:col-span-2">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre completo*
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border ${
                      errors.nombre ? 'border-red-300' : 'border-gray-300'
                    } rounded-md`}
                  />
                  {errors.nombre && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.nombre && <p className="mt-2 text-sm text-red-600">{errors.nombre}</p>}
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email*
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    } rounded-md`}
                  />
                  {errors.email && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                  Teléfono*
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="tel"
                    name="telefono"
                    id="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border ${
                      errors.telefono ? 'border-red-300' : 'border-gray-300'
                    } rounded-md`}
                    placeholder="+56 9 XXXX XXXX"
                  />
                  {errors.telefono && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.telefono && <p className="mt-2 text-sm text-red-600">{errors.telefono}</p>}
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="isapre" className="block text-sm font-medium text-gray-700">
                  ¿Tienes ISAPRE actualmente?
                </label>
                <div className="mt-1">
                  <select
                    id="isapre"
                    name="isapre"
                    value={formData.isapre}
                    onChange={handleInputChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                  >
                    <option value="no-seleccionado">Selecciona una opción</option>
                    <option value="si">Sí, actualmente tengo ISAPRE</option>
                    <option value="no">No, estoy en FONASA</option>
                    <option value="otro">Otro sistema de salud</option>
                  </select>
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                  Mensaje (opcional)
                </label>
                <div className="mt-1">
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                    placeholder="¿Tienes alguna consulta específica o preocupación?"
                  ></textarea>
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-105"
                >
                  Solicitar asesoría gratuita
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;