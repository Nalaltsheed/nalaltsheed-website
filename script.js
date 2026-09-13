document.addEventListener('DOMContentLoaded', () => {
    
    // 1. نظام النوافذ المنبثقة (Modals)
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modalClosers = document.querySelectorAll('[data-close]');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.getAttribute('data-modal');
            document.getElementById(modalId).classList.add('active');
        });
    });

    modalClosers.forEach(closer => {
        closer.addEventListener('click', (e) => {
            const modalId = closer.getAttribute('data-close');
            document.getElementById(modalId).classList.remove('active');
        });
    });

    // 2. نظام تكبير الصور (Lightbox)
    const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    lightboxTriggers.forEach(img => {
        img.addEventListener('click', () => {
            const src = img.getAttribute('src');
            const title = img.getAttribute('data-title') || '';
            lightboxImg.setAttribute('src', src);
            lightboxCaption.textContent = title;
            document.getElementById('lightboxModal').classList.add('active');
        });
    });

    // 3. تأثير الظهور التدريجي عند التمرير (Fade-in on scroll)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// 4. تغيير اللغة (تحكم الواجهة)
function changeLanguage(lang) {
    const btnAr = document.getElementById('btn-ar');
    const btnEn = document.getElementById('btn-en');
    
    if (lang === 'en') {
        btnEn.classList.add('active');
        btnAr.classList.remove('active');
        document.documentElement.setAttribute('dir', 'ltr');
        // هنا يمكن ربط ملف الترجمة الخاص بك لاحقاً
    } else {
        btnAr.classList.add('active');
        btnEn.classList.remove('active');
        document.documentElement.setAttribute('dir', 'rtl');
    }
}
