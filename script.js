const translations = {
    "en": {
        "page-title": "Nal Al Tsheed",
        "company-name": "Nal Al Tsheed",
        "nav-home": "Home", "nav-about": "About", "nav-services": "Services", "nav-projects": "Projects", "nav-contact": "Contact",
        "btn-lang": "عربي",
        "hero-title": "Welcome to Nal Al Tsheed", "hero-subtitle": "Building with quality",
        "btn-download": "Download Profile",
        "service-1-title": "General Contracting", "service-1-desc": "Top quality works.",
        "service-2-title": "Engineering", "service-2-desc": "Innovative solutions.",
        "service-3-title": "Equipment", "service-3-desc": "Heavy machinery fleet.",
        "quote-name": "Name", "quote-email": "Email", "quote-details": "Details", "btn-submit": "Send"
    },
    "ar": {
        "page-title": "شركة نال التشيد",
        "company-name": "شركة نال التشيد",
        "nav-home": "الرئيسية", "nav-about": "من نحن", "nav-services": "خدماتنا", "nav-projects": "مشاريعنا", "nav-contact": "اتصل بنا",
        "btn-lang": "English",
        "hero-title": "مرحباً بكم في شركة نال التشيد", "hero-subtitle": "نبني المستقبل بجودة واحترافية",
        "btn-download": "تحميل الملف التعريفي",
        "service-1-title": "المقاولات العامة", "service-1-desc": "تنفيذ بأعلى المعايير.",
        "service-2-title": "التصاميم الهندسية", "service-2-desc": "حلول هندسية مبتكرة.",
        "service-3-title": "المعدات الثقيلة", "service-3-desc": "إدارة أسطول معدات.",
        "quote-name": "الاسم", "quote-email": "البريد الإلكتروني", "quote-details": "تفاصيل الطلب", "btn-submit": "إرسال"
    }
};

function changeLanguage(lang) {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = translations[lang][el.getAttribute('data-i18n')] || el.textContent);
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => el.setAttribute('placeholder', translations[lang][el.getAttribute('data-i18n-placeholder')]));
    localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'ar';
    changeLanguage(savedLang);
    document.getElementById('lang-switch-btn').addEventListener('click', () => {
        changeLanguage(document.documentElement.getAttribute('lang') === 'ar' ? 'en' : 'ar');
    });
    document.getElementById('whatsapp-btn').addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://wa.me/966500000000', '_blank');
    });
});
