import React from 'react';
import { Syringe, Pill, Stethoscope, Clock } from 'lucide-react';

const services = [
  {
    icon: <Pill className="w-8 h-8" />,
    title: 'Prescription Services',
    description: 'Easy refills and transfers with our online prescription management system'
  },
  {
    icon: <Syringe className="w-8 h-8" />,
    title: 'Vaccinations',
    description: 'Flu shots and other immunizations available with no appointment needed'
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: 'Health Screenings',
    description: 'Regular health screenings and wellness checks by certified professionals'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: '24/7 Support',
    description: 'Round-the-clock pharmacy services for your healthcare needs'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of pharmacy services to meet all your healthcare needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-emerald-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}