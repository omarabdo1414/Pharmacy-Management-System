import Dexie, { Table } from 'dexie';

export interface Patient {
  id?: number;
  name: string;
  phone: string;
  lastVisit: string;
  prescriptions: {
    date: string;
    medicine: string;
    dosage: string;
    duration: string;
  }[];
}

export interface Medicine {
  id?: number;
  name: string;
  arabicName: string;
  quantity: number;
  price: number;
  category: string;
  description: string;
  expiryDate: string;
  manufacturer: string;
}

export class PharmacyDB extends Dexie {
  patients!: Table<Patient>;
  medicines!: Table<Medicine>;

  constructor() {
    super('PharmacyDB');
    this.version(1).stores({
      patients: '++id, name, phone',
      medicines: '++id, name, arabicName, category'
    });
  }
}

export const db = new PharmacyDB();

// Initialize common medicines
export async function initializeMedicines() {
  const count = await db.medicines.count();
  if (count === 0) {
    const commonMedicines = [
      {
        name: 'Panadol',
        arabicName: 'بنادول',
        quantity: 100,
        price: 15.50,
        category: 'مسكنات',
        description: 'لتخفيف الألم والحمى',
        expiryDate: '2025-12-31',
        manufacturer: 'GSK'
      },
      {
        name: 'Augmentin',
        arabicName: 'اوجمنتين',
        quantity: 50,
        price: 45.75,
        category: 'مضادات حيوية',
        description: 'مضاد حيوي واسع الطيف',
        expiryDate: '2025-12-31',
        manufacturer: 'GSK'
      },
      {
        name: 'Ventolin',
        arabicName: 'فنتولين',
        quantity: 30,
        price: 25.00,
        category: 'الربو',
        description: 'موسع للشعب الهوائية',
        expiryDate: '2025-06-30',
        manufacturer: 'GSK'
      },
      {
        name: 'Concor',
        arabicName: 'كونكور',
        quantity: 75,
        price: 35.25,
        category: 'ضغط الدم',
        description: 'لعلاج ارتفاع ضغط الدم',
        expiryDate: '2025-09-30',
        manufacturer: 'Merck'
      },
      {
        name: 'Glucophage',
        arabicName: 'جلوكوفاج',
        quantity: 60,
        price: 28.50,
        category: 'السكري',
        description: 'لعلاج مرض السكري',
        expiryDate: '2025-08-31',
        manufacturer: 'Merck'
      },
      {
        name: 'Lipitor',
        arabicName: 'ليبيتور',
        quantity: 45,
        price: 55.00,
        category: 'الكوليسترول',
        description: 'لخفض الكوليسترول',
        expiryDate: '2025-07-31',
        manufacturer: 'Pfizer'
      },
      {
        name: 'Nexium',
        arabicName: 'نكسيوم',
        quantity: 40,
        price: 42.75,
        category: 'المعدة',
        description: 'لعلاج حموضة المعدة',
        expiryDate: '2025-10-31',
        manufacturer: 'AstraZeneca'
      },
      {
        name: 'Claritine',
        arabicName: 'كلاريتين',
        quantity: 85,
        price: 18.25,
        category: 'الحساسية',
        description: 'مضاد للحساسية',
        expiryDate: '2025-11-30',
        manufacturer: 'Bayer'
      },
      {
        name: 'Brufen',
        arabicName: 'بروفين',
        quantity: 120,
        price: 12.00,
        category: 'مسكنات',
        description: 'مسكن للألم ومضاد للالتهاب',
        expiryDate: '2025-12-31',
        manufacturer: 'Abbott'
      },
      {
        name: 'Voltaren',
        arabicName: 'فولتارين',
        quantity: 70,
        price: 22.50,
        category: 'مسكنات',
        description: 'مسكن موضعي للألم',
        expiryDate: '2025-11-30',
        manufacturer: 'Novartis'
      }
    ];

    await db.medicines.bulkAdd(commonMedicines);
  }
}