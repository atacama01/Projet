const translations = {
  en: {
    mindArena: "Mind Arena",
    home: "Home",
    competitionResults: "Competition Results",
    competitionType: "Competition Type",
    date: "Date",
    status: "Status",
    filter: "Filter",
    all: "All",
    iqTest: "IQ Test",
    mathChallenge: "Math Challenge",
    logicPuzzle: "Logic Puzzle",
    thisMonth: "This Month",
    lastMonth: "Last Month",
    thisYear: "This Year",
    completed: "Completed",
    ongoing: "Ongoing",
    upcoming: "Upcoming",
    recentCompetitions: "Recent Competitions",
    id: "ID",
    competitionName: "Competition Name",
    participants: "Participants",
    yourScore: "Your Score",
    yourRank: "Your Rank",
    actions: "Actions",
    viewDetails: "View Details",
    tournamentBrackets: "Tournament Brackets",
    selectTournament: "Select Tournament",
    round1: "Round 1",
    semifinals: "Semifinals",
    finals: "Finals",
    champion: "Champion",
    topPerformers: "Top Performers",
    competitionDetails: "Competition Details",
    duration: "Duration",
    difficulty: "Difficulty",
    yourPerformance: "Your Performance",
    score: "Score",
    rank: "Rank",
    percentile: "Percentile",
    timeSpent: "Time Spent",
    scoreBreakdown: "Score Breakdown",
    downloadCertificate: "Download Certificate",
    viewAnswers: "View Your Answers",
    notifications: "Notifications",
    markAllRead: "Mark all as read",
    newCompetition: "New competition available: Math Challenge",
    iqTestResults: "Your IQ test results are ready",
    newBadge: "You've earned a new badge!",
    viewAllNotifications: "View all notifications",
    logout: "Logout",
  },
  ar: {
    mindArena: "ساحة العقل",
    home: "الرئيسية",
    competitionResults: "نتائج المسابقات",
    competitionType: "نوع المسابقة",
    date: "التاريخ",
    status: "الحالة",
    filter: "تصفية",
    all: "الكل",
    iqTest: "اختبار الذكاء",
    mathChallenge: "تحدي الرياضيات",
    logicPuzzle: "ألغاز المنطق",
    thisMonth: "هذا الشهر",
    lastMonth: "الشهر الماضي",
    thisYear: "هذا العام",
    completed: "مكتمل",
    ongoing: "جاري",
    upcoming: "قادم",
    recentCompetitions: "المسابقات الأخيرة",
    id: "الرقم",
    competitionName: "اسم المسابقة",
    participants: "المشاركون",
    yourScore: "نتيجتك",
    yourRank: "ترتيبك",
    actions: "إجراءات",
    viewDetails: "عرض التفاصيل",
    tournamentBrackets: "جدول البطولة",
    selectTournament: "اختر البطولة",
    round1: "الجولة الأولى",
    semifinals: "نصف النهائي",
    finals: "النهائي",
    champion: "البطل",
    topPerformers: "أفضل المتسابقين",
    competitionDetails: "تفاصيل المسابقة",
    duration: "المدة",
    difficulty: "الصعوبة",
    yourPerformance: "أداؤك",
    score: "النتيجة",
    rank: "الترتيب",
    percentile: "النسبة المئوية",
    timeSpent: "الوقت المستغرق",
    scoreBreakdown: "تفصيل النتيجة",
    downloadCertificate: "تحميل الشهادة",
    viewAnswers: "عرض إجاباتك",
    notifications: "الإشعارات",
    markAllRead: "تعليم الكل كمقروء",
    newCompetition: "مسابقة جديدة متاحة: تحدي الرياضيات",
    iqTestResults: "نتائج اختبار الذكاء جاهزة",
    newBadge: "لقد حصلت على شارة جديدة!",
    viewAllNotifications: "عرض كل الإشعارات",
    logout: "تسجيل الخروج",
  },
}

// Competition data for modal
const competitionData = {
  1: {
    name: "IQ Challenge 2023",
    date: "10/03/2023",
    participants: 150,
    duration: "90 minutes",
    difficulty: "Advanced",
    yourScore: "85/100",
    yourRank: "12 / 150",
    yourPercentile: "92%",
    yourTime: "75 minutes",
  },
  2: {
    name: "Math Olympiad",
    date: "25/02/2023",
    participants: 98,
    duration: "120 minutes",
    difficulty: "Expert",
    yourScore: "92/100",
    yourRank: "5 / 98",
    yourPercentile: "95%",
    yourTime: "110 minutes",
  },
  3: {
    name: "Logic Puzzle Challenge",
    date: "15/01/2023",
    participants: 120,
    duration: "60 minutes",
    difficulty: "Intermediate",
    yourScore: "78/100",
    yourRank: "20 / 120",
    yourPercentile: "83%",
    yourTime: "55 minutes",
  },
  4: {
    name: "Memory Masters",
    date: "05/12/2022",
    participants: 75,
    duration: "45 minutes",
    difficulty: "Intermediate",
    yourScore: "90/100",
    yourRank: "3 / 75",
    yourPercentile: "96%",
    yourTime: "40 minutes",
  },
  5: {
    name: "Speed Mathematics",
    date: "20/11/2022",
    participants: 110,
    duration: "30 minutes",
    difficulty: "Advanced",
    yourScore: "88/100",
    yourRank: "7 / 110",
    yourPercentile: "94%",
    yourTime: "28 minutes",
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

// Add animated background elements dynamically
function createAnimatedElements() {
  // Additional math symbols for more dynamic background
  const additionalSymbols = [
    { symbol: "∞", class: "infinity-symbol", position: { top: "35%", left: "25%" }, color: "#9c88ff" },
    { symbol: "λ", class: "lambda-symbol", position: { top: "65%", left: "75%" }, color: "#ff7675" },
    { symbol: "θ", class: "theta-symbol", position: { top: "20%", left: "80%" }, color: "#74b9ff" },
    { symbol: "√", class: "sqrt-symbol", position: { top: "20%", left: "80%" }, color: "#74b9ff" },
    { symbol: "√", class: "sqrt-symbol", position: { top: "75%", left: "30%" }, color: "#55efc4" },
  ]

  const background = document.querySelector(".animated-background")

  // Add additional math symbols
  additionalSymbols.forEach((item) => {
    const element = document.createElement("div")
    element.className = `bg-element math-symbol ${item.class}`
    element.innerHTML = `<span>${item.symbol}</span>`
    element.style.top = item.position.top
    element.style.left = item.position.left
    element.style.color = item.color
    element.style.animation = `float-${Math.random() > 0.5 ? "vertical" : "horizontal"} ${10 + Math.random() * 10}s infinite ease-in-out`
    background.appendChild(element)
  })
}

// DOM manipulation when document is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Create additional animated elements
  createAnimatedElements()

  // Set initial language
  const savedLang = localStorage.getItem("lang") || "en"
  setLanguageWithHighlight(savedLang)

  // Toggle notification dropdown
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

  // Logout button functionality
  const logoutButton = document.querySelector(".logout-button")
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      // You can replace this with actual logout logic
      alert("Logging out...")
      // window.location.href = 'login.html';
    })
  }

  // Filter functionality
  const filterButton = document.querySelector(".filter-button")
  if (filterButton) {
    filterButton.addEventListener("click", () => {
      // You can implement actual filtering logic here
      alert("Filtering results...")
    })
  }

  // Pagination functionality
  const prevButton = document.querySelector(".pagination-btn.prev")
  const nextButton = document.querySelector(".pagination-btn.next")

  if (prevButton && nextButton) {
    nextButton.addEventListener("click", () => {
      // Simulate going to next page
      prevButton.disabled = false
      document.querySelector(".pagination-info").textContent = "Page 2 of 3"

      if (document.querySelector(".pagination-info").textContent === "Page 3 of 3") {
        nextButton.disabled = true
      }
    })

    prevButton.addEventListener("click", () => {
      // Simulate going to previous page
      nextButton.disabled = false

      const currentPage = document.querySelector(".pagination-info").textContent
      if (currentPage === "Page 2 of 3") {
        document.querySelector(".pagination-info").textContent = "Page 1 of 3"
        prevButton.disabled = true
      } else if (currentPage === "Page 3 of 3") {
        document.querySelector(".pagination-info").textContent = "Page 2 of 3"
      }
    })
  }

  // Tournament selector functionality
  const tournamentSelect = document.getElementById("tournament-select")
  if (tournamentSelect) {
    tournamentSelect.addEventListener("change", function () {
      // You can implement tournament switching logic here
      alert("Switching to tournament: " + this.options[this.selectedIndex].text)
    })
  }

  // Competition details modal functionality
  const viewDetailsButtons = document.querySelectorAll(".view-details-btn")
  const competitionDetailsModal = document.getElementById("competition-details-modal")
  const closeModalBtn = document.querySelector(".close-modal")

  if (viewDetailsButtons.length > 0 && competitionDetailsModal) {
    viewDetailsButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const competitionId = this.getAttribute("data-id")
        const competition = competitionData[competitionId]

        // Populate modal with competition data
        document.getElementById("modal-competition-name").textContent = competition.name
        document.getElementById("modal-competition-date").textContent = competition.date
        document.getElementById("modal-competition-participants").textContent = competition.participants
        document.getElementById("modal-competition-duration").textContent = competition.duration
        document.getElementById("modal-competition-difficulty").textContent = competition.difficulty
        document.getElementById("modal-your-score").textContent = competition.yourScore
        document.getElementById("modal-your-rank").textContent = competition.yourRank
        document.getElementById("modal-your-percentile").textContent = competition.yourPercentile
        document.getElementById("modal-your-time").textContent = competition.yourTime

        // Display the modal
        competitionDetailsModal.style.display = "flex"

        // Create a simple chart (placeholder)
        const canvas = document.getElementById("score-chart")
        if (canvas) {
          const ctx = canvas.getContext("2d")
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.font = "14px Arial"
          ctx.fillStyle = "#555"
          ctx.textAlign = "center"
          ctx.fillText("Score breakdown chart would be displayed here", canvas.width / 2, canvas.height / 2)
        }
      })
    })

    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", () => {
        competitionDetailsModal.style.display = "none"
      })
    }

    // Close modal when clicking outside
    competitionDetailsModal.addEventListener("click", (e) => {
      if (e.target === competitionDetailsModal) {
        competitionDetailsModal.style.display = "none"
      }
    })
  }

  // Certificate download functionality
  const downloadCertificateBtn = document.querySelector(".download-certificate-btn")
  if (downloadCertificateBtn) {
    downloadCertificateBtn.addEventListener("click", () => {
      alert("Downloading certificate...")
    })
  }

  // View answers functionality
  const viewAnswersBtn = document.querySelector(".view-answers-btn")
  if (viewAnswersBtn) {
    viewAnswersBtn.addEventListener("click", () => {
      alert("Viewing your answers...")
    })
  }
})
