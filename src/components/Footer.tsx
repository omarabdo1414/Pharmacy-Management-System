import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">صيدلية الصحة</h3>
            <p className="text-sm">
              شريككم الموثوق للرعاية الصحية المتكاملة
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/medicines" className="hover:text-white transition-colors">الأدوية</Link></li>
              <li><Link to="/patients" className="hover:text-white transition-colors">المرضى</Link></li>
              <li><Link to="/refill" className="hover:text-white transition-colors">تجديد الوصفة</Link></li>
              <li><Link to="/transfer" className="hover:text-white transition-colors">تحويل الوصفة</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/medicines" className="hover:text-white transition-colors">البحث عن الأدوية</Link></li>
              <li><Link to="/refill" className="hover:text-white transition-colors">تجديد الوصفات</Link></li>
              <li><a href="https://maps.google.com/?q=بني+سويف+شرق+النيل" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">موقعنا</a></li>
              <li><a href="tel:+201234567890" className="hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-2 text-sm">
              <p>هاتف: 201234567890+</p>
              <p>العنوان: بني سويف / بني سويف / شرق النيل</p>
              <p>متاح 24/7</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} صيدلية الصحة</p>
        </div>
      </div>
    </footer>
  );
}