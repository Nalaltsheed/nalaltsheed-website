// 1. قاموس الترجمة الكامل لجميع أجزاء الموقع
const translations = {
    "en": {
        "page-title": "Nal Al Tsheed for Architectural Contracting",
        "company-name": "Nal Al Tsheed",
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-services": "Services",
        "nav-projects": "Our Projects",
        "nav-equipment": "Equipment",
        "nav-faq": "FAQ",
        "nav-contact": "Contact Us",
        "btn-lang": "عربي",
        "about-badge": "01",
        "services-badge": "02",
        "projects-badge": "03",
        "equipment-badge": "04",
        "faq-badge": "05",
        "contact-badge": "06",
        "hero-title": "Welcome to Nal Al Tsheed for Architectural Contracting",
        "hero-subtitle": "Building the future with quality and professionalism",
        "btn-download": "Download Company Profile",
        "about-text": "We are a leading company in general contracting and engineering designs, committed to providing the best innovative and reliable services across the Kingdom.",
        "service-1-title": "General Contracting",
        "service-1-desc": "Executing all structural and architectural works with the highest quality standards.",
        "service-2-title": "Engineering Designs",
        "service-2-desc": "Integrated engineering solutions to suit all requirements.",
        "service-3-title": "Heavy Equipment Fleet Management",
        "service-3-desc": "Providing and managing the latest heavy equipment for major projects.",
        "project-1-title": "Educational Facilities Maintenance",
        "project-2-title": "Civil Defense Buildings Restoration",
        "eq-1-alt": "Equipment 1",
        "eq-2-alt": "Equipment 2",
        "quote-title": "Request a Quote / Cost Calculation",
        "quote-name-label": "Name",
        "quote-name": "Name",
        "quote-email-label": "Email",
        "quote-email": "Email",
        "quote-details-label": "Request Details",
        "quote-details": "Request Details",
        "btn-submit": "Submit Request",
        "faq-1-q": "Where is the company headquartered?",
        "faq-1-a": "The headquarters is located in Al-Mohammadiyah neighborhood, Arar.",
        "contact-email-text": "Email:",
        "contact-address-text": "Address:",
        "contact-address-val": "Al-Mohammadiyah, Arar, Saudi Arabia",
        "wa-title": "Contact Us"
    },
    "ar": {
        "page-title": "شركة نال التشيد للمقاولات المعمارية",
        "company-name": "شركة نال التشيد",
        "nav-home": "الرئيسية",
        "nav-about": "من نحن",
        "nav-services": "خدماتنا",
        "nav-projects": "مشاريعنا",
        "nav-equipment": "المعدات",
        "nav-faq": "الأسئلة الشائعة",
        "nav-contact": "اتصل بنا",
        "btn-lang": "English",
        "about-badge": "٠١",
        "services-badge": "٠٢",
        "projects-badge": "٠٣",
        "equipment-badge": "٠٤",
        "faq-badge": "٠٥",
        "contact-badge": "٠٦",
        "hero-title": "مرحباً بكم في شركة نال التشيد للمقاولات المعمارية",
        "hero-subtitle": "نبني المستقبل بجودة واحترافية",
        "btn-download": "تحميل الملف التعريفي",
        "about-text": "نحن شركة رائدة في مجال المقاولات العامة والتصاميم الهندسية، ملتزمون بتقديم أفضل الخدمات المبتكرة والموثوقة في جميع أنحاء المملكة.",
        "service-1-title": "المقاولات العامة",
        "service-1-desc": "تنفيذ جميع الأعمال الإنشائية والمعمارية بأعلى معايير الجودة.",
        "service-2-title": "التصاميم الهندسية",
        "service-2-desc": "حلول هندسية متكاملة تناسب جميع المتطلبات.",
        "service-3-title": "إدارة أسطول المعدات الثقيلة",
        "service-3-desc": "توفير وإدارة أحدث المعدات الثقيلة للمشاريع الكبرى.",
        "project-1-title": "صيانة المرافق التعليمية",
        "project-2-title": "ترميم مباني الدفاع المدني",
        "eq-1-alt": "معدة 1",
        "eq-2-alt": "معدة 2",
        "quote-title": "طلب عرض سعر / حساب التكلفة",
        "quote-name-label": "الاسم",
        "quote-name": "الاسم",
        "quote-email-label": "البريد الإلكتروني",
        "quote-email": "البريد الإلكتروني",
        "quote-details-label": "تفاصيل الطلب",
        "quote-details": "تفاصيل الطلب",
        "btn-submit": "إرسال الطلب",
        "faq-1-q": "أين يقع مقر الشركة؟",
        "faq-1-a": "يقع المقر الرئيسي في حي المحمدية بعرعر.",
        "contact-email-text": "البريد الإلكتروني:",
        "contact-address-text": "العنوان:",
        "contact-address-val": "حي المحمدية، عرعر، المملكة العربية السعودية",
        "wa-title": "تواصل معنا"
    }
};

// 2. دالة تغيير اللغة والاتجاه والنصوص المختلفة
function changeLanguage(lang) {
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    const alts = document.querySelectorAll('[data-i18n-alt]');
    alts.forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('alt', translations[lang][key]);
        }
    });

    localStorage.setItem('preferredLanguage', lang);
}

// 3. تفعيل الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'ar'; 
    changeLanguage(savedLang);

    const langBtn = document.getElementById('lang-switch-btn'); 
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLang = document.documentElement.getAttribute('lang');
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            changeLanguage(newLang);
        });
    }

    // زر الواتساب التفاعلي
    const waBtn = document.getElementById('whatsapp-btn');
    if (waBtn) {
        const phoneNumber = "966500000000"; 
        waBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLang = document.documentElement.getAttribute('lang');
            const msg = currentLang === 'ar' ? "مرحباً، أود الاستفسار عن خدماتكم." : "Hello, I would like to inquire about your services.";
            const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
            window.open(waUrl, '_blank');
        });
    }

    // معرض الصور Lightbox
    const modal = document.getElementById("lightbox");
    const modalImg = document.getElementById("lightbox-img");
    const images = document.querySelectorAll(".lightbox-img");
    const closeBtn = document.querySelector(".modal-close");
    const modalOverlay = document.querySelector(".modal-overlay");

    if (modal && modalImg && images.length > 0) {
        images.forEach(img => {
            img.addEventListener('click', function() {
                modal.classList.add("active");
                modalImg.src = this.src;
            });
        });

        const closeModal = () => {
            modal.classList.remove("active");
        };

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    }
});
