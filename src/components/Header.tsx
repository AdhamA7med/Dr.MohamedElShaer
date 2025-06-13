import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#about', label: 'من أنا' },
    { href: '#services', label: 'الخدمات' },
    { href: '#appointments', label: 'المواعيد' },
    { href: '#articles', label: 'المقالات' },
    { href: '#contact', label: 'اتصل بنا' },
  ];

  return (
    <header className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-medical-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">د</span>
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-gray-800">د. محمد الشاعر</h1>
              <p className="text-sm text-medical-blue">استشاري جراحة العظام والمفاصل</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-medical-blue transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <a
              href="tel:01012103567"
              className="flex items-center space-x-2 space-x-reverse text-medical-blue hover:text-medical-green transition-colors"
            >
              <Phone size={16} />
              <span className="font-medium">01012103567</span>
            </a>
            <div className="flex items-center space-x-1 space-x-reverse text-gray-600">
              <MapPin size={16} />
              <span className="text-sm">مصر الجديدة</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white rounded-lg shadow-lg border animate-fade-in-up">
            <nav className="space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 text-gray-700 hover:text-medical-blue hover:bg-gray-50 rounded transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t space-y-2">
              <a
                href="tel:01012103567"
                className="flex items-center space-x-2 space-x-reverse text-medical-blue"
              >
                <Phone size={16} />
                <span>01012103567</span>
              </a>
              <div className="flex items-center space-x-1 space-x-reverse text-gray-600">
                <MapPin size={16} />
                <span>مصر الجديدة</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;