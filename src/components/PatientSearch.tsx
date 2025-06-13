import React, { useState, useEffect } from 'react';
import { Search, UserCircle, UserPlus } from 'lucide-react';
import PatientHistory from './PatientHistory';
import AddPatient from './AddPatient';
import { db, Patient } from '../db/db';
import { useLiveQuery } from 'dexie-react-hooks';

export default function PatientSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [showAddPatient, setShowAddPatient] = useState(false);

  const patients = useLiveQuery(
    () => db.patients.toArray()
  ) ?? [];

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setShowResults(term.length > 0);
  };

  const filteredPatients = patients.filter(
    patient => 
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm)
  );

  const handleSelectPatient = (patient: Patient) => {
    setSelectedPatient(patient);
    setShowResults(false);
    setSearchTerm('');
  };

  const handleAddPatient = async (newPatient: Patient) => {
    await db.patients.add(newPatient);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">إدارة المرضى</h2>
        <button
          onClick={() => setShowAddPatient(true)}
          className="flex items-center bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <UserPlus size={20} className="ml-2" />
          مريض جديد
        </button>
      </div>

      <div className="relative mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="البحث عن مريض بالاسم أو رقم الهاتف..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
          />
          <Search className="absolute right-4 top-3.5 text-gray-400" size={20} />
        </div>

        {showResults && filteredPatients.length > 0 && (
          <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
            {filteredPatients.map(patient => (
              <div
                key={patient.id}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center"
                onClick={() => handleSelectPatient(patient)}
              >
                <UserCircle className="text-gray-400 ml-3" size={24} />
                <div>
                  <div className="font-medium">{patient.name}</div>
                  <div className="text-sm text-gray-600">{patient.phone}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedPatient && <PatientHistory patient={selectedPatient} />}

      {!selectedPatient && (
        <div className="text-center text-gray-500 py-8">
          <UserCircle className="mx-auto mb-4" size={48} />
          <p>ابحث عن مريض لعرض سجله الطبي</p>
        </div>
      )}

      {showAddPatient && (
        <AddPatient
          onClose={() => setShowAddPatient(false)}
          onAdd={handleAddPatient}
        />
      )}
    </div>
  );
}