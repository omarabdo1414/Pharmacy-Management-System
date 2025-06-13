import React from 'react';
import { useForm } from 'react-hook-form';
import { ArrowLeftRight } from 'lucide-react';

export default function PrescriptionTransfer() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle prescription transfer
  };

  return (
    <div className="py-20" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="text-center mb-8">
              <ArrowLeftRight className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">تحويل الوصفة الطبية</h2>
              <p className="text-gray-600">
                قم بتحويل وصفتك الطبية من صيدلية أخرى إلينا بكل سهولة
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
                <label className="block text-gray-700 font-medium mb-2">اسم الصيدلية السابقة</label>
                <input
                  {...register("previousPharmacy", { required: true })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                />
                {errors.previousPharmacy && <span className="text-red-500 text-sm">هذا الحقل مطلوب</span>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">رقم الوصفة (إن وجد)</label>
                <input
                  {...register("prescriptionNumber")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                />
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
                تقديم طلب التحويل
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}