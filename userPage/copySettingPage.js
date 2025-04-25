// DOM Elements
const notificationBtn = document.getElementById("notificationBtn")
const notificationDropdown = document.getElementById("notificationDropdown")
const backgroundObjects = document.getElementById("backgroundObjects")
const englishOption = document.getElementById("english-option")
const arabicOption = document.getElementById("arabic-option")
const settingsNavItems = document.querySelectorAll(".settings-nav-item")
const settingsTabs = document.querySelectorAll(".settings-tab")
const themeOptions = document.querySelectorAll(".theme-option")
const colorOptions = document.querySelectorAll(".color-option")
const fontSizeSlider = document.getElementById("fontSizeSlider")
const textSpacingSlider = document.getElementById("textSpacingSlider")
const highContrastToggle = document.getElementById("highContrastToggle")
const reduceMotionToggle = document.getElementById("reduceMotionToggle")
const saveSettingsBtn = document.getElementById("saveSettingsBtn")
const passwordInputs = document.querySelectorAll('input[type="password"]')
const strengthSegments = document.querySelectorAll(".strength-segment")
const strengthText = document.querySelector(".strength-text")

// Global variables
let currentLanguage = "en"
let currentTheme = "light"
let currentColor = "blue"
let currentFontSize = 3
let currentTextSpacing = 2
let highContrast = false
let reduceMotion = false

// Translations object (example, replace with your actual translations)
const translations = {
  en: {
    settings: "Settings",
    profileSettings: "Profile Settings",
    notificationSettings: "Notification Settings",
    appearanceSettings: "Appearance Settings",
    accountSettings: "Account Settings",
    privacySettings: "Privacy Settings",
    accessibilitySettings: "Accessibility Settings",
    saveSettings: "Save Settings",
    settingsSaved: "Settings saved successfully!",
    passwordWeak: "Weak",
    passwordMedium: "Medium",
    passwordStrong: "Strong",
    passwordVeryStrong: "Very Strong",
    deleteAccountConfirm: "Are you sure you want to delete your account? This action cannot be undone.",
  },
  ar: {
    settings: "الإعدادات",
    profileSettings: "إعدادات الملف الشخصي",
    notificationSettings: "إعدادات الإشعارات",
    appearanceSettings: "إعدادات المظهر",
    accountSettings: "إعدادات الحساب",
    privacySettings: "إعدادات الخصوصية",
    accessibilitySettings: "إعدادات إمكانية الوصول",
    saveSettings: "حفظ الإعدادات",
    settingsSaved: "تم حفظ الإعدادات بنجاح!",
    passwordWeak: "ضعيف",
    passwordMedium: "متوسط",
    passwordStrong: "قوي",
    passwordVeryStrong: "قوي جدا",
    deleteAccountConfirm: "هل أنت متأكد أنك تريد حذف حسابك؟ لا يمكن التراجع عن هذا الإجراء.",
  },
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initBackgroundAnimation()
  initNotifications()
  initLanguageSwitch()
  initSettingsTabs()
  initThemeOptions()
  initColorOptions()
  initSliders()
  initToggles()
  initPasswordStrength()
  initSaveSettings()
  initDeleteAccount()
})

// Initialize background animation
function initBackgroundAnimation() {
  const symbols = document.querySelectorAll(".bg-object")

  // Add animation with different delays and durations
  symbols.forEach((symbol, index) => {
    const delay = index * 0.5 // Stagger the animations
    const duration = 15 + Math.random() * 10

    symbol.style.animationDelay = `${delay}s`
    symbol.style.animationDuration = `${duration}s`
  })
}

// Initialize notification dropdown
function initNotifications() {
  notificationBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    notificationDropdown.classList.toggle("show")
  })

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!notificationDropdown.contains(e.target) && e.target !== notificationBtn) {
      notificationDropdown.classList.remove("show")
    }
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

// Initialize settings tabs
function initSettingsTabs() {
  settingsNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      const tabId = item.getAttribute("data-tab")

      // Remove active class from all nav items and tabs
      settingsNavItems.forEach((navItem) => {
        navItem.classList.remove("active")
      })

      settingsTabs.forEach((tab) => {
        tab.classList.remove("active")
      })

      // Add active class to clicked nav item and corresponding tab
      item.classList.add("active")
      document.getElementById(`${tabId}-tab`).classList.add("active")
    })
  })
}

// Initialize theme options
function initThemeOptions() {
  themeOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const theme = option.getAttribute("data-theme")

      // Remove active class from all theme options
      themeOptions.forEach((opt) => {
        opt.classList.remove("active")
      })

      // Add active class to clicked theme option
      option.classList.add("active")

      // Set theme
      setTheme(theme)
    })
  })
}

// Set theme
function setTheme(theme) {
  currentTheme = theme

  // Apply theme to body
  document.body.classList.remove("light-theme", "dark-theme")

  if (theme === "dark") {
    document.body.classList.add("dark-theme")
  } else if (theme === "light") {
    document.body.classList.add("light-theme")
  } else if (theme === "system") {
    // Check system preference
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark-theme")
    } else {
      document.body.classList.add("light-theme")
    }
  }
}

// Initialize color options
function initColorOptions() {
  colorOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const color = option.getAttribute("data-color")

      // Remove active class from all color options
      colorOptions.forEach((opt) => {
        opt.classList.remove("active")
      })

      // Add active class to clicked color option
      option.classList.add("active")

      // Set color
      setColor(color)
    })
  })
}

// Set color
function setColor(color) {
  currentColor = color

  // Apply color to root variables
  const root = document.documentElement

  switch (color) {
    case "blue":
      root.style.setProperty("--primary-color", "#6c63ff")
      break
    case "purple":
      root.style.setProperty("--primary-color", "#9c27b0")
      break
    case "green":
      root.style.setProperty("--primary-color", "#4caf50")
      break
    case "orange":
      root.style.setProperty("--primary-color", "#ff9800")
      break
  }
}

// Initialize sliders
function initSliders() {
  // Font size slider
  fontSizeSlider.addEventListener("input", () => {
    const fontSize = fontSizeSlider.value
    setFontSize(fontSize)
  })

  // Text spacing slider
  textSpacingSlider.addEventListener("input", () => {
    const textSpacing = textSpacingSlider.value
    setTextSpacing(textSpacing)
  })
}

// Set font size
function setFontSize(size) {
  currentFontSize = size

  // Apply font size to body
  const root = document.documentElement

  switch (Number.parseInt(size)) {
    case 1:
      root.style.setProperty("--font-size-multiplier", "0.85")
      break
    case 2:
      root.style.setProperty("--font-size-multiplier", "0.925")
      break
    case 3:
      root.style.setProperty("--font-size-multiplier", "1")
      break
    case 4:
      root.style.setProperty("--font-size-multiplier", "1.075")
      break
    case 5:
      root.style.setProperty("--font-size-multiplier", "1.15")
      break
  }
}

// Set text spacing
function setTextSpacing(spacing) {
  currentTextSpacing = spacing

  // Apply text spacing to body
  const root = document.documentElement

  switch (Number.parseInt(spacing)) {
    case 1:
      root.style.setProperty("--line-height-multiplier", "1.2")
      break
    case 2:
      root.style.setProperty("--line-height-multiplier", "1.4")
      break
    case 3:
      root.style.setProperty("--line-height-multiplier", "1.6")
      break
    case 4:
      root.style.setProperty("--line-height-multiplier", "1.8")
      break
    case 5:
      root.style.setProperty("--line-height-multiplier", "2")
      break
  }
}

// Initialize toggles
function initToggles() {
  // High contrast toggle
  highContrastToggle.addEventListener("change", () => {
    highContrast = highContrastToggle.checked
    setHighContrast(highContrast)
  })

  // Reduce motion toggle
  reduceMotionToggle.addEventListener("change", () => {
    reduceMotion = reduceMotionToggle.checked
    setReduceMotion(reduceMotion)
  })
}

// Set high contrast
function setHighContrast(enabled) {
  if (enabled) {
    document.body.classList.add("high-contrast")
  } else {
    document.body.classList.remove("high-contrast")
  }
}

// Set reduce motion
function setReduceMotion(enabled) {
  if (enabled) {
    document.body.classList.add("reduce-motion")
  } else {
    document.body.classList.remove("reduce-motion")
  }
}

// Initialize password strength meter
function initPasswordStrength() {
  passwordInputs.forEach((input) => {
    if (input.id === "newPassword") {
      input.addEventListener("input", checkPasswordStrength)
    }
  })
}

// Check password strength
function checkPasswordStrength(e) {
  const password = e.target.value
  let strength = 0

  // Reset all segments
  strengthSegments.forEach((segment) => {
    segment.style.backgroundColor = "#e0e0e0"
  })

  if (password.length > 0) {
    // Length check
    if (password.length >= 8) strength++

    // Uppercase check
    if (/[A-Z]/.test(password)) strength++

    // Lowercase check
    if (/[a-z]/.test(password)) strength++

    // Number check
    if (/[0-9]/.test(password)) strength++

    // Special character check
    if (/[^A-Za-z0-9]/.test(password)) strength++

    // Update segments based on strength
    for (let i = 0; i < strength; i++) {
      if (strengthSegments[i]) {
        switch (strength) {
          case 1:
            strengthSegments[i].style.backgroundColor = "#ff6b6b" // Red
            break
          case 2:
            strengthSegments[i].style.backgroundColor = "#ffb86c" // Orange
            break
          case 3:
            strengthSegments[i].style.backgroundColor = "#ffd866" // Yellow
            break
          case 4:
            strengthSegments[i].style.backgroundColor = "#a9dc76" // Light green
            break
          case 5:
            strengthSegments[i].style.backgroundColor = "#78dce8" // Teal
            break
        }
      }
    }

    // Update strength text
    switch (strength) {
      case 1:
        strengthText.textContent = translations[currentLanguage].passwordWeak || "Weak"
        strengthText.style.color = "#ff6b6b"
        break
      case 2:
      case 3:
        strengthText.textContent = translations[currentLanguage].passwordMedium || "Medium"
        strengthText.style.color = strength === 2 ? "#ffb86c" : "#ffd866"
        break
      case 4:
        strengthText.textContent = translations[currentLanguage].passwordStrong || "Strong"
        strengthText.style.color = "#a9dc76"
        break
      case 5:
        strengthText.textContent = translations[currentLanguage].passwordVeryStrong || "Very Strong"
        strengthText.style.color = "#78dce8"
        break
    }
  } else {
    // Empty password
    strengthText.textContent = translations[currentLanguage].passwordWeak || "Weak"
    strengthText.style.color = "#ff6b6b"
  }
}

// Initialize save settings
function initSaveSettings() {
  saveSettingsBtn.addEventListener("click", () => {
    // Simulate saving settings
    saveSettingsBtn.disabled = true
    saveSettingsBtn.textContent = "Saving..."

    // Simulate API call with timeout
    setTimeout(() => {
      // Show success message
      alert(translations[currentLanguage].settingsSaved || "Settings saved successfully!")

      // Reset button
      saveSettingsBtn.disabled = false
      saveSettingsBtn.textContent = translations[currentLanguage].saveSettings || "Save Settings"
    }, 1500)
  })
}

// Initialize delete account
function initDeleteAccount() {
  const deleteAccountBtn = document.querySelector(".delete-account-btn")

  if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener("click", () => {
      const confirmDelete = confirm(
        translations[currentLanguage].deleteAccountConfirm ||
          "Are you sure you want to delete your account? This action cannot be undone.",
      )

      if (confirmDelete) {
        // Simulate account deletion
        alert("Your account has been scheduled for deletion. You will be logged out now.")

        // Redirect to logout
        setTimeout(() => {
          window.location.href = "index.html"
        }, 1500)
      }
    })
  }
}
