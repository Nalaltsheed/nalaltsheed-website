(function(){
  // --- 1. Modal Logic ---
  const modals = document.querySelectorAll('.modal');
  const openers = document.querySelectorAll('[data-modal]');

  function openModal(id){
    const modal = document.getElementById(id);
    if(!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    const close = modal.querySelector('.modal-close');
    if(close) setTimeout(()=>close.focus(),40);
  }
  
  function closeModal(id){
    const modal = document.getElementById(id);
    if(!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    if(!document.querySelector('.modal.open')) document.body.classList.remove('modal-open');
  }

  openers.forEach(el=>el.addEventListener('click',()=>openModal(el.dataset.modal)));
  document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',()=>closeModal(el.dataset.close)));
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      const active=document.querySelector('.modal.open');
      if(active) closeModal(active.id);
    }
  });

  document.querySelectorAll('#profileModal [data-modal]').forEach(el=>{
    el.addEventListener('click',()=>{
      const target=el.dataset.modal;
      closeModal('profileModal');
      setTimeout(()=>openModal(target),120);
    });
  });

  // --- 2. Language Switcher (Translation Logic) ---
  const translations = {
    ar: {
      brand: "شركة نال التشيد",
      aboutNav: "عن الشركة",
      servicesNav: "خدماتنا",
      faqNav: "الأسئلة الشائعة",
      contactNav: "تواصل معنا",
      eyebrow: "NAL AL TSHEED COMPANY FOR ARCHITECTURAL CONTRACTING",
      heroTitle: "شركة <span>نال التشيد</span> للمقاولات المعمارية",
      heroCopy: "رائدون في تقديم الحلول المعمارية والإنشائية المتكاملة وفق أعلى معايير الجودة العالمية والدقة في التنفيذ.",
      contactBtn: "تواصل معنا",
      profileBtn: "الملف التعريفي",
      sec1Title: "خدماتنا ونطاق العمل",
      sec1Lead: "نقدم مجموعة شاملة من الخدمات الهندسية والإنشائية لتلبية تطلعات عملائنا في قطاع التشييد والمقاولات.",
      s1Title: "المقاولات العامة والتشييد",
      s2Title: "التصاميم والحلول المعمارية",
      s3Title: "إدارة وتوفير المعدات",
      sec2Title: "عن نال التشيد",
      a1Title: "رؤيتنا ورسالتنا",
      a1Text: "نسعى للارتقاء بقطاع المقاولات المعمارية من خلال اعتماد أحدث التقنيات الهندسية وأسطول معدات متطور لضمان تنفيذ المشاريع بأعلى جودة وفي المواعيد المحددة.",
      a2Title: "خبراتنا الميدانية",
      a2Text: "تمتلك الشركة سجلاً حافلاً بالنجاحات في تنفيذ وإدارة المشاريع المعمارية المتنوعة برؤية إنشائية مستدامة.",
      sec3Title: "الأسئلة الشائعة",
      f1Q: "ما هي الخدمات التي تقدمها شركة نال التشيد؟",
      f1A: "تقدم شركة نال التشيد خدمات المقاولات المعمارية العامة، والتشييد البنائي، والحلول الهندسية المتكاملة، إلى جانب إدارة وتأجير معدات التشييد البنائي.",
      f2Q: "أين تعمل شركة نال التشيد في السعودية؟",
      f2A: "تغطي خدماتنا كافة مناطق المملكة العربية السعودية مع توفير الإشراف الميداني الكامل وأسطول المعدات اللازم للمشاريع.",
      sec4Title: "تواصل معنا",
      sec4Lead: "سعداء بتواصلكم ومستعدون لمناقشة كافة تفاصيل مشروعكم القادم.",
      addrTitle: "العنوان والموقع",
      addrText: "SHAC3834، 3834 المهند، 8467، حي المحمدية، عرعر 73311، المملكة العربية السعودية",
      contactTitle: "بيانات الاتصال",
      rights: "جميع الحقوق محفوظة © شركة نال التشيد للمقاولات المعمارية"
    },
    en: {
      brand: "Nal Al Tsheed",
      aboutNav: "About Us",
      servicesNav: "Services",
      faqNav: "FAQ",
      contactNav: "Contact Us",
      eyebrow: "NAL AL TSHEED COMPANY FOR ARCHITECTURAL CONTRACTING",
      heroTitle: "<span>Nal Al Tsheed</span> Architectural Contracting",
      heroCopy: "Leaders in providing integrated architectural and construction solutions according to the highest international quality standards.",
      contactBtn: "Contact Us",
      profileBtn: "Company Profile",
      sec1Title: "Our Services & Scope",
      sec1Lead: "We offer a comprehensive range of engineering and construction services to meet our clients' aspirations.",
      s1Title: "General Contracting & Construction",
      s2Title: "Architectural Designs & Solutions",
      s3Title: "Equipment Management & Supply",
      sec2Title: "About Nal Al Tsheed",
      a1Title: "Our Vision & Mission",
      a1Text: "We strive to elevate the architectural contracting sector by adopting modern engineering technologies and an advanced equipment fleet.",
      a2Title: "Field Expertise",
      a2Text: "The company holds a proven track record of success in executing and managing diverse architectural projects.",
      sec3Title: "Frequently Asked Questions",
      f1Q: "What services does Nal Al Tsheed provide?",
      f1A: "Nal Al Tsheed provides general architectural contracting, building construction, integrated engineering solutions, and equipment fleet management.",
      f2Q: "Where does Nal Al Tsheed operate in Saudi Arabia?",
      f2A: "Our services cover all regions of the Kingdom of Saudi Arabia with full field supervision and necessary equipment.",
      sec4Title: "Contact Us",
      sec4Lead: "We are pleased to connect and ready to discuss all details of your next project.",
      addrTitle: "Address & Location",
      addrText: "SHAC3834, 3834 Al-Mohannad, 8467, Al-Muhammadiyah Dist., Arar 73311, KSA",
      contactTitle: "Contact Information",
      rights: "All Rights Reserved © Nal Al Tsheed Architectural Contracting Co."
    }
  };

  window.changeLanguage = function(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll('.lang-switch button').forEach(btn => {
      if(btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(lang)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  };

  // --- 3. Scroll Reveal & Navbar Animations ---
  document.addEventListener('DOMContentLoaded', () => {
    // إضافة كلاس الظهور الانسيابي للأقسام والكروت
    const revealElements = document.querySelectorAll('.section, .info-card, .service-grid article, .hero-content');
    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // تأثير الهيدر الزجاجي عند التمرير
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav?.classList.add('scrolled');
      } else {
        nav?.classList.remove('scrolled');
      }
    });
  });
})();
