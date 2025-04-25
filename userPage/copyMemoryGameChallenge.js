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
const previewCard1 = document.getElementById("previewCard1")
const previewCard2 = document.getElementById("previewCard2")
const previewCard3 = document.getElementById("previewCard3")
const previewCard4 = document.getElementById("previewCard4")

// Card symbols for the preview
const cardSymbols = ["♠", "♥", "♦", "♣", "★", "✿", "♫", "✓"]
const cardColors = ["#ff6464", "#4CAF50", "#2196F3", "#FFC107"]

// Global variables
let countdownDate
let countdownInterval
let currentLanguage = "en"
let flippedCards = []
let matchedPairs = 0

// Translations object (example, replace with your actual translations)
const translations = {
  en: {
    available: "Available",
    register: "Register",
    previewText: "Click on the cards to see a preview of the memory game!",
    matchFound: "Match found!",
    tryAgain: "Try again!",
    allMatched: "All pairs matched! Great job!",
  },
  ar: {
    available: "متاح",
    register: "تسجيل",
    previewText: "انقر على البطاقات لمشاهدة معاينة للعبة الذاكرة!",
    matchFound: "تم العثور على تطابق!",
    tryAgain: "حاول مرة أخرى!",
    allMatched: "تم مطابقة جميع الأزواج! عمل رائع!",
  },
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initBackgroundAnimation()
  initNotifications()
  initLanguageSwitch()
  initMemoryGamePreview()

  // Default countdown date (can be overridden)
  setCountdownDate(new Date("June 10, 2025 00:00:00").getTime())
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

// Initialize memory game preview
function initMemoryGamePreview() {
  // Create pairs of cards
  const cardPairs = []
  for (let i = 0; i < 2; i++) {
    cardPairs.push(0, 1) // Two pairs
  }

  // Shuffle the cards
  shuffleArray(cardPairs)

  // Set up the preview cards
  const previewCards = [previewCard1, previewCard2, previewCard3, previewCard4]

  previewCards.forEach((card, index) => {
    const pairIndex = cardPairs[index]

    // Store the pair index as a data attribute
    card.setAttribute("data-pair", pairIndex)

    // Add click event
    card.addEventListener("click", handleCardClick)

    // Set the card content (hidden until flipped)
    const symbol = document.createElement("div")
    symbol.className = "card-symbol"
    symbol.style.display = "none"
    symbol.style.position = "absolute"
    symbol.style.top = "50%"
    symbol.style.left = "50%"
    symbol.style.transform = "translate(-50%, -50%)"
    symbol.style.fontSize = "3rem"
    symbol.style.color = cardColors[pairIndex]
    symbol.textContent = cardSymbols[pairIndex]

    card.appendChild(symbol)
  })
}

// Handle card click in the preview
function handleCardClick() {
  // If the card is already flipped, do nothing
  if (this.classList.contains("flipped")) {
    return
  }

  // If two cards are already flipped, do nothing
  if (flippedCards.length >= 2) {
    return
  }

  // Flip the card
  this.classList.add("flipped")

  // Show the symbol
  const symbol = this.querySelector(".card-symbol")
  symbol.style.display = "block"

  // Add to flipped cards
  flippedCards.push(this)

  // If two cards are flipped, check for a match
  if (flippedCards.length === 2) {
    const firstPair = flippedCards[0].getAttribute("data-pair")
    const secondPair = flippedCards[1].getAttribute("data-pair")

    if (firstPair === secondPair) {
      // Match found
      setTimeout(() => {
        flippedCards[0].style.backgroundColor = "#e6ffe6" // Light green
        flippedCards[1].style.backgroundColor = "#e6ffe6"
        flippedCards = []
        matchedPairs++

        // Check if all pairs are matched
        if (matchedPairs === 2) {
          const previewText = document.querySelector(".preview-text")
          previewText.textContent = translations[currentLanguage].allMatched || "All pairs matched! Great job!"

          // Reset after 3 seconds
          setTimeout(() => {
            resetMemoryGame()
          }, 3000)
        }
      }, 500)
    } else {
      // No match
      setTimeout(() => {
        flippedCards[0].classList.remove("flipped")
        flippedCards[1].classList.remove("flipped")

        // Hide the symbols
        flippedCards[0].querySelector(".card-symbol").style.display = "none"
        flippedCards[1].querySelector(".card-symbol").style.display = "none"

        flippedCards = []
      }, 1000)
    }
  }
}

// Reset memory game preview
function resetMemoryGame() {
  const previewCards = [previewCard1, previewCard2, previewCard3, previewCard4]

  previewCards.forEach((card) => {
    card.classList.remove("flipped")
    card.style.backgroundColor =
    //var(--primary-color);
    card.querySelector(".card-symbol").style.display = "none"
  })

  matchedPairs = 0
  
  flippedCards = []

  // Update preview text
  const previewText = document.querySelector(".preview-text")
  previewText.textContent =
    translations[currentLanguage].previewText || "Click on the cards to see a preview of the memory game!"

  // Reinitialize the game with new pairs
  initMemoryGamePreview()
}

// Utility function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// Register button functionality
const registerButton = document.querySelector(".register-button")
if (registerButton) {
  registerButton.addEventListener("click", () => {
    // Check if user is logged in (this would be implemented based on your auth system)
    const isLoggedIn = true // Placeholder, replace with actual auth check

    if (isLoggedIn) {
      // Redirect to registration form or show registration modal
      alert("Registration process initiated for Memory Game competition!")
      // window.location.href = 'registration-form.html';
    } else {
      // Redirect to login page
      // window.location.href = 'login.html';
      alert("Please log in to register for this competition")
    }
  })
}
