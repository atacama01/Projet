// Initialize language
let currentLanguage = localStorage.getItem("lang") || "en"

// DOM Elements
const backgroundObjects = document.getElementById("backgroundObjects")
const notificationBtn = document.getElementById("notificationBtn")
const notificationDropdown = document.getElementById("notificationDropdown")
const englishOption = document.getElementById("english-option")
const arabicOption = document.getElementById("arabic-option")
const searchBar = document.getElementById("search-bar")
const headerSearch = document.getElementById("headerSearch")
const competitionCards = document.querySelectorAll(".competition-card")
const settingsBtn = document.getElementById("settingsBtn")

// Translations object
const translations = {
  en: {
    mindArena: "Mind Arena",
    welcomeText:
      "Welcome to mind arena, where you can explore exciting competitions, track your results, and manage your profile effortlessly. Stay engaged with new challenges, monitor your progress, and connect with a competitive community. Enjoy a seamless experience designed to enhance your journey!",
    competitions: "Competitions",
    competitionsDesc: "Explore and join exciting competitions.",
    results: "Competition Results",
    resultsDesc: "Check results and rankings.",
    profile: "Profile",
    profileDesc: "View, edit your profile informations and view your competition",
    report: "Report a Problem",
    reportDesc: "Report any issue to our team.",
    iqTest: "IQ Test",
    iqTestDesc: "Challenge yourself with an IQ test and check schedule for tests.",
    logout: "Logout",
    home: "Home",
    search: "Search...",
    searchPlaceholder: "Search competitions...",
    notifications: "Notifications",
    markAllRead: "Mark all as read",
    noNotifications: "No new notifications",
    newCompetition: "New competition available: Math Challenge",
    resultsReady: "Your IQ test results are ready",
    newBadge: "You've earned a new badge!",
    mathChallenge: "Math Challenge",
    mathDesc: "Test your skills in a thrilling math competition.",
    logicPuzzle: "Logic Puzzle",
    logicDesc: "Challenge yourself with tough logic puzzles.",
    memoryGame: "Memory Game",
    memoryDesc: "Train your memory and beat the competition.",
    starts: "Starts",
    prize: "Prize",
    competitionsIntro:
      "Explore exciting competitions and challenges to test your skills and win amazing prizes. Join now and compete with others!",
    settings: "Settings",
    perplexity: "Perplexity",
    perplexityChallenge: "Perplexity Challenge",
    perplexityDesc: "Solve mind-bending puzzles that challenge your perception.",
  },
  ar: {
    mindArena: "ساحة العقل",
    welcomeText:
      "مرحبًا بك في ساحة العقل، حيث يمكنك استكشاف مسابقات مثيرة، تتبع نتائجك، وإدارة ملفك الشخصي بسهولة. ابقَ متحمسًا مع تحديات جديدة، راقب تقدمك، وتواصل مع مجتمع تنافسي. استمتع بتجربة سلسة مصممة لتعزيز رحلتك!",
    competitions: "المسابقات",
    competitionsDesc: "استكشف وشارك في مسابقات مثيرة.",
    results: "نتائج المسابقات",
    resultsDesc: "تحقق من النتائج والتصنيفات.",
    profile: "الملف الشخصي",
    profileDesc: "عرض معلومات ملفك الشخصي وتعديلها وعرض مسابقاتك.",
    report: "الإبلاغ عن مشكلة",
    reportDesc: "أبلغ عن أي مشكلة لفريقنا.",
    iqTest: "اختبار الذكاء",
    iqTestDesc: "اختبر نفسك في الذكاء.",
    logout: "تسجيل الخروج",
    home: "الرئيسية",
    search: "بحث...",
    searchPlaceholder: "البحث في المسابقات...",
    notifications: "الإشعارات",
    markAllRead: "تعليم الكل كمقروء",
    noNotifications: "لا توجد إشعارات جديدة",
    newCompetition: "مسابقة جديدة متاحة: تحدي الرياضيات",
    resultsReady: "نتائج اختبار الذكاء جاهزة",
    newBadge: "لقد حصلت على شارة جديدة!",
    mathChallenge: "تحدي الرياضيات",
    mathDesc: "اختبر مهاراتك في مسابقة رياضيات مثيرة.",
    logicPuzzle: "لغز منطقي",
    logicDesc: "تحدى نفسك مع ألغاز منطقية صعبة.",
    memoryGame: "لعبة الذاكرة",
    memoryDesc: "درب ذاكرتك وتغلب على المنافسة.",
    starts: "يبدأ",
    prize: "الجائزة",
    competitionsIntro:
      "استكشف المسابقات والتحديات المثيرة لاختبار مهاراتك والفوز بجوائز رائعة. انضم الآن وتنافس مع الآخرين!",
    settings: "الإعدادات",
    perplexity: "الحيرة",
    perplexityChallenge: "تحدي الحيرة",
    perplexityDesc: "حل الألغاز المذهلة التي تتحدى إدراكك.",
  },
}

// Set initial language
setLanguageWithHighlight(currentLanguage)

// Event Listeners
englishOption.addEventListener("click", () => setLanguageWithHighlight("en"))
arabicOption.addEventListener("click", () => setLanguageWithHighlight("ar"))
notificationBtn.addEventListener("click", toggleNotifications)
searchBar.addEventListener("input", filterCompetitions)
headerSearch.addEventListener("input", (e) => {
  searchBar.value = e.target.value
  filterCompetitions()
})
settingsBtn.addEventListener("click", openSettings)

// Initialize background animation
initBackgroundAnimation()

// Add mouse move effect for background objects
window.addEventListener("mousemove", handleMouseMove)

// Functions
function setLanguageWithHighlight(lang) {
  document.documentElement.lang = lang
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  currentLanguage = lang
  localStorage.setItem("lang", lang)

  // Update UI language indicators
  englishOption.classList.toggle("active", lang === "en")
  arabicOption.classList.toggle("active", lang === "ar")

  // Update all text elements with translations
  updateTranslations()
}

function updateTranslations() {
  const elements = document.querySelectorAll("[data-key]")
  elements.forEach((element) => {
    const key = element.getAttribute("data-key")
    if (translations[currentLanguage][key]) {
      if (element.tagName === "INPUT") {
        element.placeholder = translations[currentLanguage][key]
      } else {
        element.textContent = translations[currentLanguage][key]
      }
    }
  })
}

function toggleNotifications(e) {
  e.stopPropagation()
  notificationDropdown.classList.toggle("show")

  // Close dropdown when clicking outside
  if (notificationDropdown.classList.contains("show")) {
    document.addEventListener("click", closeNotificationsOnClickOutside)
  } else {
    document.removeEventListener("click", closeNotificationsOnClickOutside)
  }
}

function closeNotificationsOnClickOutside(event) {
  if (!notificationBtn.contains(event.target) && !notificationDropdown.contains(event.target)) {
    notificationDropdown.classList.remove("show")
    document.removeEventListener("click", closeNotificationsOnClickOutside)
  }
}

function filterCompetitions() {
  const searchQuery = searchBar.value.toLowerCase()

  competitionCards.forEach((card) => {
    const title = card.querySelector("h2").textContent.toLowerCase()
    const description = card.querySelector("p").textContent.toLowerCase()
    const isMatch = title.includes(searchQuery) || description.includes(searchQuery)

    card.parentElement.style.display = isMatch ? "block" : "none"
  })
}

function handleMouseMove(e) {
  if (!backgroundObjects) return

  const objects = backgroundObjects.querySelectorAll(".bg-object")
  const mouseX = e.clientX
  const mouseY = e.clientY

  objects.forEach((obj, index) => {
    const speed = 0.05 - index * 0.01 // Different speeds for different objects
    const x = (window.innerWidth / 2 - mouseX) * speed
    const y = (window.innerHeight / 2 - mouseY) * speed

    // Apply the movement with the existing animation
    obj.style.transform = `translate(${x}px, ${y}px)`
  })
}

function initBackgroundAnimation() {
  if (!backgroundObjects) return

  const objects = backgroundObjects.querySelectorAll(".bg-object")
  objects.forEach((obj) => {
    // Start the animation
    animateBackgroundObjects()
  })
}

function animateBackgroundObjects() {
  const bgObjects = document.querySelectorAll(".bg-object")

  bgObjects.forEach((obj) => {
    // Add slight random movement to each object
    const randomX = Math.random() * 15 - 7.5 // Random value between -7.5 and 7.5
    const randomY = Math.random() * 15 - 7.5 // Random value between -7.5 and 7.5
    const randomRotate = Math.random() * 15 - 7.5 // Random rotation between -7.5 and 7.5 degrees
    const randomScale = 1 + (Math.random() * 0.2 - 0.1) // Random scale between 0.9 and 1.1

    // Apply the random movement with a transition
    obj.style.transition = "transform 15s ease-in-out"
    obj.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(${randomScale})`

    // Reset after animation completes
    setTimeout(() => {
      obj.style.transition = "none"
      obj.style.transform = "translate(0, 0) rotate(0deg) scale(1)"

      // Start the animation again after a short delay
      setTimeout(() => {
        animateBackgroundObjects()
      }, 100)
    }, 15000)
  })
}

// Mark all notifications as read
document.querySelector(".mark-all-read")?.addEventListener("click", () => {
  document.querySelectorAll(".notification-item.unread").forEach((item) => {
    item.classList.remove("unread")
  })

  const badge = document.querySelector(".notification-badge")
  if (badge) {
    badge.style.display = "none"
  }
})

function openSettings() {
  // Placeholder for settings functionality
  alert("Settings panel will be implemented in a future update.")
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Set initial language
  const savedLang = localStorage.getItem("lang") || "en"
  setLanguageWithHighlight(savedLang)

  // Start background animation
  initBackgroundAnimation()
})
