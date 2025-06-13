import React from 'react';
import PatientSearch from '../components/PatientSearch';

export default function PatientManagement() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <PatientSearch />
      </div>
    </div>
  );
}