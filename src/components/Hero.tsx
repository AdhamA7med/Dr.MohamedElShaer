import React from 'react';
import { Phone, Calendar, MapPin, ArrowLeft } from 'lucide-react';
import doctorImage from '../img/mooo.jpg';


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="text-medical-blue">د. محمد الشاعر</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-medical-green">
                استشاري جراحة العظام والمفاصل
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              خبرة واسعة في جراحة العظام والمفاصل مع أحدث التقنيات الطبية. 
              نحن هنا لنساعدك في الحصول على أفضل رعاية طبية متخصصة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="tel:01012103567"
                className="inline-flex items-center justify-center space-x-2 space-x-reverse bg-medical-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-medical-dark transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                <span>اتصل الآن</span>
              </a>
              
              <a
                href="#appointments"
                className="inline-flex items-center justify-center space-x-2 space-x-reverse bg-medical-green text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Calendar size={20} />
                <span>احجز موعد</span>
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-2 space-x-reverse text-gray-600">
              <MapPin size={20} className="text-medical-blue" />
              <span className="text-lg">العيادة: مصر الجديدة، القاهرة</span>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-medical-light to-blue-50 rounded-3xl shadow-2xl overflow-hidden">
{/*                 <img
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="د. محمد الشاعر - استشاري جراحة العظام"
                  className="w-full h-full object-cover"
                /> */}

                <img
  src={doctorImage}
  alt="د. محمد الشاعر - استشاري جراحة العظام"
  className="w-full h-full object-cover"
/>

              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg animate-bounce-gentle">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <div className="w-3 h-3 bg-medical-green rounded-full"></div>
                  <span className="text-sm font-medium">متاح الآن</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg animate-pulse-soft">
                <div className="text-center">
                  <div className="text-2xl font-bold text-medical-blue">15+</div>
                  <div className="text-sm text-gray-600">سنة خبرة</div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -z-10 top-10 left-10 w-72 h-72 bg-medical-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-10 right-10 w-64 h-64 bg-medical-green/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
