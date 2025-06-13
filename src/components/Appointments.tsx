import React, { useState } from 'react';
import { Calendar, Clock, Phone, CheckCircle, AlertCircle } from 'lucide-react';

const Appointments = () => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    notes: ''
  });

  const workingDays = [
    { day: 'السبت', times: ['10:00 ص', '11:00 ص', '12:00 م', '2:00 م', '3:00 م', '4:00 م'] },
    { day: 'الأحد', times: ['10:00 ص', '11:00 ص', '12:00 م', '2:00 م', '3:00 م', '4:00 م'] },
    { day: 'الاثنين', times: ['10:00 ص', '11:00 ص', '12:00 م', '2:00 م', '3:00 م', '4:00 م'] },
    { day: 'الثلاثاء', times: ['10:00 ص', '11:00 ص', '12:00 م', '2:00 م', '3:00 م', '4:00 م'] },
    { day: 'الأربعاء', times: ['10:00 ص', '11:00 ص', '12:00 م', '2:00 م', '3:00 م', '4:00 م'] },
  ];

  const services = [
    'استشارة عامة',
    'جراحة العظام',
    'جراحة المفاصل',
    'علاج الكسور',
    'تنظير المفاصل',
    'إعادة التأهيل'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert('تم إرسال طلب الحجز بنجاح! سيتم التواصل معك قريباً');
  };

  return (
    <section id="appointments" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">المواعيد والحجز</h2>
          <div className="w-24 h-1 bg-medical-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            احجز موعدك بسهولة واختر الوقت المناسب لك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex items-center space-x-3 space-x-reverse mb-8">
              <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">احجز موعدك</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">الاسم الكامل</label>
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
                  <label className="block text-gray-700 font-medium mb-2">رقم الهاتف</label>
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

              {/* Service Selection */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">نوع الخدمة</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all"
                >
                  <option value="">اختر نوع الخدمة</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Day Selection */}
              <div>
                <label className="block text-gray-700 font-medium mb-3">اختر اليوم</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {workingDays.map((workDay, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setSelectedDay(workDay.day);
                        setSelectedTime('');
                      }}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        selectedDay === workDay.day
                          ? 'border-medical-blue bg-medical-blue text-white'
                          : 'border-gray-300 hover:border-medical-blue'
                      }`}
                    >
                      {workDay.day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDay && (
                <div>
                  <label className="block text-gray-700 font-medium mb-3">اختر الوقت</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {workingDays.find(d => d.day === selectedDay)?.times.map((time, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          selectedTime === time
                            ? 'border-medical-green bg-medical-green text-white'
                            : 'border-gray-300 hover:border-medical-green'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">ملاحظات إضافية</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent transition-all resize-none"
                  placeholder="أي ملاحظات أو تفاصيل إضافية..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!selectedDay || !selectedTime}
                className="w-full bg-gradient-to-r from-medical-blue to-medical-green text-white py-4 rounded-lg font-bold text-lg hover:from-medical-dark hover:to-green-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                تأكيد الحجز
              </button>
            </form>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* Working Hours */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="w-12 h-12 bg-medical-green rounded-full flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">ساعات العمل</h3>
              </div>
              
              <div className="space-y-4">
                {workingDays.map((day, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-800">{day.day}</span>
                    <span className="text-medical-blue">10:00 ص - 6:00 م</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2 text-red-600">
                  <span className="font-medium">الجمعة</span>
                  <span>مغلق</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-medical-blue to-medical-green rounded-3xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">تواصل مباشر</h3>
              
              <div className="space-y-4">
                <a
                  href="tel:01012103567"
                  className="flex items-center space-x-3 space-x-reverse bg-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-white/30 transition-all"
                >
                  <Phone size={24} />
                  <div>
                    <div className="font-bold">01012103567</div>
                    <div className="text-sm opacity-90">للحجز والاستفسار</div>
                  </div>
                </a>

                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-2 space-x-reverse mb-2">
                    <CheckCircle size={20} />
                    <span className="font-medium">مزايا الحجز المسبق</span>
                  </div>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• توفير الوقت</li>
                    <li>• ضمان الموعد</li>
                    <li>• متابعة مخصصة</li>
                  </ul>
                </div>

                <div className="bg-orange-500/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-2 space-x-reverse mb-2">
                    <AlertCircle size={20} />
                    <span className="font-medium">للحالات الطارئة</span>
                  </div>
                  <p className="text-sm opacity-90">
                    في حالة الطوارئ الطبية، يرجى الاتصال فوراً أو التوجه لأقرب مستشفى
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointments;