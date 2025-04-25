document.addEventListener("DOMContentLoaded", () => {
  // Create animated background objects
  createBackgroundObjects()

  // Initialize notification dropdown
  initNotifications()

  // Initialize language switching
  initLanguageSwitcher()

  // Initialize profile edit modal
  initProfileModal()

  // Initialize keyboard shortcuts
  initKeyboardShortcuts()
})

// Create animated background objects with intelligence symbols
function createBackgroundObjects() {
  const backgroundContainer = document.querySelector(".background-objects-container")
  if (!backgroundContainer) return

  // Intelligence symbols to use
  const symbols = [
    "🧠", // brain
    "💡", // light bulb
    "🔍", // magnifying glass
    "📊", // chart
    "📚", // books
    "⚙️", // gear
    "🧩", // puzzle piece
    "🔬", // microscope
    "🧮", // abacus
    "🔢", // numbers
    "📐", // ruler
    "🧪", // test tube
  ]

  // Create multiple objects with different positions
  const positions = [
    "top-left",
    "top-right",
    "left-center",
    "right-center",
    "bottom-left",
    "bottom-right",
    "top-center",
    "bottom-center",
    "far-left-top",
    "far-right-top",
    "far-left-bottom",
    "far-right-bottom",
  ]

  positions.forEach((position, index) => {
    const symbol = symbols[index % symbols.length]
    const object = document.createElement("div")
    object.className = `bg-object ${position}`
    object.textContent = symbol

    // Add random animation delay
    const delay = Math.random() * 10
    object.style.animationDelay = `${delay}s`

    backgroundContainer.appendChild(object)
  })
}

// Initialize notification dropdown functionality
function initNotifications() {
  const notificationButton = document.querySelector(".notification-button")
  const notificationDropdown = document.querySelector(".notification-dropdown")
  const markAllReadButton = document.querySelector(".mark-all-read")

  if (!notificationButton || !notificationDropdown) return

  // Toggle notification dropdown
  notificationButton.addEventListener("click", (e) => {
    e.stopPropagation()
    notificationDropdown.style.display = notificationDropdown.style.display === "block" ? "none" : "block"
  })

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!notificationDropdown.contains(e.target) && e.target !== notificationButton) {
      notificationDropdown.style.display = "none"
    }
  })

  // Mark all notifications as read
  if (markAllReadButton) {
    markAllReadButton.addEventListener("click", () => {
      const unreadNotifications = document.querySelectorAll(".notification-item.unread")
      unreadNotifications.forEach((notification) => {
        notification.classList.remove("unread")
      })

      // Update notification badge
      const badge = document.querySelector(".notification-badge")
      if (badge) {
        badge.textContent = "0"
        badge.style.display = "none"
      }
    })
  }
}

// Initialize language switcher
function initLanguageSwitcher() {
  const englishOption = document.getElementById("english-option")
  const arabicOption = document.getElementById("arabic-option")

  if (!englishOption || !arabicOption) return

  // Set active language based on stored preference or default to English
  const currentLanguage = localStorage.getItem("language") || "en"
  setLanguageWithHighlight(currentLanguage)

  // This function is called from HTML onclick
  window.setLanguageWithHighlight = (lang) => {
    // Store language preference
    localStorage.setItem("language", lang)

    // Update UI to show active language
    if (lang === "en") {
      englishOption.classList.add("active")
      arabicOption.classList.remove("active")
      document.dir = "ltr"
    } else {
      arabicOption.classList.add("active")
      englishOption.classList.remove("active")
      document.dir = "rtl"
    }

    // Update text content based on language
    updatePageLanguage(lang)
  }
}

// Update page text based on selected language
function updatePageLanguage(lang) {
  const translations = {
    en: {
      mindArena: "Mind Arena",
      logout: "Logout",
      personalInfo: "Personal Info",
      competitions: "Competitions",
      results: "Results",
      settings: "Settings",
      notifications: "Notifications",
      "privacy&security": "Privacy & Security",
      profileTitle: "Profile",
      home: "Home",
      awards: "Awards",
      points: "Points",
      editProfile: "Edit Profile",
      profileCompletion: "Profile Completion",
      verificationMessage: "Please complete your profile to participate in all competitions",
      contactInfo: "Contact Information",
      fullName: "Full Name",
      dateOfBirth: "Date of Birth",
      gender: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      nationality: "Nationality",
      education: "Education",
      occupation: "Occupation",
      recentCompetitions: "Recent Competitions",
      viewAll: "View All",
      completed: "Completed",
      upcoming: "Upcoming",
      score: "Score:",
      rank: "Rank:",
      register: "Register",
      details: "Details",
      achievements: "Achievements",
      firstPlace: "First Place",
      secondPlace: "Second Place",
      thirdPlace: "Third Place",
      participation: "Participation",
      email: "Email",
      phone: "Phone",
      address: "Address",
      cancel: "Cancel",
      saveChanges: "Save Changes",
    },
    ar: {
      mindArena: "ساحة العقل",
      logout: "تسجيل الخروج",
      personalInfo: "المعلومات الشخصية",
      competitions: "المسابقات",
      results: "النتائج",
      settings: "الإعدادات",
      notifications: "الإشعارات",
      "privacy&security": "الخصوصية والأمان",
      profileTitle: "الملف الشخصي",
      home: "الرئيسية",
      awards: "الجوائز",
      points: "النقاط",
      editProfile: "تعديل الملف",
      profileCompletion: "اكتمال الملف",
      verificationMessage: "يرجى إكمال ملفك الشخصي للمشاركة في جميع المسابقات",
      contactInfo: "معلومات الاتصال",
      fullName: "الاسم الكامل",
      dateOfBirth: "تاريخ الميلاد",
      gender: "الجنس",
      male: "ذكر",
      female: "أنثى",
      other: "آخر",
      nationality: "الجنسية",
      education: "التعليم",
      occupation: "المهنة",
      recentCompetitions: "المسابقات الأخيرة",
      viewAll: "عرض الكل",
      completed: "مكتمل",
      upcoming: "قادم",
      score: "النتيجة:",
      rank: "الترتيب:",
      register: "تسجيل",
      details: "التفاصيل",
      achievements: "الإنجازات",
      firstPlace: "المركز الأول",
      secondPlace: "المركز الثاني",
      thirdPlace: "المركز الثالث",
      participation: "مشاركة",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      address: "العنوان",
      cancel: "إلغاء",
      saveChanges: "حفظ التغييرات",
    },
  }

  // Update all elements with data-key attribute
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key")
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key]
    }
  })
}

// Initialize profile edit modal
function initProfileModal() {
  const editProfileBtn = document.querySelector(".edit-profile-btn")
  const modal = document.getElementById("edit-profile-modal")
  const closeModalBtn = document.querySelector(".close-modal")
  const cancelBtn = document.querySelector(".cancel-btn")
  const saveBtn = document.querySelector(".save-btn")
  const form = document.getElementById("edit-profile-form")

  if (!editProfileBtn || !modal) return

  // Open modal
  editProfileBtn.addEventListener("click", () => {
    openModal(modal, "Edit Profile")
  })

  // Close modal functions
  function closeModal(modalElement) {
    modalElement.style.display = "none"
    document.body.style.overflow = ""
  }

  // Open modal function
  function openModal(modalElement, title = "") {
    if (title && modalElement.querySelector("#modal-title")) {
      modalElement.querySelector("#modal-title").textContent = title
    }
    modalElement.style.display = "flex"
    document.body.style.overflow = "hidden" // Prevent scrolling
  }

  // Close modal with X button
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      closeModal(modal)
    })
  }

  // Close modal with Cancel button
  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      closeModal(modal)
    })
  }

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal(modal)
    }
  })

  // Handle form submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Here you would typically send the form data to a server
      // For demo purposes, we'll just show a success message and close the modal

      // Get form data
      const formData = new FormData(form)
      const userData = {}

      for (const [key, value] of formData.entries()) {
        userData[key] = value
      }

      console.log("Form submitted with data:", userData)

      // Show success message (you could add a toast notification here)
      alert("Profile updated successfully!")

      // Update profile information on the page
      updateProfileInfo(userData)

      // Close the modal
      closeModal(modal)
    })
  }

  // Section edit buttons
  const sectionEditBtns = document.querySelectorAll(".section-edit-btn")
  sectionEditBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = btn.getAttribute("data-section")
      let title = "Edit Profile"

      // Set appropriate title based on section
      if (section === "personal-info") {
        title = "Edit Personal Information"
      }

      openModal(modal, title)
    })
  })
}

// Initialize keyboard shortcuts
function initKeyboardShortcuts() {
  const shortcutModal = document.getElementById("shortcut-info-modal")
  const closeShortcutModalBtn = shortcutModal?.querySelector(".close-modal")

  // Close shortcut modal with X button
  if (closeShortcutModalBtn) {
    closeShortcutModalBtn.addEventListener("click", () => {
      shortcutModal.style.display = "none"
      document.body.style.overflow = ""
    })
  }

  // Close shortcut modal when clicking outside
  if (shortcutModal) {
    shortcutModal.addEventListener("click", (e) => {
      if (e.target === shortcutModal) {
        shortcutModal.style.display = "none"
        document.body.style.overflow = ""
      }
    })
  }

  // Add keyboard event listener
  document.addEventListener("keydown", (e) => {
    // Don't trigger shortcuts when typing in input fields
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") {
      return
    }

    const editProfileModal = document.getElementById("edit-profile-modal")

    // Show shortcuts info when pressing '?'
    if (e.key === "?" || e.key === "/") {
      e.preventDefault()
      shortcutModal.style.display = "flex"
      document.body.style.overflow = "hidden"
    }

    // Open edit profile modal with 'E' key
    if (e.key === "e" || e.key === "E") {
      e.preventDefault()
      if (editProfileModal.style.display !== "flex") {
        editProfileModal.style.display = "flex"
        document.body.style.overflow = "hidden"
        editProfileModal.querySelector("#modal-title").textContent = "Edit Profile"
      }
    }

    // Open personal info edit with 'P' key
    if (e.key === "p" || e.key === "P") {
      e.preventDefault()
      if (editProfileModal.style.display !== "flex") {
        editProfileModal.style.display = "flex"
        document.body.style.overflow = "hidden"
        editProfileModal.querySelector("#modal-title").textContent = "Edit Personal Information"
      }
    }

    // Close any open modal with Escape key
    if (e.key === "Escape") {
      const openModals = document.querySelectorAll('.modal[style*="display: flex"]')
      openModals.forEach((modal) => {
        modal.style.display = "none"
      })
      document.body.style.overflow = ""
    }
  })
}

// Update profile information on the page after form submission
function updateProfileInfo(userData) {
  // This is a placeholder function that would update the DOM with new user data
  // In a real application, you would update specific elements with the new data

  // Example: Update name if it was changed
  if (userData.fullname) {
    const nameElement = document.querySelector(".profile-name")
    if (nameElement) {
      nameElement.textContent = userData.fullname
    }

    // Also update the personal info section
    const fullNameElement = document.querySelector('.info-item:has(label[data-key="fullName"]) p')
    if (fullNameElement) {
      fullNameElement.textContent = userData.fullname
    }
  }

  // Update education if changed
  if (userData.education) {
    const educationElement = document.querySelector('.info-item:has(label[data-key="education"]) p')
    if (educationElement) {
      educationElement.textContent = userData.education
    }
  }

  // Update occupation if changed
  if (userData.occupation) {
    const occupationElement = document.querySelector('.info-item:has(label[data-key="occupation"]) p')
    if (occupationElement) {
      occupationElement.textContent = userData.occupation
    }
  }

  // Update nationality if changed
  if (userData.nationality) {
    const nationalityElement = document.querySelector('.info-item:has(label[data-key="nationality"]) p')
    if (nationalityElement) {
      nationalityElement.textContent = userData.nationality
    }
  }

  // Update contact information
  if (userData.email) {
    const emailElement = document.querySelector(".contact-list li:has(i.fa-envelope) span")
    if (emailElement) {
      emailElement.textContent = userData.email
    }
  }

  if (userData.phone) {
    const phoneElement = document.querySelector(".contact-list li:has(i.fa-phone) span")
    if (phoneElement) {
      phoneElement.textContent = userData.phone
    }
  }

  if (userData.address) {
    const addressElement = document.querySelector(".contact-list li:has(i.fa-map-marker-alt) span")
    if (addressElement) {
      addressElement.textContent = userData.address
    }
  }

  // Update profile completion percentage
  updateProfileCompletion()
}

// Add animation to profile completion bar on page load
document.addEventListener("DOMContentLoaded", () => {
  const completionBar = document.querySelector(".completion-progress")
  if (completionBar) {
    // Start with 0 width and animate to the actual percentage
    completionBar.style.width = "0%"

    // Use setTimeout to ensure the animation runs after the initial render
    setTimeout(() => {
      completionBar.style.width = "75%"
    }, 300)
  }
})

// Handle avatar change button
document.addEventListener("DOMContentLoaded", () => {
  const changeAvatarBtn = document.querySelector(".change-avatar-btn")

  if (changeAvatarBtn) {
    changeAvatarBtn.addEventListener("click", () => {
      // Create a file input element
      const fileInput = document.createElement("input")
      fileInput.type = "file"
      fileInput.accept = "image/*"

      // Trigger click on the file input
      fileInput.click()

      // Handle file selection
      fileInput.addEventListener("change", () => {
        if (fileInput.files && fileInput.files[0]) {
          const reader = new FileReader()

          reader.onload = (e) => {
            // Update avatar image
            const avatarImg = document.querySelector(".avatar-img")
            if (avatarImg) {
              avatarImg.src = e.target.result
            }
          }

          reader.readAsDataURL(fileInput.files[0])
        }
      })
    })
  }
})

// Calculate and update profile completion percentage
function updateProfileCompletion() {
  // This is a placeholder function that would calculate the profile completion
  // In a real application, you would check which fields are filled out

  // For demo purposes, we'll just increase the completion by 5%
  const completionPercentage = document.querySelector(".completion-percentage")
  const completionProgress = document.querySelector(".completion-progress")

  if (completionPercentage && completionProgress) {
    const currentPercentage = Number.parseInt(completionPercentage.textContent)
    const newPercentage = Math.min(currentPercentage + 5, 100)

    completionPercentage.textContent = `${newPercentage}%`
    completionProgress.style.width = `${newPercentage}%`

    // If profile is complete, remove the verification message
    if (newPercentage === 100) {
      const verificationMessage = document.querySelector(".profile-verification")
      if (verificationMessage) {
        verificationMessage.style.display = "none"
      }
    }
  }
}
