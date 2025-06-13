import React, { useState } from 'react';
import { Search, Package, Plus } from 'lucide-react';
import { db, Medicine } from '../db/db';
import { useLiveQuery } from 'dexie-react-hooks';
import AddMedicineForm from './AddMedicineForm';

export default function MedicineSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [showAddForm, setShowAddForm] = useState(false);

  const medicines = useLiveQuery(
    () => db.medicines.toArray()
  ) ?? [];

  const categories = ['الكل', ...new Set(medicines.map(med => med.category))];

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = 
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.arabicName.includes(searchTerm) ||
      medicine.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'الكل' || medicine.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB');
  };

  const handleAddMedicine = async (newMedicine: Medicine) => {
    await db.medicines.add(newMedicine);
    setShowAddForm(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">البحث عن الأدوية</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <Plus size={20} className="ml-2" />
          إضافة دواء جديد
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="ابحث عن دواء..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsSearchOpen(true)}
            className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
          />
          <Search className="absolute right-4 top-3.5 text-gray-400" size={20} />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {(isSearchOpen || searchTerm) && (
        <div className="mt-4">
          {filteredMedicines.length > 0 ? (
            <div className="grid gap-4">
              {filteredMedicines.map((medicine) => (
                <div
                  key={medicine.id}
                  className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{medicine.arabicName}</h3>
                      <p className="text-gray-600 text-sm">{medicine.name}</p>
                    </div>
                    <div className="text-left">
                      <span className="inline-block bg-emerald-100 text-emerald-800 text-sm px-2 py-1 rounded">
                        {medicine.category}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">الكمية المتوفرة:</span>
                      <span className="font-medium mr-1">{medicine.quantity}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">السعر:</span>
                      <span className="font-medium mr-1">{medicine.price} ج.م</span>
                    </div>
                    <div>
                      <span className="text-gray-600">تاريخ الانتهاء:</span>
                      <span className="font-medium mr-1">{formatDate(medicine.expiryDate)}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">{medicine.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <Package className="mx-auto mb-4" size={48} />
              <p>لم يتم العثور على أدوية مطابقة للبحث</p>
            </div>
          )}
        </div>
      )}

      {showAddForm && (
        <AddMedicineForm
          onClose={() => setShowAddForm(false)}
          onAdd={handleAddMedicine}
        />
      )}
    </div>
  );
}