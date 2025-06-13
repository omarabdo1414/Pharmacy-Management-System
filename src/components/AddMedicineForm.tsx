import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { Medicine } from '../db/db';

interface AddMedicineFormProps {
  onClose: () => void;
  onAdd: (medicine: Medicine) => void;
}

export default function AddMedicineForm({ onClose, onAdd }: AddMedicineFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const onSubmit = (data: any) => {
    const newMedicine: Medicine = {
      name: data.name,
      arabicName: data.arabicName,
      quantity: parseInt(data.quantity),
      price: parseFloat(data.price),
      category: data.category,
      description: data.description,
      expiryDate: data.expiryDate,
      manufacturer: data.manufacturer
    };
    onAdd(newMedicine);
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative max-h-[90vh] overflow-y-auto" dir="rtl">
        <button
          onClick={onClose}
          className="absolute left-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">إضافة دواء جديد</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">اسم الدواء (بالإنجليزية)</label>
            <input
              {...register("name", { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
            {errors.name && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">اسم الدواء (بالعربية)</label>
            <input
              {...register("arabicName", { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
            {errors.arabicName && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">الكمية</label>
            <input
              type="number"
              {...register("quantity", { required: true, min: 0 })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
            {errors.quantity && <span className="text-red-500 text-sm">الكمية يجب أن تكون 0 أو أكثر</span>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">السعر</label>
            <input
              type="number"
              step="0.01"
              {...register("price", { required: true, min: 0 })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
            {errors.price && <span className="text-red-500 text-sm">السعر يجب أن يكون 0 أو أكثر</span>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">الفئة</label>
            <input
              {...register("category", { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
            {errors.category && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">الوصف</label>
            <textarea
              {...register("description")}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">تاريخ انتهاء الصلاحية</label>
            <input
              type="date"
              {...register("expiryDate", { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
            {errors.expiryDate && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">الشركة المصنعة</label>
            <input
              {...register("manufacturer", { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
            />
            {errors.manufacturer && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            إضافة الدواء
          </button>
        </form>
      </div>
    </div>
  );
}