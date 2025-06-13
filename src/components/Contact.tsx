import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">تواصل معنا</h2>
              <p className="text-gray-600 mb-8">
                هل لديك أسئلة؟ نحن هنا للمساعدة. راسلنا وسنرد في أقرب وقت ممكن.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-emerald-600 w-6 h-6 mt-1" />
                  <div className="mr-4">
                    <h3 className="font-semibold text-gray-900">العنوان</h3>
                    <p className="text-gray-600">بني سويف / بني سويف / شرق النيل</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-emerald-600 w-6 h-6 mt-1" />
                  <div className="mr-4">
                    <h3 className="font-semibold text-gray-900">الهاتف</h3>
                    <p className="text-gray-600">201234567890+</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-emerald-600 w-6 h-6 mt-1" />
                  <div className="mr-4">
                    <h3 className="font-semibold text-gray-900">البريد الإلكتروني</h3>
                    <p className="text-gray-600">contact@healthcarerx.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-emerald-600 w-6 h-6 mt-1" />
                  <div className="mr-4">
                    <h3 className="font-semibold text-gray-900">ساعات العمل</h3>
                    <p className="text-gray-600">24 ساعة، 7 أيام في الأسبوع</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="bg-white p-8 rounded-xl shadow-sm">
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">الاسم</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    placeholder="اسمك"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    placeholder="بريدك الإلكتروني"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">الرسالة</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    rows={4}
                    placeholder="رسالتك"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}