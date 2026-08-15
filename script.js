// 1. قاموس الترجمة الكامل لجميع أجزاء الموقع
const translations = {
    "en": {
        "page-title": "Nal Al Tsheed for Architectural Contracting",
        "company-name": "Nal Al Tsheed Company",
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-services": "Services",
        "nav-projects": "Our Projects",
        "nav-equipment": "Equipment",
        "nav-faq": "FAQ",
        "nav-contact": "Contact Us",
        "btn-lang": "عربي",
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
        "quote-name": "Name",
        "quote-email": "Email",
        "quote-details": "Request Details",
        "btn-submit": "Submit Request",
        "faq-1-q": "Where is the company headquartered?",
        "faq-1-a": "The headquarters is located in Al-Mohammadiyah neighborhood, Arar.",
        "contact-email-text": "Email:",
        "contact-address-text": "Address:",
        "contact-address-val": "Al-Mohammadiyah, Arar, Saudi Arabia",
        "wa-title": "Contact us on WhatsApp"
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
        "quote-name": "الاسم",
        "quote-email": "البريد الإلكتروني",
        "quote-details": "تفاصيل الطلب",
        "btn-submit": "إرسال الطلب",
        "faq-1-q": "أين يقع مقر الشركة؟",
        "faq-1-a": "يقع المقر الرئيسي في حي المحمدية بعرعر.",
        "contact-email-text": "البريد الإلكتروني:",
        "contact-address-text": "العنوان:",
        "contact-address-val": "حي المحمدية، عرعر، المملكة العربية السعودية",
        "wa-title": "تواصل معنا عبر واتساب"
    }
};

// 2. دالة تغيير اللغة والاتجاه والنصوص المختلفة
function changeLanguage(lang) {
    // تغيير اتجاه الصفحة
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    }

    // استبدال النصوص العادية
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // استبدال النصوص داخل صناديق الإدخال (Placeholders)
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // استبدال النصوص البديلة للصور (Alt text)
    const alts = document.querySelectorAll('[data-i18n-alt]');
    alts.forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('alt', translations[lang][key]);
        }
    });
    
    // استبدال نصوص العناوين (Titles)
    const titles = document.querySelectorAll('[data-i18n-title]');
    titles.forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('title', translations[lang][key]);
        }
    });

    // حفظ تفضيل المستخدم للغة
    localStorage.setItem('preferredLanguage', lang);
}

// 3. تفعيل الأكواد والوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // تفعيل اللغة المحفوظة أو العربية افتراضياً
    const savedLang = localStorage.getItem('preferredLanguage') || 'ar'; 
    changeLanguage(savedLang);

    // تفعيل زر تغيير اللغة
    const langBtn = document.getElementById('lang-switch-btn'); 
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLang = document.documentElement.getAttribute('lang');
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            changeLanguage(newLang);
        });
    }

    // برمجة زر الواتساب التفاعلي لإرسال رسائل مخصصة حسب اللغة
    const waBtn = document.getElementById('whatsapp-btn');
    if (waBtn) {
        // يمكنك تغيير هذا الرقم لرقم الواتساب الخاص بالشركة
        const phoneNumber = "966553880208"; 
        waBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentLang = document.documentElement.getAttribute('lang');
            const msg = currentLang === 'ar' ? "مرحباً، أود الاستفسار عن خدماتكم." : "Hello, I would like to inquire about your services.";
            const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
            window.open(waUrl, '_blank');
        });
    }

    // برمجة معرض الصور وتكبيرها (Lightbox)
    const modal = document.getElementById("lightbox");
    const modalImg = document.getElementById("lightbox-img");
    const images = document.querySelectorAll(".lightbox-img");
    const closeBtn = document.querySelector(".close-lightbox");

    if (modal && modalImg && images.length > 0) {
        images.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "block";
                modalImg.src = this.src;
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = "none";
            });
        }
        
        // إغلاق الصورة عند الضغط خارجها
        modal.addEventListener('click', (e) => {
            if(e.target !== modalImg) {
                modal.style.display = "none";
            }
        });
    }
});
