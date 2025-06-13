import React from 'react';
import { Bone, Activity, Zap, Heart, Eye, Shield } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Bone,
      title: 'جراحة العظام',
      description: 'علاج كسور العظام والتشوهات الخلقية والمكتسبة بأحدث التقنيات الجراحية',
      features: ['كسور العظام', 'التشوهات الخلقية', 'جراحة العمود الفقري']
    },
    {
      icon: Activity,
      title: 'جراحة المفاصل',
      description: 'استبدال المفاصل الصناعية وعلاج آلام المفاصل المزمنة',
      features: ['المفاصل الصناعية', 'علاج الروماتيزم', 'تنظير المفاصل']
    },
    {
      icon: Zap,
      title: 'جراحة بالمنظار',
      description: 'جراحات طفيفة التوغل باستخدام المناظير الطبية المتطورة',
      features: ['تنظير الركبة', 'تنظير الكتف', 'الشفاء السريع']
    },
    {
      icon: Heart,
      title: 'إعادة التأهيل',
      description: 'برامج العلاج الطبيعي وإعادة التأهيل بعد العمليات الجراحية',
      features: ['العلاج الطبيعي', 'التأهيل الحركي', 'المتابعة المستمرة']
    },
    {
      icon: Eye,
      title: 'التشخيص المتقدم',
      description: 'استخدام أحدث تقنيات التشخيص الطبي والأشعة المقطعية',
      features: ['الأشعة المقطعية', 'الرنين المغناطيسي', 'التشخيص الدقيق']
    },
    {
      icon: Shield,
      title: 'الرعاية الطارئة',
      description: 'خدمات طبية طارئة على مدار الساعة لحالات الإصابات العاجلة',
      features: ['خدمة 24 ساعة', 'إسعافات أولية', 'تدخل سريع']
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">الخدمات والتخصصات</h2>
          <div className="w-24 h-1 bg-medical-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الطبية المتخصصة في جراحة العظام والمفاصل
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-medical-blue to-medical-green p-6 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-gray-700">
                      <div className="w-2 h-2 bg-medical-green rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full bg-gray-50 hover:bg-medical-blue hover:text-white text-gray-700 py-3 rounded-lg font-medium transition-all duration-300">
                  اعرف المزيد
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-medical-blue to-medical-green rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">هل تحتاج استشارة طبية؟</h3>
          <p className="text-xl mb-8 opacity-90">
            احجز موعدك الآن واحصل على أفضل رعاية طبية متخصصة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01012103567"
              className="bg-white text-medical-blue px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              اتصل الآن
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-medical-blue transform hover:scale-105 transition-all duration-300"
            >
              أرسل رسالة
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;