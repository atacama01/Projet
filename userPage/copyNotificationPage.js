// DOM Elements
const backgroundObjects = document.getElementById("backgroundObjects")
const englishOption = document.getElementById("english-option")
const arabicOption = document.getElementById("arabic-option")
const filterButtons = document.querySelectorAll(".filter-btn")
const clearAllBtn = document.getElementById("clearAllBtn")
const notificationsList = document.getElementById("notificationsList")
const emptyState = document.getElementById("emptyState")
const markReadButtons = document.querySelectorAll(".mark-read-btn")
const viewButtons = document.querySelectorAll(".view-btn")
const deleteButtons = document.querySelectorAll(".delete-btn")

// Global variables
let currentLanguage = "en"
let currentFilter = "all"
let notifications = []

// Translations object
const translations = {
  en: {
    notifications: "Notifications",
    all: "All",
    unread: "Unread",
    competitions: "Competitions",
    results: "Results",
    system: "System",
    clearAll: "Clear All",
    clearAllConfirm: "Are you sure you want to clear all notifications?",
    view: "View",
    markRead: "Mark as Read",
    delete: "Delete",
    noNotifications: "No Notifications",
    noNotificationsDesc: "You're all caught up! Check back later for new notifications.",
    deleteConfirm: "Are you sure you want to delete this notification?",
    settingsTitle: "Settings",
    newCompetitionTitle: "New Competition Available",
    newCompetitionMessage:
      "The Math Challenge competition is now open for registration. Don't miss your chance to participate!",
    resultsPublishedTitle: "Results Published",
    resultsPublishedMessage:
      "The results for the Logic Puzzle competition have been published. Check your ranking now!",
    securityAlertTitle: "Account Security Alert",
    securityAlertMessage:
      "We noticed a login from a new device. If this wasn't you, please update your password immediately.",
    competitionReminderTitle: "Competition Reminder",
    competitionReminderMessage: "The Memory Game competition starts in 24 hours. Make sure you're prepared!",
    profileUpdateTitle: "Profile Update",
    profileUpdateMessage: "Your profile has been successfully updated with your new information.",
  },
  ar: {
    notifications: "الإشعارات",
    all: "الكل",
    unread: "غير مقروءة",
    competitions: "المسابقات",
    results: "النتائج",
    system: "النظام",
    clearAll: "مسح الكل",
    clearAllConfirm: "هل أنت متأكد أنك تريد مسح جميع الإشعارات؟",
    view: "عرض",
    markRead: "تعيين كمقروء",
    delete: "حذف",
    noNotifications: "لا توجد إشعارات",
    noNotificationsDesc: "أنت على اطلاع بكل شيء! تحقق لاحقًا للحصول على إشعارات جديدة.",
    deleteConfirm: "هل أنت متأكد أنك تريد حذف هذا الإشعار؟",
    settingsTitle: "الإعدادات",
    newCompetitionTitle: "مسابقة جديدة متاحة",
    newCompetitionMessage: "مسابقة تحدي الرياضيات مفتوحة الآن للتسجيل. لا تفوت فرصتك للمشاركة!",
    resultsPublishedTitle: "تم نشر النتائج",
    resultsPublishedMessage: "تم نشر نتائج مسابقة الألغاز المنطقية. تحقق من ترتيبك الآن!",
    securityAlertTitle: "تنبيه أمان الحساب",
    securityAlertMessage: "لاحظنا تسجيل دخول من جهاز جديد. إذا لم تكن أنت، يرجى تحديث كلمة المرور الخاصة بك على الفور.",
    competitionReminderTitle: "تذكير بالمسابقة",
    competitionReminderMessage: "تبدأ مسابقة لعبة الذاكرة خلال 24 ساعة. تأكد من أنك مستعد!",
    profileUpdateTitle: "تحديث الملف الشخصي",
    profileUpdateMessage: "تم تحديث ملفك الشخصي بنجاح بمعلوماتك الجديدة.",
  },
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initBackgroundAnimation()
  initLanguageSwitch()
  initNotificationFilters()
  initClearAllButton()
  initMarkReadButtons()
  initViewButtons()
  initDeleteButtons()

  // Get all notifications from the DOM
  loadNotificationsFromDOM()
})

// Initialize background animation
function initBackgroundAnimation() {
  const symbols = document.querySelectorAll(".bg-object")

  // Add animation with different delays and durations
  symbols.forEach((symbol, index) => {
    const delay = index * 0.7 // Stagger the animations
    const duration = 15 + Math.random() * 10

    symbol.style.animationDelay = `${delay}s`
    symbol.style.animationDuration = `${duration}s`
  })
}

// Initialize language switch
function initLanguageSwitch() {
  englishOption.addEventListener("click", () => {
    if (currentLanguage !== "en") {
      setLanguage("en")
    }
  })

  arabicOption.addEventListener("click", () => {
    if (currentLanguage !== "ar") {
      setLanguage("ar")
    }
  })
}

// Set language
function setLanguage(lang) {
  currentLanguage = lang

  // Update active class
  if (lang === "en") {
    englishOption.classList.add("active")
    arabicOption.classList.remove("active")
    document.documentElement.setAttribute("dir", "ltr")
  } else {
    arabicOption.classList.add("active")
    englishOption.classList.remove("active")
    document.documentElement.setAttribute("dir", "rtl")
  }

  // Update all translatable elements
  const translatableElements = document.querySelectorAll("[data-key]")
  translatableElements.forEach((element) => {
    const key = element.getAttribute("data-key")
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key]
    }
  })
}

// Initialize notification filters
function initNotificationFilters() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter")

      // Remove active class from all filter buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove("active")
      })

      // Add active class to clicked filter button
      button.classList.add("active")

      // Apply filter
      currentFilter = filter
      applyFilter()
    })
  })
}

// Apply filter to notifications
function applyFilter() {
  const notificationItems = document.querySelectorAll(".notification-item")
  let visibleCount = 0

  notificationItems.forEach((item) => {
    const type = item.getAttribute("data-type")
    const isUnread = item.classList.contains("unread")

    if (currentFilter === "all" || (currentFilter === "unread" && isUnread) || currentFilter === type) {
      item.style.display = "flex"
      visibleCount++
    } else {
      item.style.display = "none"
    }
  })

  // Show empty state if no notifications match the filter
  if (visibleCount === 0) {
    emptyState.style.display = "flex"
  } else {
    emptyState.style.display = "none"
  }
}

// Initialize clear all button
function initClearAllButton() {
  clearAllBtn.addEventListener("click", () => {
    const confirmClear = confirm(
      translations[currentLanguage]?.clearAllConfirm || "Are you sure you want to clear all notifications?",
    )

    if (confirmClear) {
      // Get all visible notifications
      const visibleNotifications = Array.from(document.querySelectorAll(".notification-item")).filter(
        (item) => item.style.display !== "none",
      )

      if (visibleNotifications.length === 0) return

      // Add removing animation to all visible notifications
      visibleNotifications.forEach((item) => {
        item.classList.add("removing")
      })

      // Remove notifications after animation completes
      setTimeout(() => {
        visibleNotifications.forEach((item) => {
          item.remove()
        })

        // Update notifications array
        updateNotificationsArray()

        // Show empty state
        emptyState.style.display = "flex"
      }, 300)
    }
  })
}

// Load notifications from DOM
function loadNotificationsFromDOM() {
  const notificationItems = document.querySelectorAll(".notification-item")

  notifications = Array.from(notificationItems).map((item) => {
    const id = item.getAttribute("data-id")
    const type = item.getAttribute("data-type")
    const isUnread = item.classList.contains("unread")
    const title = item.querySelector(".notification-title").textContent
    const message = item.querySelector(".notification-message").textContent
    const time = item.querySelector(".notification-time").textContent

    return {
      id,
      type,
      isUnread,
      title,
      message,
      time,
    }
  })
}

// Update notifications array after changes
function updateNotificationsArray() {
  const notificationItems = document.querySelectorAll(".notification-item")

  notifications = Array.from(notificationItems).map((item) => {
    const id = item.getAttribute("data-id")
    const type = item.getAttribute("data-type")
    const isUnread = item.classList.contains("unread")
    const title = item.querySelector(".notification-title").textContent
    const message = item.querySelector(".notification-message").textContent
    const time = item.querySelector(".notification-time").textContent

    return {
      id,
      type,
      isUnread,
      title,
      message,
      time,
    }
  })
}

// Initialize mark read buttons
function initMarkReadButtons() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("mark-read-btn")) {
      const notificationItem = e.target.closest(".notification-item")

      // Remove unread class
      notificationItem.classList.remove("unread")

      // Remove mark as read button
      e.target.remove()

      // Update notification in array
      updateNotificationsArray()

      // Reapply filter in case we're filtering by unread
      if (currentFilter === "unread") {
        applyFilter()
      }
    }
  })
}

// Initialize view buttons
function initViewButtons() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-btn")) {
      const notificationItem = e.target.closest(".notification-item")
      const type = notificationItem.getAttribute("data-type")

      // Remove unread class if present
      if (notificationItem.classList.contains("unread")) {
        notificationItem.classList.remove("unread")

        // Remove mark as read button if present
        const markReadBtn = notificationItem.querySelector(".mark-read-btn")
        if (markReadBtn) {
          markReadBtn.remove()
        }

        // Update notification in array
        updateNotificationsArray()
      }

      // Redirect based on notification type
      switch (type) {
        case "competitions":
          alert("Redirecting to competitions page...")
          // window.location.href = "copyUserCompetitionPage.html"
          break
        case "results":
          alert("Redirecting to results page...")
          // window.location.href = "copyCompetitionResults.html"
          break
        case "system":
          alert("Redirecting to system notification details...")
          // window.location.href = "systemNotificationDetails.html"
          break
        default:
          alert("Viewing notification details...")
      }
    }
  })
}

// Initialize delete buttons
function initDeleteButtons() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn") || e.target.closest(".delete-btn")) {
      const deleteBtn = e.target.classList.contains("delete-btn") ? e.target : e.target.closest(".delete-btn")
      const notificationItem = deleteBtn.closest(".notification-item")

      const confirmDelete = confirm(
        translations[currentLanguage]?.deleteConfirm || "Are you sure you want to delete this notification?",
      )

      if (confirmDelete) {
        // Add removing animation
        notificationItem.classList.add("removing")

        // Remove notification after animation completes
        setTimeout(() => {
          notificationItem.remove()

          // Update notifications array
          updateNotificationsArray()

          // Check if there are any notifications left
          if (document.querySelectorAll(".notification-item").length === 0) {
            emptyState.style.display = "flex"
          } else {
            // Reapply filter
            applyFilter()
          }
        }, 300)
      }
    }
  })
}
