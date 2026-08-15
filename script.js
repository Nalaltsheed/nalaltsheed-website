document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Cost Estimator & Form Submission to Structured WhatsApp Message
  const estimatorForm = document.getElementById("estimatorForm");
  if (estimatorForm) {
    estimatorForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const service = document.getElementById("estService").value;
      const category = document.getElementById("estCategory").value;
      const quantity = document.getElementById("estQuantity").value || "غير محدودة";
      const city = document.getElementById("estCity").value;
      const name = document.getElementById("clientName").value;
      const phone = document.getElementById("clientPhone").value;
      const notes = document.getElementById("estNotes").value || "لا توجد ملاحظات إضافية";

      // Formatted Message for Engineers
      const waText = 
`📌 *طلب دراسة تكلفة ومقايسة جديد - شركة نال التشيد*
----------------------------------
👤 *العميل / الجهة:* ${name}
📞 *رقم الجوال:* ${phone}
📍 *المدينة / الموقع:* ${city}
🛠️ *نوع الخدمة المطلوبة:* ${service}
🏢 *تصنيف المشروع:* ${category}
📐 *المساحة / الكميات:* ${quantity}
📝 *ملاحظات وبنود إضافية:*
${notes}
----------------------------------
أرجو التواصل لتزويدي بالتقدير المالي والجدول الزمني.`;

      const encodedText = encodeURIComponent(waText);
      const waUrl = `https://wa.me/966552880208?text=${encodedText}`;
      
      window.open(waUrl, "_blank");
    });
  }

  // 2. Dynamic WhatsApp Floating Button (Adapts to Active Page Section)
  const waBtn = document.getElementById("dynamic-wa-btn");
  const waTooltip = document.getElementById("wa-tooltip");

  const sectionMessages = {
    "hero": {
      text: "مرحباً شركة نال التشيد، أود الاستفسار عن خدماتكم الإنشائية والمعمارية...",
      tooltip: "تواصل مع المكتب الرئيسي"
    },
    "services": {
      text: "مرحباً، أود الاستفسار عن نطاق خدمات التشييد والمقاولات العامة...",
      tooltip: "استفسر عن خدماتنا"
    },
    "gov-projects": {
      text: "مرحباً شركة نال التشيد، أود الاستفسار عن مشاريعكم الحكومية والتأهيل...",
      tooltip: "استفسار عن المشاريع الحكومية"
    },
    "equipment": {
      text: "مرحباً، أستفسر عن استئجار وأسطول معدات شركة نال التشيد...",
      tooltip: "تأجير واستفسار المعدات"
    },
    "estimator": {
      text: "مرحباً، أود المساعدة في تسعير جدول كميات (BOQ) لمشروعي...",
      tooltip: "احسب تكلفة مشروعك"
    },
    "contact": {
      text: "مرحباً شركة نال التشيد، أود التنسيق للاجتماع ومناقشة مشروع...",
      tooltip: "تواصل معنا مباشرة"
    }
  };

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        if (sectionMessages[sectionId]) {
          const msgData = sectionMessages[sectionId];
          waBtn.href = `https://wa.me/966552880208?text=${encodeURIComponent(msgData.text)}`;
          if (waTooltip) waTooltip.textContent = msgData.tooltip;
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll("section[id]").forEach(section => {
    sectionObserver.observe(section);
  });

  // 3. Modals and Lightbox Handling
  const modalTriggers = document.querySelectorAll("[data-modal]");
  const closeBtns = document.querySelectorAll("[data-close]");
  const lightboxTriggers = document.querySelectorAll(".lightbox-trigger");
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");

  modalTriggers.forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      const targetModal = document.getElementById(modalId);
      if (targetModal) targetModal.classList.add("active");
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close");
      const targetModal = document.getElementById(modalId);
      if (targetModal) targetModal.classList.remove("active");
    });
  });

  lightboxTriggers.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img") || item;
      const title = item.getAttribute("data-title") || img.alt || "";
      if (lightboxImg && lightboxModal) {
        lightboxImg.src = img.src;
        if (lightboxCaption) lightboxCaption.textContent = title;
        lightboxModal.classList.add("active");
      }
    });
  });

});

// 4. Language Switcher (AR/EN Support)
function changeLanguage(lang) {
  const btnAr = document.getElementById("btn-ar");
  const btnEn = document.getElementById("btn-en");

  if (lang === "en") {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
    btnEn.classList.add("active");
    btnAr.classList.remove("active");
  } else {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
    btnAr.classList.add("active");
    btnEn.classList.remove("active");
  }
}
