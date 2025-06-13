import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'هاتف العيادة',
      info: '01012103567',
      link: 'tel:01012103567',
      description: 'متاح للرد على استفساراتكم'
    },
    {
      icon: MapPin,
      title: 'عنوان العيادة',
      info: 'مصر الجديدة، القاهرة',
      link: '#',
      description: 'موقع متميز وسهل الوصول'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      info: 'dr.shaer@clinic.com',
      link: 'mailto:dr.shaer@clinic.com',
      description: 'راسلنا في أي وقت'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      info: 'السبت - الأربعاء',
      link: '#',
      description: '10:00 ص - 6:00 م'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">اتصل بنا</h2>
          <div className="w-24 h-1 bg-medical-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتكم وتقديم أفضل الخدمات الطبية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">أرسل رسالة</h3>
            
            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center space-x-2 space-x-reverse">
                <CheckCircle size={20} />
                <span>تم إرسال رسالتك بنجاح! سنتواصل معك قريباً</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">الاسم الكامل *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">رقم الهاتف *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all"
                    placeholder="01xxxxxxxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">موضوع الرسالة *</label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all"
                >
                  <option value="">اختر موضوع الرسالة</option>
                  <option value="consultation">استشارة طبية</option>
                  <option value="appointment">حجز موعد</option>
                  <option value="inquiry">استفسار عام</option>
                  <option value="complaint">شكوى</option>
                  <option value="suggestion">اقتراح</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">الرسالة *</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-medical-blue to-medical-green text-white py-4 rounded-lg font-bold text-lg hover:from-medical-dark hover:to-green-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Send size={20} />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-br from-medical-blue to-medical-green rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h4>
                      <a
                        href={item.link}
                        className="text-medical-blue hover:text-medical-green transition-colors font-medium text-lg"
                      >
                        {item.info}
                      </a>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4">موقع العيادة</h4>
              </div>
              <div className="h-64 bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27632.37751132052!2d31.326158!3d30.088487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sHeliopolis%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1635000000000!5m2!1sen!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع العيادة - مصر الجديدة"
                ></iframe>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg p-6 text-white">
              <h4 className="text-xl font-bold mb-3">للحالات الطارئة</h4>
              <p className="mb-4 opacity-90">
                في حالة وجود حالة طبية طارئة، يرجى الاتصال فوراً أو التوجه لأقرب مستشفى
              </p>
              <a
                href="tel:01012103567"
                className="inline-flex items-center space-x-2 space-x-reverse bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                <Phone size={20} />
                <span>اتصال طارئ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;