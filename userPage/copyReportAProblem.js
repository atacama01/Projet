const translations = {
  en: {
    mindArena: "Mind Arena",
    home: "Home",
    competitions: "Competitions",
    challenges: "Challenges",
    leaderboard: "Leaderboard",
    profile: "Profile",
    settings: "Settings",
    help: "Help",
    reportProblemTitle: "Report A Problem",
    helpTitle: "We're Here to Help",
    helpText: "We value your feedback and are committed to resolving any issues you encounter. Please provide details about the problem, and our team will address it promptly.",
    supportHours: "Support hours: 24/7",
    problemDetails: "Problem Details",
    problemType: "Problem Type",
    selectProblemType: "-- Select Problem Type --",
    technical: "Technical Issue",
    account: "Account Problem",
    competitionIssue: "Competition Issue",
    payment: "Payment Problem",
    other: "Other",
    problemTitle: "Problem Title",
    problemDescription: "Problem Description",
    whenOccurred: "When did this occur?",
    attachScreenshot: "Attach Screenshot (optional)",
    chooseFile: "Choose File",
    priority: "Priority",
    low: "Low",
    medium: "Medium",
    high: "High",
    cancel: "Cancel",
    submitReport: "Submit Report",
    thankYou: "Thank You!",
    reportReceived: "Your report has been received. Our team will review it and respond as soon as possible.",
    referenceNumber: "Reference Number:",
    backToDashboard: "Back to Dashboard",
    logout: "Logout"
  },
  ar: {
    mindArena: "ساحة العقل",
    home: "الرئيسية",
    competitions: "المسابقات",
    challenges: "التحديات",
    leaderboard: "لوحة المتصدرين",
    profile: "الملف الشخصي",
    settings: "الإعدادات",
    help: "المساعدة",
    reportProblemTitle: "الإبلاغ عن مشكلة",
    helpTitle: "نحن هنا للمساعدة",
    helpText: "نحن نقدر ملاحظاتك ونلتزم بحل أي مشكلات تواجهها. يرجى تقديم تفاصيل حول المشكلة، وسيقوم فريقنا بمعالجتها على الفور.",
    supportHours: "ساعات الدعم: على مدار الساعة",
    problemDetails: "تفاصيل المشكلة",
    problemType: "نوع المشكلة",
    selectProblemType: "-- اختر نوع المشكلة --",
    technical: "مشكلة تقنية",
    account: "مشكلة في الحساب",
    competitionIssue: "مشكلة في المسابقة",
    payment: "مشكلة في الدفع",
    other: "أخرى",
    problemTitle: "عنوان المشكلة",
    problemDescription: "وصف المشكلة",
    whenOccurred: "متى حدثت المشكلة؟",
    attachScreenshot: "إرفاق لقطة شاشة (اختياري)",
    chooseFile: "اختر ملف",
    priority: "الأولوية",
    low: "منخفضة",
    medium: "متوسطة",
    high: "عالية",
    cancel: "إلغاء",
    submitReport: "إرسال التقرير",
    thankYou: "شكراً لك!",
    reportReceived: "تم استلام تقريرك. سيقوم فريقنا بمراجعته والرد في أقرب وقت ممكن.",
    referenceNumber: "رقم المرجع:",
    backToDashboard: "العودة إلى لوحة التحكم",
    logout: "تسجيل الخروج"
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.getAttribute("data-key");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update placeholders for form elements
  if (document.getElementById('problem-title')) {
    document.getElementById('problem-title').placeholder = lang === 'en' ? 
      "Brief description of the issue" : "وصف موجز للمشكلة";
  }
  
  if (document.getElementById('problem-description')) {
    document.getElementById('problem-description').placeholder = lang === 'en' ? 
      "Please provide detailed information about the problem" : "يرجى تقديم معلومات مفصلة عن المشكلة";
  }
  
  // Update options in select element
  const selectElement = document.getElementById('problem-type');
  if (selectElement) {
    Array.from(selectElement.options).forEach(option => {
      const key = option.getAttribute('data-key');
      if (key && translations[lang][key]) {
        option.textContent = translations[lang][key];
      }
    });
  }
}

function setLanguageWithHighlight(lang) {
  setLanguage(lang);
  
  document.getElementById("english-option").classList.remove("active");
  document.getElementById("arabic-option").classList.remove("active");

  if (lang === "en") {
    document.getElementById("english-option").classList.add("active");
  } else {
    document.getElementById("arabic-option").classList.add("active");
  }

  localStorage.setItem("lang", lang);
}

// Animate background objects
function animateBackgroundObjects() {
  const objects = document.querySelectorAll('.animated-object');
  
  objects.forEach(obj => {
    // Add random movement
    const randomX = Math.random() * 10 - 5; // Random value between -5 and 5
    const randomY = Math.random() * 10 - 5;
    
    obj.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // Reset after animation completes
    setTimeout(() => {
      obj.style.transform = '';
    }, 5000);
  });
  
  // Call function again after delay
  setTimeout(animateBackgroundObjects, 7000);
}

// Toggle notification dropdown
document.addEventListener('DOMContentLoaded', function() {
  // Start background animation
  animateBackgroundObjects();
  
  // Set active nav item
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
  
  const notificationButton = document.querySelector('.notification-button');
  const notificationDropdown = document.querySelector('.notification-dropdown');
  
  if (notificationButton && notificationDropdown) {
    notificationButton.addEventListener('click', function(e) {
      e.stopPropagation();
      notificationDropdown.style.display = notificationDropdown.style.display === 'block' ? 'none' : 'block';
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
      notificationDropdown.style.display = 'none';
    });
    
    notificationDropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    
    // Mark all as read functionality
    const markAllReadButton = document.querySelector('.mark-all-read');
    if (markAllReadButton) {
      markAllReadButton.addEventListener('click', function() {
        document.querySelectorAll('.notification-item.unread').forEach(item => {
          item.classList.remove('unread');
        });
        
        const badge = document.querySelector('.notification-badge');
        if (badge) {
          badge.style.display = 'none';
        }
      });
    }
  }
  
  // Logout button functionality
  const logoutButton = document.querySelector('.logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', function() {
      // You can replace this with actual logout logic
      alert('Logging out...');
      // window.location.href = 'login.html';
    });
  }
  
  // File input handling
  const fileInput = document.getElementById('problem-attachment');
  const fileNameDisplay = document.getElementById('file-name');
  
  if (fileInput && fileNameDisplay) {
    fileInput.addEventListener('change', function() {
      if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = fileInput.files[0].name;
      } else {
        fileNameDisplay.textContent = '';
      }
    });
  }
  
  // Form submission
  const problemForm = document.getElementById('problem-form');
  const reportForm = document.getElementById('report-form');
  const successMessage = document.getElementById('success-message');
  const referenceNumber = document.getElementById('reference-number');
  
  if (problemForm && reportForm && successMessage && referenceNumber) {
    problemForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Generate a random reference number
      const refNum = 'REF-' + Math.floor(Math.random() * 900000 + 100000);
      referenceNumber.textContent = refNum;
      
      // Hide form and show success message
      reportForm.style.display = 'none';
      successMessage.style.display = 'block';
      
      // Scroll to top of success message
      successMessage.scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // Set initial language
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguageWithHighlight(savedLang);
});