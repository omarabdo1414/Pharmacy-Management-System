import React from 'react';
import { Calendar, Pill } from 'lucide-react';

interface Prescription {
  date: string;
  medicine: string;
  dosage: string;
  duration: string;
}

interface Patient {
  id: string;
  name: string;
  phone: string;
  lastVisit: string;
  prescriptions: Prescription[];
}

interface PatientHistoryProps {
  patient: Patient;
}

export default function PatientHistory({ patient }: PatientHistoryProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB');
  };

  return (
    <div dir="rtl">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">معلومات المريض</h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">الاسم</p>
              <p className="font-medium">{patient.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">رقم الهاتف</p>
              <p className="font-medium">{patient.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">آخر زيارة</p>
              <p className="font-medium">{formatDate(patient.lastVisit)}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">سجل الوصفات الطبية</h3>
        <div className="space-y-4">
          {patient.prescriptions.map((prescription, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={16} className="ml-2" />
                  {formatDate(prescription.date)}
                </div>
                <div className="flex items-center text-emerald-600">
                  <Pill size={16} className="ml-2" />
                  {prescription.medicine}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">الجرعة</p>
                  <p className="font-medium">{prescription.dosage}</p>
                </div>
                <div>
                  <p className="text-gray-600">المدة</p>
                  <p className="font-medium">{prescription.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
          إضافة وصفة طبية جديدة
        </button>
      </div>
    </div>
  );
}