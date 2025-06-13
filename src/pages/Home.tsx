import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, Shield, Award, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              مرحباً بكم في صيدلية الصحة
            </h1>
            <p className="text-xl mb-8 text-emerald-50">
              نقدم خدمات صيدلانية متكاملة مع رعاية شخصية. صحتك أمانة في أيدينا.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/refill"
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
              >
                تجديد الوصفة
              </Link>
              <Link
                to="/transfer"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                تحويل الوصفة
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Clock className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">خدمة 24/7</h3>
              <p className="text-gray-600">نعمل على مدار الساعة لتلبية احتياجاتكم الطبية</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Shield className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">جودة موثوقة</h3>
              <p className="text-gray-600">نوفر أدوية أصلية ومعتمدة من أفضل الشركات العالمية</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">طاقم متخصص</h3>
              <p className="text-gray-600">صيادلة مؤهلون لتقديم المشورة الطبية المتخصصة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">تواصل معنا</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">اتصل بنا</h3>
                <p className="text-gray-600">201234567890+</p>
              </div>
              <div className="text-center">
                <MapPin className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">موقعنا</h3>
                <p className="text-gray-600">بني سويف / بني سويف / شرق النيل</p>
              </div>
              <div className="text-center">
                <Clock className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">ساعات العمل</h3>
                <p className="text-gray-600">24 ساعة / 7 أيام</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Award className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">صيدلية موثوقة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            حاصلون على شهادة الجودة من وزارة الصحة وجميع التراخيص اللازمة لممارسة العمل الصيدلاني
          </p>
        </div>
      </section>
    </div>
  );
}