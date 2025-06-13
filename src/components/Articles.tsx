import React from 'react';
import { Calendar, User, ArrowLeft, Heart, Eye, BookOpen } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Articles = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const articles = [
    {
      title: 'أهمية العلاج الطبيعي بعد جراحة المفاصل',
      excerpt: 'تعرف على الدور الحيوي للعلاج الطبيعي في عملية الشفاء وكيفية تسريع التعافي بعد جراحة استبدال المفاصل.',
      image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '15 يناير 2024',
      readTime: '5 دقائق',
      category: 'العلاج الطبيعي'
    },
    {
      title: 'نصائح لتجنب إصابات العمود الفقري',
      excerpt: 'اكتشف الطرق الفعالة للحفاظ على صحة العمود الفقري وتجنب الآلام المزمنة من خلال النصائح الطبية المتخصصة.',
      image: 'https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '10 يناير 2024',
      readTime: '7 دقائق',
      category: 'الوقاية'
    },
    {
      title: 'متى تحتاج لجراحة استبدال الركبة؟',
      excerpt: 'دليل شامل لفهم الحالات التي تستدعي جراحة استبدال الركبة والتحضير للعملية والتعافي.',
      image: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '5 يناير 2024',
      readTime: '8 دقائق',
      category: 'جراحة المفاصل'
    },
    {
      title: 'تمارين آمنة لمرضى هشاشة العظام',
      excerpt: 'تعلم التمارين المناسبة والآمنة التي تساعد في تقوية العظام ومنع تفاقم هشاشة العظام.',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '1 يناير 2024',
      readTime: '6 دقائق',
      category: 'التمارين'
    },
    {
      title: 'التقنيات الحديثة في جراحة المناظير',
      excerpt: 'استكشف أحدث التطورات في تقنيات المناظير الطبية وكيف تقلل من أوقات التعافي.',
      image: 'https://images.pexels.com/photos/7659710/pexels-photo-7659710.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '28 ديسمبر 2023',
      readTime: '9 دقائق',
      category: 'التقنيات الحديثة'
    },
    {
      title: 'الإسعافات الأولية لكسور العظام',
      excerpt: 'معلومات حيوية حول كيفية التعامل مع كسور العظام والإسعافات الأولية الضرورية.',
      image: 'https://images.pexels.com/photos/6627021/pexels-photo-6627021.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '25 ديسمبر 2023',
      readTime: '4 دقائق',
      category: 'الطوارئ'
    }
  ];

  const categories = ['جميع المقالات', 'الوقاية', 'العلاج الطبيعي', 'جراحة المفاصل', 'التمارين', 'التقنيات الحديثة', 'الطوارئ'];

  return (
    <section id="articles" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">المقالات والنصائح الطبية</h2>
          <div className="w-24 h-1 bg-medical-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مقالات طبية متخصصة ونصائح مفيدة للحفاظ على صحة العظام والمفاصل
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full border-2 font-medium transition-all duration-300 ${
                index === 0 
                  ? 'bg-medical-blue text-white border-medical-blue' 
                  : 'border-gray-300 text-gray-600 hover:border-medical-blue hover:text-medical-blue'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {articles.map((article, index) => (
            <article
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-medical-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-medical-blue transition-colors leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Calendar size={16} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Eye size={16} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <button className="flex items-center space-x-2 space-x-reverse text-medical-blue hover:text-medical-green font-medium transition-colors group-hover:translate-x-1 transform duration-300">
                  <span>اقرأ المزيد</span>
                  <ArrowLeft size={16} className="rotate-180" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-br from-medical-blue to-medical-green rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen size={32} />
            </div>
            
            <h3 className="text-3xl font-bold mb-4">
              اشترك في النشرة الطبية
            </h3>
            
            <p className="text-xl mb-8 opacity-90">
              احصل على أحدث المقالات والنصائح الطبية المتخصصة في بريدك الإلكتروني
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-medical-blue px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                اشترك الآن
              </button>
            </div>

            <p className="text-sm mt-4 opacity-75">
              * لن نرسل لك رسائل مزعجة، فقط محتوى طبي مفيد
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;