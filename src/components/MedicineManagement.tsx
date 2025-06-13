import React, { useState, useEffect } from 'react';
import { Search, Plus, Package } from 'lucide-react';
import AddMedicine from './AddMedicine';
import MedicineList from './MedicineList';
import { db, Medicine, initializeMedicines } from '../db/db';
import { useLiveQuery } from 'dexie-react-hooks';

export default function MedicineManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddMedicine, setShowAddMedicine] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    initializeMedicines();
  }, []);

  const medicines = useLiveQuery(
    () => db.medicines.toArray()
  ) ?? [];

  const categories = ['all', ...new Set(medicines.map(med => med.category))];

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = 
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.arabicName.includes(searchTerm) ||
      medicine.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || medicine.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleAddMedicine = async (newMedicine: Medicine) => {
    await db.medicines.add(newMedicine);
  };

  const handleUpdateQuantity = async (id: number, newQuantity: number) => {
    await db.medicines.update(id, { quantity: newQuantity });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6" dir="rtl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">إدارة المخزون الدوائي</h2>
              <button
                onClick={() => setShowAddMedicine(true)}
                className="flex items-center bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <Plus size={20} className="ml-2" />
                إضافة دواء جديد
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="البحث عن دواء..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                    {category === 'all' ? 'جميع الفئات' : category}
                  </option>
                ))}
              </select>
            </div>

            {filteredMedicines.length > 0 ? (
              <MedicineList 
                medicines={filteredMedicines}
                onUpdateQuantity={handleUpdateQuantity}
              />
            ) : (
              <div className="text-center text-gray-500 py-8">
                <Package className="mx-auto mb-4" size={48} />
                <p>لم يتم العثور على أدوية مطابقة للبحث</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {showAddMedicine && (
        <AddMedicine
          onClose={() => setShowAddMedicine(false)}
          onAdd={handleAddMedicine}
        />
      )}
    </section>
  );
}