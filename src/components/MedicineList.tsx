import React from 'react';
import { Package, AlertTriangle } from 'lucide-react';
import { Medicine } from './MedicineManagement';

interface MedicineListProps {
  medicines: Medicine[];
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export default function MedicineList({ medicines, onUpdateQuantity }: MedicineListProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB');
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">اسم الدواء</th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">الكمية</th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">السعر</th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">الفئة</th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">تاريخ انتهاء الصلاحية</th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">تحديث الكمية</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {medicines.map((medicine) => {
            const isLowStock = medicine.quantity < 10;
            const isExpiringSoon = new Date(medicine.expiryDate).getTime() - new Date().getTime() < 1000 * 60 * 60 * 24 * 30; // 30 days

            return (
              <tr key={medicine.id} className="hover:bg-gray-50">
                <td className="px-4 py-4">
                  <div>
                    <div className="font-medium text-gray-900">{medicine.arabicName}</div>
                    <div className="text-sm text-gray-500">{medicine.name}</div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <Package className="ml-2" size={16} />
                    <span className={`${isLowStock ? 'text-red-600 font-medium' : 'text-gray-900'}`}>
                      {medicine.quantity}
                    </span>
                    {isLowStock && (
                      <AlertTriangle className="mr-2 text-red-600" size={16} />
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 text-gray-900">{medicine.price.toFixed(2)} ج.م</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    {medicine.category}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <span className={`${isExpiringSoon ? 'text-orange-600 font-medium' : 'text-gray-900'}`}>
                      {formatDate(medicine.expiryDate)}
                    </span>
                    {isExpiringSoon && (
                      <AlertTriangle className="mr-2 text-orange-600" size={16} />
                    )}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(medicine.id, medicine.quantity - 1)}
                      className="px-2 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200"
                      disabled={medicine.quantity <= 0}
                    >
                      -
                    </button>
                    <button
                      onClick={() => onUpdateQuantity(medicine.id, medicine.quantity + 1)}
                      className="px-2 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}