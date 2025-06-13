import React from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';

interface AddPatientProps {
  onClose: () => void;
  onAdd: (patient: any) => void;
}

export default function AddPatient({ onClose, onAdd }: AddPatientProps) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const onSubmit = (data: any) => {
    const newPatient = {
      id: Date.now().toString(),
      name: data.name,
      phone: data.phone,
      lastVisit: new Date().toISOString().split('T')[0],
      prescriptions: [{
        date: new Date().toISOString().split('T')[0],
        medicine: data.medicine,
        dosage: data.dosage,
        duration: data.duration
      }]
    };
    onAdd(newPatient);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="bg-white rounded-lg p-6 w-full max-w-md relative my-8"
        onClick={e => e.stopPropagation()}
        dir="rtl"
      >
        <button
          onClick={onClose}
          className="absolute left-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-right">إضافة مريض جديد</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">اسم المريض</label>
            <input
              {...register("name", { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
            {errors.name && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">رقم الهاتف</label>
            <input
              {...register("phone", { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
            {errors.phone && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">الدواء</label>
            <input
              {...register("medicine", { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
            {errors.medicine && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">الجرعة</label>
            <input
              {...register("dosage", { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
            {errors.dosage && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">المدة</label>
            <input
              {...register("duration", { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
            {errors.duration && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            إضافة المريض
          </button>
        </form>
      </div>
    </div>
  );
}