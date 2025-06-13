import React from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { Medicine } from './MedicineManagement';

interface AddMedicineProps {
  onClose: () => void;
  onAdd: (medicine: Medicine) => void;
}

export default function AddMedicine({ onClose, onAdd }: AddMedicineProps) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const onSubmit = (data: any) => {
    const newMedicine: Medicine = {
      id: '',
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
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="min-h-screen px-4 text-center">
        <div className="inline-block w-full max-w-md text-right align-middle">
          <div 
            className="relative my-8 bg-white rounded-lg shadow-xl"
            onClick={e => e.stopPropagation()}
            dir="rtl"
          >
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 rounded-t-lg">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">إضافة دواء جديد</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="px-6 py-4 max-h-[calc(100vh-12rem)] overflow-y-auto">
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

                <div className="sticky bottom-0 bg-white py-4">
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    إضافة الدواء
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}