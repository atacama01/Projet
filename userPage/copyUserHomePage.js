const translations = {
  en: {
    mindArena: "Mind Arena",
    welcomeText:
      "Welcome to mind arena, where you can explore exciting competitions, track your results, and manage your profile effortlessly.",
    home: "Home",
    competitions: "Competitions",
    competitionsDesc: "Explore schedules and join exciting competitions.",
    results: "Competition Results",
    resultsDesc: "Check results and rankings.",
    profile: "Profile",
    profileDesc: "View, edit your profile informations and view your competition.",
    report: "Report a Problem",
    reportDesc: "Report any issue to our team.",
    privacySecurity: "Privacy & Security",
    privacySecurityDesc: "Manage your privacy settings and security options.",
    logout: "Logout",
    settings: "Settings",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
  },
  ar: {
    mindArena: "ساحة العقل",
    welcomeText: "مرحبًا بك في ساحة العقل، حيث يمكنك استكشاف مسابقات مثيرة، تتبع نتائجك، وإدارة ملفك الشخصي بسهولة.",
    home: "الرئيسية",
    competitions: "المسابقات",
    competitionsDesc: "استكشف وشارك في مسابقات مثيرة.",
    results: "نتائج المسابقات",
    resultsDesc: "تحقق من النتائج والتصنيفات.",
    profile: "الملف الشخصي",
    profileDesc: "عرض معلومات ملفك الشخصي وتعديلها وعرض مسابقاتك.",
    report: "الإبلاغ عن مشكلة",
    reportDesc: "أبلغ عن أي مشكلة لفريقنا.",
    privacySecurity: "الخصوصية والأمان",
    privacySecurityDesc: "إدارة إعدادات الخصوصية وخيارات الأمان الخاصة بك.",
    logout: "تسجيل الخروج",
    settings: "الإعدادات",
    darkMode: "الوضع الداكن",
    lightMode: "الوضع الفاتح",
  },
}

function setLanguage(lang) {
  document.documentElement.lang = lang
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"

  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key")
    if (translations[lang][key]) {
      element.textContent = translations[lang][key]
    }
  })

  // Update placeholders for form elements
  if (document.getElementById("problem-title")) {
    document.getElementById("problem-title").placeholder =
      lang === "en" ? "Brief description of the issue" : "وصف موجز للمشكلة"
  }

  if (document.getElementById("problem-description")) {
    document.getElementById("problem-description").placeholder =
      lang === "en" ? "Please provide detailed information about the problem" : "يرجى تقديم معلومات مفصلة عن المشكلة"
  }

  // Update options in select element
  const selectElement = document.getElementById("problem-type")
  if (selectElement) {
    Array.from(selectElement.options).forEach((option) => {
      const key = option.getAttribute("data-key")
      if (key && translations[lang][key]) {
        option.textContent = translations[lang][key]
      }
    })
  }
}

function setLanguageWithHighlight(lang) {
  setLanguage(lang)

  document.getElementById("english-option").classList.remove("active")
  document.getElementById("arabic-option").classList.remove("active")

  if (lang === "en") {
    document.getElementById("english-option").classList.add("active")
  } else {
    document.getElementById("arabic-option").classList.add("active")
  }

  localStorage.setItem("lang", lang)
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode")
  const isDarkMode = document.body.classList.contains("dark-mode")
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled")
}

// Animate background objects
function animateBackgroundObjects() {
  const bgObjects = document.querySelectorAll(".bg-object")

  bgObjects.forEach((obj) => {
    // Add slight random movement to each object
    const randomX = Math.random() * 10 - 5 // Random value between -5 and 5
    const randomY = Math.random() * 10 - 5 // Random value between -5 and 5
    const randomRotate = Math.random() * 10 - 5 // Random rotation between -5 and 5 degrees

    // Apply the random movement with a transition
    obj.style.transition = "transform 15s ease-in-out"
    obj.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`

    // Reset after animation completes
    setTimeout(() => {
      obj.style.transition = "none"
      obj.style.transform = "translate(0, 0) rotate(0deg)"

      // Start the animation again after a short delay
      setTimeout(() => {
        animateBackgroundObjects()
      }, 100)
    }, 15000)
  })
}

// Document ready function
document.addEventListener("DOMContentLoaded", () => {
  // Start background animation
  animateBackgroundObjects()

  // Set active nav item
  const currentPath = window.location.pathname
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active")
    }
  })

  // Notification functionality
  const notificationButton = document.querySelector(".notification-button")
  const notificationDropdown = document.querySelector(".notification-dropdown")

  if (notificationButton && notificationDropdown) {
    notificationButton.addEventListener("click", (e) => {
      e.stopPropagation()
      notificationDropdown.style.display = notificationDropdown.style.display === "block" ? "none" : "block"
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
      notificationDropdown.style.display = "none"
    })

    notificationDropdown.addEventListener("click", (e) => {
      e.stopPropagation()
    })

    // Mark all as read functionality
    const markAllReadButton = document.querySelector(".mark-all-read")
    if (markAllReadButton) {
      markAllReadButton.addEventListener("click", () => {
        document.querySelectorAll(".notification-item.unread").forEach((item) => {
          item.classList.remove("unread")
        })

        const badge = document.querySelector(".notification-badge")
        if (badge) {
          badge.style.display = "none"
        }
      })
    }
  }

  // Settings button functionality - UPDATED to use the link instead of alert
  const settingsButton = document.querySelector(".settings-button")
  if (settingsButton) {
    // The link now handles the navigation, no need for click event
    // The button is now wrapped in an anchor tag
  }

  // Dark mode toggle functionality
  const darkModeToggle = document.querySelector(".dark-mode-toggle")
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode)

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem("darkMode")
    if (savedDarkMode === "enabled") {
      document.body.classList.add("dark-mode")
    }
  }

  // Menu toggle functionality for mobile
  const menuToggle = document.querySelector(".menu-toggle")
  const menuList = document.querySelector(".menu-list")

  if (menuToggle && menuList) {
    menuToggle.addEventListener("click", () => {
      menuList.classList.toggle("active")
    })

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!menuToggle.contains(e.target) && !menuList.contains(e.target)) {
        menuList.classList.remove("active")
      }
    })
  }

  // File input handling
  const fileInput = document.getElementById("problem-attachment")
  const fileNameDisplay = document.getElementById("file-name")

  if (fileInput && fileNameDisplay) {
    fileInput.addEventListener("change", () => {
      if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = fileInput.files[0].name
      } else {
        fileNameDisplay.textContent = ""
      }
    })
  }

  // Form submission
  const problemForm = document.getElementById("problem-form")
  const reportForm = document.getElementById("report-form")
  const successMessage = document.getElementById("success-message")
  const referenceNumber = document.getElementById("reference-number")

  if (problemForm && reportForm && successMessage && referenceNumber) {
    problemForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Generate a random reference number
      const refNum = "REF-" + Math.floor(Math.random() * 900000 + 100000)
      referenceNumber.textContent = refNum

      // Hide form and show success message
      reportForm.style.display = "none"
      successMessage.style.display = "block"

      // Scroll to top of success message
      successMessage.scrollIntoView({ behavior: "smooth" })
    })
  }

  // Set initial language
  const savedLang = localStorage.getItem("lang") || "en"
  setLanguageWithHighlight(savedLang)
})