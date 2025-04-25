// DOM Elements
const notificationBtn = document.getElementById("notificationBtn")
const notificationDropdown = document.getElementById("notificationDropdown")
const backgroundObjects = document.getElementById("backgroundObjects")
const englishOption = document.getElementById("english-option")
const arabicOption = document.getElementById("arabic-option")
const countdownElement = document.getElementById("countdown")
const daysElement = document.getElementById("days")
const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")

// Global variables
let countdownDate
let countdownInterval
let currentLanguage = "en"

// Translations object (example, replace with your actual translations)
const translations = {
  en: {
    available: "Available",
    register: "Register", // Example key for register button
  },
  ar: {
    available: "متاح",
    register: "تسجيل", // Example key for register button
  },
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initBackgroundAnimation()
  initNotifications()
  initLanguageSwitch()

  // Default countdown date (can be overridden)
  setCountdownDate(new Date("July 1, 2025 00:00:00").getTime())
})

// Set countdown target date
function setCountdownDate(date) {
  countdownDate = date
  startCountdown()
}

// Start countdown timer
function startCountdown() {
  // Clear any existing interval
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }

  // Update countdown every second
  countdownInterval = setInterval(() => {
    updateCountdown()
  }, 1000)

  // Initial update
  updateCountdown()
}

// Update countdown timer
function updateCountdown() {
  // Get current date and time
  const now = new Date().getTime()

  // Find the distance between now and the countdown date
  const distance = countdownDate - now

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // Display the result
  daysElement.textContent = days < 10 ? "0" + days : days
  hoursElement.textContent = hours < 10 ? "0" + hours : hours
  minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes
  secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds

  // If the countdown is finished, display expired message
  if (distance < 0) {
    clearInterval(countdownInterval)
    daysElement.textContent = "00"
    hoursElement.textContent = "00"
    minutesElement.textContent = "00"
    secondsElement.textContent = "00"

    // Change competition state if it's upcoming
    const competitionState = document.querySelector(".competition-state")
    if (competitionState && competitionState.classList.contains("upcoming")) {
      competitionState.classList.remove("upcoming")
      competitionState.classList.add("available")
      competitionState.textContent = translations[currentLanguage].available || "Available"
    }
  }
}

// Initialize background animation
function initBackgroundAnimation() {
  const symbols = document.querySelectorAll(".bg-object")

  // Position symbols randomly
  symbols.forEach((symbol) => {
    const x = Math.random() * 100
    const y = Math.random() * 100
    const delay = Math.random() * 5
    const duration = 15 + Math.random() * 10

    symbol.style.left = `${x}%`
    symbol.style.top = `${y}%`
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

// Register button functionality
const registerButton = document.querySelector(".register-button")
if (registerButton) {
  registerButton.addEventListener("click", () => {
    // Check if user is logged in (this would be implemented based on your auth system)
    const isLoggedIn = true // Placeholder, replace with actual auth check

    if (isLoggedIn) {
      // Redirect to registration form or show registration modal
      alert("Registration process initiated for Logic Puzzle competition!")
      // window.location.href = 'registration-form.html';
    } else {
      // Redirect to login page
      // window.location.href = 'login.html';
      alert("Please log in to register for this competition")
    }
  })
}
