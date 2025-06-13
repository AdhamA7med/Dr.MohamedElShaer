import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { icon: Award, number: '15+', label: 'سنة خبرة' },
    { icon: Users, number: '2000+', label: 'مريض سعيد' },
    { icon: Clock, number: '500+', label: 'عملية جراحية' },
    { icon: Shield, number: '98%', label: 'معدل نجاح' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">من هو د. محمد الشاعر؟</h2>
          <div className="w-24 h-1 bg-medical-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            طبيب متخصص في جراحة العظام والمفاصل مع خبرة واسعة في أحدث التقنيات الطبية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="د. محمد الشاعر"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/20 to-transparent rounded-3xl"></div>
          </div>

          {/* Content */}
          <div className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`} ref={ref}>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              خبرة طبية متميزة في خدمتكم
            </h3>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                د. محمد الشاعر هو استشاري جراحة العظام والمفاصل مع خبرة تزيد عن 15 عاماً في هذا المجال. 
                يتمتع بسمعة طيبة في تقديم أفضل الخدمات الطبية المتخصصة.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                حاصل على درجة الماجستير في جراحة العظام من جامعة القاهرة، ولديه شهادات متخصصة في 
                جراحة المفاصل الصناعية وجراحة المناظير.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                يؤمن د. محمد الشاعر بأهمية التطوير المستمر ومواكبة أحدث التطورات في مجال جراحة العظام، 
                مما يضمن حصول مرضاه على أفضل مستوى من الرعاية الطبية.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <h4 className="font-semibold text-medical-blue mb-2">التخصص الأساسي</h4>
                <p className="text-gray-600">جراحة العظام والمفاصل</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-md">
                <h4 className="font-semibold text-medical-blue mb-2">المؤهلات</h4>
                <p className="text-gray-600">ماجستير جراحة العظام</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-medical-blue to-medical-green rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;