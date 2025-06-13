import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PhoneCall, Clock, MapPin, Search, ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/medicines?search=${encodeURIComponent(searchTerm)}`);
      setIsSearchOpen(false);
      setSearchTerm('');
    }
  };

  return (
    <>
      <div className="bg-emerald-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:+966123456789" className="flex items-center hover:text-emerald-100">
                <PhoneCall size={16} className="ml-2" />
                <span>966-123-456-789+</span>
              </a>
              <div className="hidden md:flex items-center">
                <Clock size={16} className="ml-2" />
                <span>متاح 24/7</span>
              </div>
            </div>
            <a 
              href="https://maps.google.com/?q=صيدلية+الصحة" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-emerald-100"
            >
              <MapPin size={16} className="ml-2" />
              <span>موقعنا على الخريطة</span>
            </a>
          </div>
        </div>
      </div>
      
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-emerald-600">صيدليتي</h1>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/medicines" className="text-gray-700 hover:text-emerald-600 ml-8">الأدوية</Link>
              <Link to="/patients" className="text-gray-700 hover:text-emerald-600 ml-8">المرضى</Link>
              <Link to="/refill" className="text-gray-700 hover:text-emerald-600 ml-8">تجديد الوصفة</Link>
              <Link to="/transfer" className="text-gray-700 hover:text-emerald-600">تحويل الوصفة</Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <button 
                  className="p-2 hover:bg-gray-100 rounded-full"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Search size={20} />
                </button>
                {isSearchOpen && (
                  <form 
                    onSubmit={handleSearch}
                    className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden"
                  >
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="ابحث عن دواء..."
                      className="w-full px-4 py-2 border-none focus:ring-2 focus:ring-emerald-600"
                      autoFocus
                    />
                  </form>
                )}
              </div>
              <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-3 text-right">
              <Link to="/medicines" className="block py-2 text-gray-700">الأدوية</Link>
              <Link to="/patients" className="block py-2 text-gray-700">المرضى</Link>
              <Link to="/refill" className="block py-2 text-gray-700">تجديد الوصفة</Link>
              <Link to="/transfer" className="block py-2 text-gray-700">تحويل الوصفة</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}