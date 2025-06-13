import React from 'react';
import { useForm } from 'react-hook-form';
import { RefreshCw } from 'lucide-react';

export default function PrescriptionRefill() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle prescription refill
  };

  return (
    <div className="py-20" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="text-center mb-8">
              <RefreshCw className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">تجديد الوصفة الطبية</h2>
              <p className="text-gray-600">
                قم بتجديد وصفتك الطبية بسهولة وسرعة
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">اسم المريض</label>
                <input
                  {...register("patientName", { required: true })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                />
                {errors.patientName && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">رقم الهاتف</label>
                <input
                  {...register("phone", { required: true })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                />
                {errors.phone && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">رقم الوصفة السابقة</label>
                <input
                  {...register("prescriptionNumber", { required: true })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                />
                {errors.prescriptionNumber && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">الأدوية المطلوب تجديدها</label>
                <textarea
                  {...register("medications", { required: true })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  placeholder="اكتب أسماء الأدوية المطلوب تجديدها"
                />
                {errors.medications && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">ملاحظات إضافية</label>
                <textarea
                  {...register("notes")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                تقديم طلب التجديد
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}