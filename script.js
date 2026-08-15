// 1. قاموس الترجمة (النصوص العربية وما يقابلها بالإنجليزية)
// يمكنك إضافة أي كلمات أو جمل أخرى للموقع هنا بنفس الطريقة
const translations = {
    "en": {
        "company-name": "Nal Al Tsheed Company",
        "company-desc": "Nal Al Tsheed for Trading and Contracting",
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-services": "Services",
        "nav-projects": "Our Projects",
        "nav-equipment": "Equipment",
        "nav-faq": "FAQ",
        "nav-contact": "Contact Us",
        "hero-title": "Welcome to Nal Al Tsheed",
        "btn-lang": "عربي"
    },
    "ar": {
        "company-name": "شركة نال التشيد",
        "company-desc": "شركة نال التشيد للتجارة والمقاولات",
        "nav-home": "الرئيسية",
        "nav-about": "من نحن",
        "nav-services": "خدماتنا",
        "nav-projects": "مشاريعنا",
        "nav-equipment": "المعدات",
        "nav-faq": "الأسئلة الشائعة",
        "nav-contact": "اتصل بنا",
        "hero-title": "مرحباً بكم في شركة نال التشيد",
        "btn-lang": "English"
    }
};

// 2. الدالة المسؤولة عن تغيير اللغة والاتجاه والنصوص
function changeLanguage(lang) {
    // أ- تغيير اتجاه الصفحة (RTL للعربي و LTR للإنجليزي)
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    }

    // ب- البحث عن كل العناصر التي تحتوي على الخاصية data-i18n وتحديث نصها
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        // التأكد من وجود المفتاح في القاموس للغة المطلوبة
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // ج- حفظ اللغة المختارة في المتصفح لتبقى حتى لو قام الزائر بتحديث الصفحة
    localStorage.setItem('preferredLanguage', lang);
}

// 3. تفعيل الكود عند تحميل الصفحة وربطه بزر تغيير اللغة
document.addEventListener('DOMContentLoaded', () => {
    // جلب اللغة المحفوظة أو استخدام العربية كلغة افتراضية
    const savedLang = localStorage.getItem('preferredLanguage') || 'ar'; 
    changeLanguage(savedLang);

    // ربط زر تغيير اللغة
    // تأكد أن الـ ID الخاص بزر اللغة في ملف HTML هو "lang-switch-btn"
    const langBtn = document.getElementById('lang-switch-btn'); 
    
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault(); // منع إعادة تحميل الصفحة عند الضغط
            const currentLang = document.documentElement.getAttribute('lang');
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            changeLanguage(newLang);
        });
    }
});
