import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-emerald-500 to-emerald-700 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 py-24 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Health Is Our Priority
          </h1>
          <p className="text-xl mb-8 text-emerald-50">
            Professional pharmacy services with personalized care. 
            Easy prescription refills and expert health advice.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-emerald-50 transition-colors">
              Refill Prescription
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Transfer Prescription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}