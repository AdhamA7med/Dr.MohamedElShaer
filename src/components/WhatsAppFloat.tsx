import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("مرحباً د. محمد الشاعر، أود الاستفسار عن خدماتكم الطبية");
    window.open(`https://wa.me/201012103567?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-lg p-3 mb-2 animate-fade-in-up max-w-xs">
          <div className="text-sm text-gray-800 font-medium mb-1">
            مرحباً! 👋
          </div>
          <div className="text-xs text-gray-600">
            هل تحتاج مساعدة؟ تواصل معنا عبر واتساب
          </div>
          <div className="absolute bottom-[-6px] left-4 w-3 h-3 bg-white transform rotate-45"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="relative bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce-gentle"
        title="تواصل معنا عبر واتساب"
      >
        <MessageCircle size={28} />
        
        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
      </button>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs transition-colors"
        title="إخفاء"
      >
        <X size={12} />
      </button>
    </div>
  );
};

export default WhatsAppFloat;