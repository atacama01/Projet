/***************************************************
 * Language Dictionary
 ***************************************************/
const translations = {
    en: {
      // Login Page
      logoText: "LOGO",
      welcomeTitle: "Welcome to Our Platform",
      welcomeDesc: "Manage your mental game competitions easily and seamlessly.",
      loginTitle: "Login",
      emailLabel: "Email",
      passwordLabel: "Password",
      forgotPassword: "Forgot Password?",
      userRole: "I'm a User",
      adminRole: "I'm an Admin",
      loginBtn: "Login",
      noAccount: "Don’t have an account?",
      registerNow: "Register now",
  
      // Register Page
      welcomeTitleReg: "Join Our Platform",
      welcomeDescReg: "Register now and start participating in mental game competitions.",
      registerTitle: "Create an Account",
      fullNameLabel: "Full Name",
      confirmPasswordLabel: "Confirm Password",
      registerBtn: "Register",
      alreadyHaveAccount: "Already have an account?",
      loginHere: "Login here",
  
      // Forgot Password Page
      forgotPassTitle: "Reset Password",
      forgotPassDesc: "Enter your email to reset your password.",
      submitBtn: "Submit",
  
      // Admin Home Page
      adminWelcome: "Admin Dashboard",
      adminDesc: "Manage competitions, users, and games seamlessly.",
      cardCompetitions: "Competitions",
      cardUsers: "Users",
      cardGames: "Games",
      cardCompetitionsTitle: "Competitions",
      cardCompetitionsDesc: "Manage and schedule competitions.",
      cardcreateCompTitle: "Create competitions",
      cardcreateCompDesc: "Create new competitions from here.",
      cardreportTitle: "Report a problem",
      cardreportDesc: "Report any problem to our team.",

     /* Competitions Page */
      compPageTitle: "Competitions",
      compPageDesc: "Browse or create new competitions below.",
      searchPlaceholder: "Search...",
      createCompetitionBtn: "Create Competition",
      noCompetitionsMsg: "No competitions found.",
      participationApps: "Participation applications",
      participantsList: "List of participants",
      admissionRequirements: "Admission requirements",
      prizesList: "List of prizes",
      matchTiming: "Match timing",
      qualifiers: "Qualifiers",
      availableGames: "Available games",

      // Create Comp Page
      compPageTitle: "Competitions",
      participationApps: "Participation applications",
      participantsList: "List of participants",
      admissionRequirements: "Admission requirements",
      prizesList: "List of prizes",
      matchTiming: "Match timing",
      qualifiers: "Qualifiers",
      availableGames: "Available games",
      searchPlaceholder: "Search...",
      
      pageTitle: "Create Competition",
      section1Title: "Competition Info",
      compNameLabel: "Competition name",
      compNamePlaceholder: "ex: chess",
      maxPlayersLabel: "Max players number",
      maxPlayersPlaceholder: "ex: 20",
      compPlaceLabel: "Competition place",
      compPlacePlaceholder: "ex: sports hall",
      beginDateLabel: "Begin date",
      endDateLabel: "End date",
      playerInfoLabel: "Necessary players info",
      playerInfoPlaceholder: "ex: full name, phone number...",
      
      section2Title: "Gifts List",
      enableGiftsLabel: "Enable gifts",
      addGiftBtn: "+ Add gift",
      
      section3Title: "Game Players System",
      playModeLabel: "Players number",
      modeSingle: "One",
      modeDouble: "Two",
      modeMultiple: "Multiple",
      gamesListTitle: "Competition games",
      addGameBtn: "+ Add game",
      
      section4Title: "Description",
      descPlaceholder: "Write a description here...",
      systemTitle: "Competition system",
      systemPoints: "Depends on points",
      systemRandom: "Random",
      createCompBtn: "Create the competition",

      // list of pp page
      prizesList: "List of Prizes",
          participantsList: "List of Participants",
          firstPlace: "1st Place:",
          secondPlace: "2nd Place:",
          thirdPlace: "3rd Place:",
          deleteBtn: "Delete",
          addBtn: "Add",
          editBtn: "Edit",
          teamName: "Team Name",
          participantName: "Participant Name",
          actions: "Actions",
          rejectBtn: "Reject",
          rejectionReason: "Reason for Rejection",
          confirmBtn: "Confirm",
          cancelBtn: "Cancel",
      // plan page
      // Match section
    team1Label: "Team 1:",
    team2Label: "Team 2:",
    dateLabel: "Date:",
    timeLabel: "Time:",
    gameLabel: "Game:",
    addBtn: "Add",
    
    // Match table headers
    matchDescription: "Match Description",
    matchDate: "Date",
    matchTime: "Time",
    matchGame: "Game",
    actions: "Actions",
    
    // Games section
    addGameBtn: "Add Game",
    
    // Form placeholders
    selectTeam: "Select team",
    selectGame: "Select game",
    newGameName: "New game name",
    
    // Alert messages
    fillAllFields: "Please fill in all fields",
    sameTeamError: "Cannot select the same team",
    enterGameName: "Please enter a game name",

    // pionts page
    // Match section
    team1Label: "Team 1:",
    team2Label: "Team 2:",
    dateLabel: "Date:",
    timeLabel: "Time:",
    gameLabel: "Game:",
    addBtn: "Add",
    
    // Match table headers
    matchDescription: "Match Description",
    matchDate: "Date",
    matchTime: "Time",
    matchGame: "Game",
    actions: "Actions",
    
    // Games section
    addGameBtn: "Add Game",
    
    // Form placeholders
    selectTeam: "Select team",
    selectGame: "Select game",
    newGameName: "New game name",
    
    // Alert messages
    fillAllFields: "Please fill in all fields",
    sameTeamError: "Cannot select the same team",
    enterGameName: "Please enter a game name",
    
    // Points page
    pointsTitle: "Points",
    teamNameLabel: "Team Name:",
    pointsLabel: "Points:",
    rankHeader: "Rank",
    teamNameHeader: "Team Name",
    pointsHeader: "Points",
    actionsHeader: "Actions",
    qualificationNote: "The top 8 teams with the highest points will be qualified.",
    qualifiedTeamsTitle: "List of Qualified Teams",
    playoffsTitle: "Playoffs",
    winnerLabel: "Winner",
    bracketNote: "Click on a team box to see details.",
    detailsBtn: "Details",
    
    // Team details modal
    teamDetailsTitle: "Team Details",
    teamNameDetail: "Team Name:",
    pointsDetail: "Points:",
    matchesPlayedDetail: "Matches Played:",
    winsDetail: "Wins:",
    lossesDetail: "Losses:",

    /////////////////////// requests page
    // Request page
    existingCompetitions: "Existing Competitions",
    registrationRequests: "Registration Requests",
    selectCompetitionMessage: "Select a competition on the left to view its requests.",
    maxPlayers: "Max Players:",
    begins: "Begins:",
    ends: "Ends:",
    status: "Status:",
    inProgress: "In Progress",
    ended: "Ended",
    upcoming: "Upcoming",
    individual: "Individual",
    team: "Team",
    playerName: "Player Name:",
    infoList: "Information List",
    gender: "Gender:",
    major: "Major:",
    age: "Age:",
    email: "Email:",
    phone: "Phone:",
    requestDate: "Request Date:",
    teamMembers: "Team Members:",
    accept: "Accept",
    reject: "Reject",
    rejectionReason: "Reason for Rejection",
    reasonLabel: "Reason:",
    cancel: "Cancel",
    sendDecision: "Send Decision",
    searchRequests: "Search requests...",
    all: "All",
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
    noRequests: "No requests found for this competition.",
    edit: "Edit",
    changeStatus: "Change Status",
    remove: "Remove",

    // Report page
    reportPageTitle: "Report a Problem",
    dashboard: "Dashboard",
    competitions: "Competitions",
    users: "Users",
    games: "Games",
    reports: "Reports",
    settings: "Settings",
    submitNewReport: "Submit a New Report",
    reportTitle: "Report Title:",
    reportTitlePlaceholder: "Enter a descriptive title",
    category: "Category:",
    selectCategory: "Select a category",
    technical: "Technical Issue",
    account: "Account Problem",
    competitionIssue: "Competition Issue",
    payment: "Payment Problem",
    other: "Other",
    priority: "Priority:",
    low: "Low",
    medium: "Medium",
    high: "High",
    critical: "Critical",
    description: "Description:",
    descriptionPlaceholder: "Describe the problem in detail...",
    stepsToReproduce: "Steps to Reproduce:",
    stepsPlaceholder: "List the steps to reproduce this issue...",
    attachments: "Attachments:",
    dragDropFiles: "Drag & drop files or click to browse",
    submitReport: "Submit Report",
    recentReports: "Recent Reports",
    filter: "Filter",
    open: "Open",
    inProgress: "In Progress",
    resolved: "Resolved",
    closed: "Closed",
    reportedBy: "Reported By:",
    reportedOn: "Reported On:",
    viewDetails: "View Details",
    assign: "Assign",
    changeStatus: "Change Status",
    close: "Close",
    comments: "Comments",
    addCommentPlaceholder: "Add a comment...",
    postComment: "Post Comment",
    assignedTo: "Assigned To:",
    lastUpdated: "Last Updated:",


    },
    ar: {
      // Login Page
      logoText: "الشعار",
      welcomeTitle: "مرحبًا بكم في منصتنا",
      welcomeDesc: "قم بإدارة مسابقات الألعاب الذهنية بكل سهولة ويسر.",
      loginTitle: "تسجيل الدخول",
      emailLabel: "البريد الإلكتروني",
      passwordLabel: "كلمة المرور",
      forgotPassword: "نسيت كلمة المرور؟",
      userRole: "أنا مستخدم",
      adminRole: "أنا مشرف",
      loginBtn: "دخول",
      noAccount: "لا تملك حسابًا؟",
      registerNow: "سجّل الآن",
  
      // Register Page
      welcomeTitleReg: "انضم إلى منصتنا",
      welcomeDescReg: "سجّل الآن وابدأ المشاركة في مسابقات الألعاب الذهنية.",
      registerTitle: "إنشاء حساب",
      fullNameLabel: "الاسم الكامل",
      confirmPasswordLabel: "تأكيد كلمة المرور",
      registerBtn: "تسجيل",
      alreadyHaveAccount: "هل لديك حساب؟",
      loginHere: "سجّل الدخول هنا",
  
      // Forgot Password Page
      forgotPassTitle: "إعادة تعيين كلمة المرور",
      forgotPassDesc: "أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور.",
      submitBtn: "إرسال",
  
      // Admin Home Page
      adminWelcome: "لوحة تحكم المشرف",
      adminDesc: "قم بإدارة المسابقات والمستخدمين والألعاب بسهولة.",
      cardCompetitions: "المسابقات",
      cardUsers: "المستخدمين",
      cardGames: "الألعاب",
      cardCompetitionsTitle: "المسابقات",
      cardCompetitionsDesc: "إدارة وجدولة المسابقات.",
      cardcreateCompTitle: "إنشاء مسابقة",
      cardcreateCompDesc: "أنشئ مسابقات جديدة من هنا.",
      cardreportTitle: "الإبلاغ عن مشكل",
      cardreportDesc: "بلغ عن أي مشكلة لفريقنا.",

       /* Competitions Page */
      compPageTitle: "المسابقات",
      compPageDesc: "تصفح أو أنشئ مسابقات جديدة.",
      searchPlaceholder: "ابحث...",
      createCompetitionBtn: "إنشاء مسابقة",
      noCompetitionsMsg: "لا توجد مسابقات.",
      participationApps: "طلبات المشاركة",
    participantsList: "قائمة المشاركين",
    admissionRequirements: "شروط القبول",
    prizesList: "قائمة الجوائز",
    matchTiming: "توقيت المباريات",
    qualifiers: "التصفيات",
    availableGames: "الألعاب المتاحة",

    // صفحة إنشاء مسابقة
    compPageTitle: "المسابقات",
    participationApps: "طلبات المشاركة",
    participantsList: "قائمة المشاركين",
    admissionRequirements: "شروط القبول",
    prizesList: "قائمة الجوائز",
    matchTiming: "توقيت المباريات",
    qualifiers: "التصفيات",
    availableGames: "الألعاب المتاحة",
    searchPlaceholder: "بحث...",

    pageTitle: "إنشاء مسابقة",
    section1Title: "معلومات المسابقة",
    compNameLabel: "اسم المسابقة",
    compNamePlaceholder: "مثال: الشطرنج",
    maxPlayersLabel: "الحد الأقصى لعدد اللاعبين",
    maxPlayersPlaceholder: "مثال: 20",
    compPlaceLabel: "مكان المسابقة",
    compPlacePlaceholder: "مثال: القاعة الرياضية",
    beginDateLabel: "تاريخ البدء",
    endDateLabel: "تاريخ الانتهاء",
    playerInfoLabel: "معلومات اللاعبين المطلوبة",
    playerInfoPlaceholder: "مثال: الاسم الكامل، رقم الهاتف...",

    section2Title: "قائمة الجوائز",
    enableGiftsLabel: "تفعيل الجوائز",
    addGiftBtn: "+ إضافة جائزة",

    section3Title: "نظام اللاعبين",
    playModeLabel: "عدد اللاعبين",
    modeSingle: "واحد",
    modeDouble: "اثنان",
    modeMultiple: "متعدد",
    gamesListTitle: "ألعاب المسابقة",
    addGameBtn: "+ إضافة لعبة",

    section4Title: "الوصف",
    descPlaceholder: "اكتب وصفًا هنا...",
    systemTitle: "نظام المسابقة",
    systemPoints: "يعتمد على النقاط",
    systemRandom: "عشوائي",
    createCompBtn: "إنشاء المسابقة",

    //list of pp page
    prizesList: "قائمة الجوائز",
    participantsList: "قائمة المشاركين",
    firstPlace: "المركز الأول:",
    secondPlace: "المركز الثاني:",
    thirdPlace: "المركز الثالث:",
    deleteBtn: "حذف",
    addBtn: "إضافة",
    editBtn: "تعديل",
    teamName: "اسم الفريق",
    participantName: "اسم المشارك",
    actions: "الإجراءات",
    rejectBtn: "رفض",
    rejectionReason: "سبب الرفض",
    confirmBtn: "تأكيد",
    cancelBtn: "إلغاء",
      // plan page
      // Match section
    team1Label: "الفريق الأول:",
    team2Label: "الفريق الثاني:",
    dateLabel: "التاريخ:",
    timeLabel: "الوقت:",
    gameLabel: "اللعبة:",
    addBtn: "إضافة",
    
    // Match table headers
    matchDescription: "وصف المباراة",
    matchDate: "التاريخ",
    matchTime: "الوقت",
    matchGame: "اللعبة",
    actions: "الإجراءات",
    
    // Games section
    addGameBtn: "إضافة لعبة",
    
    // Form placeholders
    selectTeam: "اختر الفريق",
    selectGame: "اختر اللعبة",
    newGameName: "اسم اللعبة الجديدة",
    
    // Alert messages
    fillAllFields: "يرجى ملء جميع الحقول",
    sameTeamError: "لا يمكن اختيار نفس الفريق",
    enterGameName: "يرجى إدخال اسم اللعبة",

    // points page
     // Match section
     team1Label: "الفريق الأول:",
     team2Label: "الفريق الثاني:",
     dateLabel: "التاريخ:",
     timeLabel: "الوقت:",
     gameLabel: "اللعبة:",
     addBtn: "إضافة",
     
     // Match table headers
     matchDescription: "وصف المباراة",
     matchDate: "التاريخ",
     matchTime: "الوقت",
     matchGame: "اللعبة",
     actions: "الإجراءات",
     
     // Games section
     addGameBtn: "إضافة لعبة",
     
     // Form placeholders
     selectTeam: "اختر الفريق",
     selectGame: "اختر اللعبة",
     newGameName: "اسم اللعبة الجديدة",
     
     // Alert messages
     fillAllFields: "يرجى ملء جميع الحقول",
     sameTeamError: "لا يمكن اختيار نفس الفريق",
     enterGameName: "يرجى إدخال اسم اللعبة",
     
     // Points page
     pointsTitle: "النقاط",
     teamNameLabel: "اسم الفريق:",
     pointsLabel: "النقاط:",
     rankHeader: "الترتيب",
     teamNameHeader: "اسم الفريق",
     pointsHeader: "النقاط",
     actionsHeader: "الإجراءات",
     qualificationNote: "يتم تأهيل 8 فرق أصحاب النقاط الأعلى",
     qualifiedTeamsTitle: "قائمة المتأهلين",
     playoffsTitle: "التصفيات",
     winnerLabel: "الفائز",
     bracketNote: "عند الضغط على مربع الفريق تظهر قائمة التفاصيل",
     detailsBtn: "تفاصيل",
     
     // Team details modal
     teamDetailsTitle: "تفاصيل الفريق",
     teamNameDetail: "اسم الفريق:",
     pointsDetail: "النقاط:",
     matchesPlayedDetail: "المباريات الملعوبة:",
     winsDetail: "الفوز:",
     lossesDetail: "الخسارة:",

     ////////////////////// requests page
      // Request page
    existingCompetitions: "المسابقات الحالية",
    registrationRequests: "طلبات التسجيل",
    selectCompetitionMessage: "اختر مسابقة من اليسار لعرض طلباتها.",
    maxPlayers: "الحد الأقصى للاعبين:",
    begins: "تبدأ في:",
    ends: "تنتهي في:",
    status: "الحالة:",
    inProgress: "قيد التنفيذ",
    ended: "منتهية",
    upcoming: "قادمة",
    individual: "فردي",
    team: "فريق",
    playerName: "اسم اللاعب:",
    infoList: "قائمة المعلومات",
    gender: "الجنس:",
    major: "التخصص:",
    age: "العمر:",
    email: "البريد الإلكتروني:",
    phone: "الهاتف:",
    requestDate: "تاريخ الطلب:",
    teamMembers: "أعضاء الفريق:",
    accept: "قبول",
    reject: "رفض",
    rejectionReason: "سبب الرفض",
    reasonLabel: "السبب:",
    cancel: "إلغاء",
    sendDecision: "إرسال القرار",
    searchRequests: "بحث عن الطلبات...",
    all: "الكل",
    pending: "قيد الانتظار",
    approved: "مقبول",
    rejected: "مرفوض",
    noRequests: "لا توجد طلبات لهذه المسابقة.",
    edit: "تعديل",
    changeStatus: "تغيير الحالة",
    remove: "حذف",

    // Report page
    reportPageTitle: "الإبلاغ عن مشكلة",
    dashboard: "لوحة التحكم",
    competitions: "المسابقات",
    users: "المستخدمين",
    games: "الألعاب",
    reports: "التقارير",
    settings: "الإعدادات",
    submitNewReport: "تقديم تقرير جديد",
    reportTitle: "عنوان التقرير:",
    reportTitlePlaceholder: "أدخل عنوانًا وصفيًا",
    category: "الفئة:",
    selectCategory: "اختر فئة",
    technical: "مشكلة تقنية",
    account: "مشكلة في الحساب",
    competitionIssue: "مشكلة في المسابقة",
    payment: "مشكلة في الدفع",
    other: "أخرى",
    priority: "الأولوية:",
    low: "منخفضة",
    medium: "متوسطة",
    high: "عالية",
    critical: "حرجة",
    description: "الوصف:",
    descriptionPlaceholder: "صف المشكلة بالتفصيل...",
    stepsToReproduce: "خطوات إعادة الإنتاج:",
    stepsPlaceholder: "اذكر الخطوات لإعادة إنتاج هذه المشكلة...",
    attachments: "المرفقات:",
    dragDropFiles: "اسحب وأفلت الملفات أو انقر للتصفح",
    submitReport: "إرسال التقرير",
    recentReports: "التقارير الحديثة",
    filter: "تصفية",
    open: "مفتوح",
    inProgress: "قيد التنفيذ",
    resolved: "تم الحل",
    closed: "مغلق",
    reportedBy: "تم الإبلاغ بواسطة:",
    reportedOn: "تم الإبلاغ في:",
    viewDetails: "عرض التفاصيل",
    assign: "تعيين",
    changeStatus: "تغيير الحالة",
    close: "إغلاق",
    comments: "التعليقات",
    addCommentPlaceholder: "أضف تعليقًا...",
    postComment: "نشر التعليق",
    assignedTo: "معين إلى:",
    lastUpdated: "آخر تحديث:",
   }

    
  };
  
  /***************************************************
   * Core Language Switch Function
   ***************************************************/
  function setLanguage(lang) {
    // Set HTML attributes for direction
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
  
    // Update all elements with [data-key]
    document.querySelectorAll("[data-key]").forEach(element => {
      const key = element.getAttribute("data-key");
      element.textContent = translations[lang][key];
    });
  }
  
  /***************************************************
   * Highlighted Language Switch
   ***************************************************/
  function setLanguageWithHighlight(lang) {
    // 1. Switch the page text
    setLanguage(lang);
  
    // 2. Remove "active" class from both language segments
    const englishOption = document.getElementById("english-option");
    const arabicOption = document.getElementById("arabic-option");
    if (englishOption) englishOption.classList.remove("active");
    if (arabicOption) arabicOption.classList.remove("active");
  
    // 3. Add "active" class to the chosen language
    if (lang === "en" && englishOption) {
      englishOption.classList.add("active");
    } else if (lang === "ar" && arabicOption) {
      arabicOption.classList.add("active");
    }
  
    // 4. Save the user's preference
    localStorage.setItem("lang", lang);
  }
  
  /***************************************************
   * On Page Load, Set Saved or Default Language
   ***************************************************/
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguageWithHighlight(savedLang);
  });
          
    
      