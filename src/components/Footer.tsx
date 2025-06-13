import React from 'react';
import { Heart, Phone, MapPin, Mail, Calendar, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#about', label: 'من أنا' },
    { href: '#services', label: 'الخدمات' },
    { href: '#appointments', label: 'المواعيد' },
    { href: '#articles', label: 'المقالات' },
    { href: '#contact', label: 'اتصل بنا' }
  ];

  const services = [
    'جراحة العظام',
    'جراحة المفاصل',
    'تنظير المفاصل',
    'علاج الكسور',
    'إعادة التأهيل',
    'الرعاية الطارئة'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-medical-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">د</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">د. محمد الشاعر</h3>
                <p className="text-gray-400 text-sm">استشاري جراحة العظام والمفاصل</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              خبرة واسعة في جراحة العظام والمفاصل مع أحدث التقنيات الطبية. 
              نحن ملتزمون بتقديم أفضل رعاية طبية متخصصة لمرضانا.
            </p>

            <div className="flex items-center space-x-2 space-x-reverse text-medical-green">
              <Shield size={20} />
              <span className="text-sm">رعاية طبية آمنة ومضمونة</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-medical-blue transition-colors duration-300 flex items-center space-x-2 space-x-reverse"
                  >
                    <span className="w-1 h-1 bg-medical-green rounded-full"></span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 flex items-center space-x-2 space-x-reverse">
                  <span className="w-1 h-1 bg-medical-green rounded-full"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <a
                href="tel:01012103567"
                className="flex items-center space-x-3 space-x-reverse text-gray-400 hover:text-medical-green transition-colors"
              >
                <Phone size={18} />
                <span>01012103567</span>
              </a>
              
              <div className="flex items-center space-x-3 space-x-reverse text-gray-400">
                <MapPin size={18} />
                <span>مصر الجديدة، القاهرة</span>
              </div>
              
              <a
                href="mailto:dr.shaer@clinic.com"
                className="flex items-center space-x-3 space-x-reverse text-gray-400 hover:text-medical-green transition-colors"
              >
                <Mail size={18} />
                <span>dr.shaer@clinic.com</span>
              </a>
              
              <div className="flex items-center space-x-3 space-x-reverse text-gray-400">
                <Calendar size={18} />
                <div>
                  <div>السبت - الأربعاء</div>
                  <div className="text-sm">10:00 ص - 6:00 م</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} د. محمد الشاعر - جميع الحقوق محفوظة
            </div>
            
            <div className="flex items-center space-x-4 space-x-reverse text-gray-400 text-sm">
              <span>صُنع بـ</span>
              <Heart className="text-red-500" size={16} />
              <span>لخدمة المرضى</span>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <div className="bg-red-600 text-center py-2">
        <p className="text-sm">
          <strong>للحالات الطارئة:</strong> اتصل على 01012103567 أو توجه لأقرب مستشفى
        </p>
      </div>
    </footer>
  );
};

export default Footer;