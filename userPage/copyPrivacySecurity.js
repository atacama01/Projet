document.addEventListener("DOMContentLoaded", () => {
    // Current language (default: English)
    let currentLanguage = "en"
  
    // Translations object (example, replace with your actual translations)
    const translations = {
      en: {
        notificationMessage: "This website uses cookies to improve your experience.",
        close: "Close",
        privacySettings: "Privacy Settings",
        english: "English",
        arabic: "Arabic",
        security: "Security",
        privacy: "Privacy",
        dataActions: "Data Actions",
        loginHistory: "Login History",
        twoFactorAuth: "Two-Factor Authentication",
        enableTwoFactorAuth: "Enable Two-Factor Authentication",
        enterVerificationCode: "Enter Verification Code",
        verify: "Verify",
        passwordSettings: "Password Settings",
        currentPassword: "Current Password",
        newPassword: "New Password",
        confirmPassword: "Confirm Password",
        updatePassword: "Update Password",
        passwordWeak: "Weak",
        passwordMedium: "Medium",
        passwordStrong: "Strong",
        passwordVeryStrong: "Very Strong",
        searchSettings: "Search Settings",
        deleteAccount: "Delete Account",
        requestDownload: "Request Download",
        requestDeletion: "Request Deletion",
        logout: "Logout",
        logoutAllDevices: "Logout All Devices",
        currentDevice: "Current Device",
        deviceName: "Device Name",
        lastLogin: "Last Login",
        location: "Location",
        ipAddress: "IP Address",
        dataCollection: "Data Collection",
        personalizedAds: "Personalized Ads",
        locationTracking: "Location Tracking",
        activityTracking: "Activity Tracking",
        dataSharing: "Data Sharing",
        thirdPartySharing: "Third-Party Sharing",
        managePreferences: "Manage Preferences",
        saveChanges: "Save Changes",
        cancel: "Cancel",
        rememberMe: "Remember Me",
        forgotPassword: "Forgot Password",
        createAccount: "Create Account",
        termsOfService: "Terms of Service",
        privacyPolicy: "Privacy Policy",
        cookiePolicy: "Cookie Policy",
        helpCenter: "Help Center",
        contactUs: "Contact Us",
        feedback: "Feedback",
        accessibilityStatement: "Accessibility Statement",
        reportAbuse: "Report Abuse",
        communityGuidelines: "Community Guidelines",
        copyrightPolicy: "Copyright Policy",
        trustAndSafety: "Trust & Safety",
        securityTips: "Security Tips",
        accountSecurity: "Account Security",
        dataSecurity: "Data Security",
        paymentSecurity: "Payment Security",
        reportVulnerability: "Report Vulnerability",
        securityAdvisories: "Security Advisories",
        securityUpdates: "Security Updates",
        securityBlog: "Security Blog",
        securityResources: "Security Resources",
        securityCheckup: "Security Checkup",
        securityDashboard: "Security Dashboard",
        securitySettings: "Security Settings",
        privacyDashboard: "Privacy Dashboard",
        privacyCheckup: "Privacy Checkup",
        privacySettings: "Privacy Settings",
        dataPrivacy: "Data Privacy",
        privacyTips: "Privacy Tips",
        privacyResources: "Privacy Resources",
        privacyPolicyUpdates: "Privacy Policy Updates",
        privacyBlog: "Privacy Blog",
        privacyControls: "Privacy Controls",
        privacyStatement: "Privacy Statement",
        privacyGuide: "Privacy Guide",
        privacyCenter: "Privacy Center",
        manageData: "Manage Data",
        downloadData: "Download Data",
        deleteData: "Delete Data",
        dataPortability: "Data Portability",
        dataRetention: "Data Retention",
        dataBreach: "Data Breach",
        dataEncryption: "Data Encryption",
        dataBackup: "Data Backup",
        dataRecovery: "Data Recovery",
        dataGovernance: "Data Governance",
        dataCompliance: "Data Compliance",
        dataProtection: "Data Protection",
        dataSecurityMeasures: "Data Security Measures",
        dataPrivacyPractices: "Data Privacy Practices",
        dataTransparency: "Data Transparency",
        dataAccountability: "Data Accountability",
        dataEthics: "Data Ethics",
        dataStewardship: "Data Stewardship",
        dataIntegrity: "Data Integrity",
        dataQuality: "Data Quality",
        dataValidation: "Data Validation",
        dataVerification: "Data Verification",
        dataAccuracy: "Data Accuracy",
        dataCompleteness: "Data Completeness",
        dataConsistency: "Data Consistency",
        dataTimeliness: "Data Timeliness",
        dataRelevance: "Data Relevance",
        dataUsability: "Data Usability",
        dataAccessibility: "Data Accessibility",
        dataSecurityIncidents: "Data Security Incidents",
        dataPrivacyViolations: "Data Privacy Violations",
        dataLossPrevention: "Data Loss Prevention",
        dataLeakage: "Data Leakage",
        dataMisuse: "Data Misuse",
        dataAbuse: "Data Abuse",
        dataTheft: "Data Theft",
        dataFraud: "Data Fraud",
        dataCorruption: "Data Corruption",
        dataTampering: "Data Tampering",
        dataBreachNotification: "Data Breach Notification",
        dataPrivacyRights: "Data Privacy Rights",
        dataSubjectRights: "Data Subject Rights",
        accessToData: "Access to Data",
        rectificationOfData: "Rectification of Data",
        erasureOfData: "Erasure of Data",
        restrictionOfProcessing: "Restriction of Processing",
        dataPortabilityRights: "Data Portability Rights",
        rightToObject: "Right to Object",
        automatedDecisionMaking: "Automated Decision-Making",
        profiling: "Profiling",
        consentManagement: "Consent Management",
        cookieConsent: "Cookie Consent",
        privacyConsent: "Privacy Consent",
        dataConsent: "Data Consent",
        consentWithdrawal: "Consent Withdrawal",
        consentPreferences: "Consent Preferences",
        consentRecords: "Consent Records",
        consentAuditing: "Consent Auditing",
        consentCompliance: "Consent Compliance",
        consentEnforcement: "Consent Enforcement",
        consentRevocation: "Consent Revocation",
        consentRenewal: "Consent Renewal",
        consentLifecycle: "Consent Lifecycle",
        consentTracking: "Consent Tracking",
        consentMonitoring: "Consent Monitoring",
        consentReporting: "Consent Reporting",
        consentAnalytics: "Consent Analytics",
        consentOptimization: "Consent Optimization",
        consentAutomation: "Consent Automation",
        consentOrchestration: "Consent Orchestration",
        consentIntelligence: "Consent Intelligence",
        consentGovernance: "Consent Governance",
        consentManagementPlatform: "Consent Management Platform",
        cmp: "CMP",
        privacyEnhancingTechnologies: "Privacy Enhancing Technologies",
        pet: "PET",
        anonymization: "Anonymization",
        pseudonymization: "Pseudonymization",
        differentialPrivacy: "Differential Privacy",
        homomorphicEncryption: "Homomorphic Encryption",
        secureMultiPartyComputation: "Secure Multi-Party Computation",
        federatedLearning: "Federated Learning",
        privacyPreservingDataMining: "Privacy-Preserving Data Mining",
        privacyPreservingMachineLearning: "Privacy-Preserving Machine Learning",
        privacyPreservingAnalytics: "Privacy-Preserving Analytics",
        privacyPreservingAI: "Privacy-Preserving AI",
        privacyPreservingCloud: "Privacy-Preserving Cloud",
        privacyPreservingBlockchain: "Privacy-Preserving Blockchain",
        privacyPreservingIoT: "Privacy-Preserving IoT",
        privacyPreservingEdgeComputing: "Privacy-Preserving Edge Computing",
        privacyPreservingDataSharing: "Privacy-Preserving Data Sharing",
        privacyPreservingCollaboration: "Privacy-Preserving Collaboration",
        privacyPreservingCommunication: "Privacy-Preserving Communication",
        privacyPreservingSearch: "Privacy-Preserving Search",
        privacyPreservingAdvertising: "Privacy-Preserving Advertising",
        privacyPreservingMarketing: "Privacy-Preserving Marketing",
        privacyPreservingPersonalization: "Privacy-Preserving Personalization",
        privacyPreservingRecommendation: "Privacy-Preserving Recommendation",
        privacyPreservingSocialNetworking: "Privacy-Preserving Social Networking",
        privacyPreservingHealthcare: "Privacy-Preserving Healthcare",
        privacyPreservingFinance: "Privacy-Preserving Finance",
        privacyPreservingEducation: "Privacy-Preserving Education",
        privacyPreservingGovernment: "Privacy-Preserving Government",
        privacyPreservingResearch: "Privacy-Preserving Research",
        privacyPreservingInnovation: "Privacy-Preserving Innovation",
        privacyPreservingTechnology: "Privacy-Preserving Technology",
        privacyPreservingSolutions: "Privacy-Preserving Solutions",
        privacyPreservingTools: "Privacy-Preserving Tools",
        privacyPreservingServices: "Privacy-Preserving Services",
        privacyPreservingProducts: "Privacy-Preserving Products",
        privacyPreservingPlatforms: "Privacy-Preserving Platforms",
        privacyPreservingEcosystem: "Privacy-Preserving Ecosystem",
        privacyPreservingCommunity: "Privacy-Preserving Community",
        privacyPreservingMovement: "Privacy-Preserving Movement",
        privacyPreservingFuture: "Privacy-Preserving Future",
        privacyPreservingWorld: "Privacy-Preserving World",
      },
      ar: {
        notificationMessage: "يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربتك.",
        close: "إغلاق",
        privacySettings: "إعدادات الخصوصية",
        english: "الإنجليزية",
        arabic: "العربية",
        security: "الأمان",
        privacy: "الخصوصية",
        dataActions: "إجراءات البيانات",
        loginHistory: "سجل الدخول",
        twoFactorAuth: "المصادقة الثنائية",
        enableTwoFactorAuth: "تمكين المصادقة الثنائية",
        enterVerificationCode: "أدخل رمز التحقق",
        verify: "تحقق",
        passwordSettings: "إعدادات كلمة المرور",
        currentPassword: "كلمة المرور الحالية",
        newPassword: "كلمة المرور الجديدة",
        confirmPassword: "تأكيد كلمة المرور",
        updatePassword: "تحديث كلمة المرور",
        passwordWeak: "ضعيف",
        passwordMedium: "متوسط",
        passwordStrong: "قوي",
        passwordVeryStrong: "قوي جدا",
        searchSettings: "إعدادات البحث",
        deleteAccount: "حذف حساب",
        requestDownload: "طلب التنزيل",
        requestDeletion: "طلب الحذف",
        logout: "تسجيل الخروج",
        logoutAllDevices: "تسجيل الخروج من جميع الأجهزة",
        currentDevice: "الجهاز الحالي",
        deviceName: "اسم الجهاز",
        lastLogin: "آخر تسجيل دخول",
        location: "الموقع",
        ipAddress: "عنوان IP",
        dataCollection: "جمع البيانات",
        personalizedAds: "إعلانات مخصصة",
        locationTracking: "تتبع الموقع",
        activityTracking: "تتبع النشاط",
        dataSharing: "مشاركة البيانات",
        thirdPartySharing: "مشاركة الطرف الثالث",
        managePreferences: "إدارة التفضيلات",
        saveChanges: "حفظ التغييرات",
        cancel: "إلغاء",
        rememberMe: "تذكرنى",
        forgotPassword: "هل نسيت كلمة المرور",
        createAccount: "إنشاء حساب",
        termsOfService: "شروط الخدمة",
        privacyPolicy: "سياسة الخصوصية",
        cookiePolicy: "سياسة ملفات الارتباط",
        helpCenter: "مركز المساعدة",
        contactUs: "اتصل بنا",
        feedback: "ملاحظات",
        accessibilityStatement: "بيان إمكانية الوصول",
        reportAbuse: "الإبلاغ عن إساءة",
        communityGuidelines: "إرشادات المنتدى",
        copyrightPolicy: "سياسة حقوق النشر",
        trustAndSafety: "الثقة والأمان",
        securityTips: "نصائح الأمان",
        accountSecurity: "أمان الحساب",
        dataSecurity: "أمن البيانات",
        paymentSecurity: "أمن الدفع",
        reportVulnerability: "الإبلاغ عن الثغرات الأمنية",
        securityAdvisories: "النصائح الأمنية",
        securityUpdates: "تحديثات الأمان",
        securityBlog: "مدونة الأمان",
        securityResources: "موارد الأمان",
        securityCheckup: "فحص الأمان",
        securityDashboard: "لوحة معلومات الأمان",
        securitySettings: "إعدادات الأمان",
        privacyDashboard: "لوحة معلومات الخصوصية",
        privacyCheckup: "فحص الخصوصية",
        privacySettings: "إعدادات الخصوصية",
        dataPrivacy: "خصوصية البيانات",
        privacyTips: "نصائح الخصوصية",
        privacyResources: "موارد الخصوصية",
        privacyPolicyUpdates: "تحديثات سياسة الخصوصية",
        privacyBlog: "مدونة الخصوصية",
        privacyControls: "ضوابط الخصوصية",
        privacyStatement: "بيان الخصوصية",
        privacyGuide: "دليل الخصوصية",
        privacyCenter: "مركز الخصوصية",
        manageData: "إدارة البيانات",
        downloadData: "تنزيل البيانات",
        deleteData: "حذف البيانات",
        dataPortability: "إمكانية نقل البيانات",
        dataRetention: "الاحتفاظ بالبيانات",
        dataBreach: "خرق البيانات",
        dataEncryption: "تشفير البيانات",
        dataBackup: "نسخ البيانات الاحتياطية",
        dataRecovery: "استعادة البيانات",
        dataGovernance: "حوكمة البيانات",
        dataCompliance: "الامتثال للبيانات",
        dataProtection: "حماية البيانات",
        dataSecurityMeasures: "تدابير أمن البيانات",
        dataPrivacyPractices: "ممارسات خصوصية البيانات",
        dataTransparency: "شفافية البيانات",
        dataAccountability: "المساءلة عن البيانات",
        dataEthics: "أخلاقيات البيانات",
        dataStewardship: "الإشراف على البيانات",
        dataIntegrity: "سلامة البيانات",
        dataQuality: "جودة البيانات",
        dataValidation: "التحقق من صحة البيانات",
        dataVerification: "التحقق من البيانات",
        dataAccuracy: "دقة البيانات",
        dataCompleteness: "اكتمال البيانات",
        dataConsistency: "اتساق البيانات",
        dataTimeliness: "حسن توقيت البيانات",
        dataRelevance: "أهمية البيانات",
        dataUsability: "قابلية استخدام البيانات",
        dataAccessibility: "إمكانية الوصول إلى البيانات",
        dataSecurityIncidents: "حوادث أمن البيانات",
        dataPrivacyViolations: "انتهاكات خصوصية البيانات",
        dataLossPrevention: "منع فقدان البيانات",
        dataLeakage: "تسرب البيانات",
        dataMisuse: "إساءة استخدام البيانات",
        dataAbuse: "إساءة استخدام البيانات",
        dataTheft: "سرقة البيانات",
        dataFraud: "الاحتيال في البيانات",
        dataCorruption: "تلف البيانات",
        dataTampering: "التلاعب بالبيانات",
        dataBreachNotification: "إشعار خرق البيانات",
        dataPrivacyRights: "حقوق خصوصية البيانات",
        dataSubjectRights: "حقوق أصحاب البيانات",
        accessToData: "الوصول إلى البيانات",
        rectificationOfData: "تصحيح البيانات",
        erasureOfData: "محو البيانات",
        restrictionOfProcessing: "تقييد المعالجة",
        dataPortabilityRights: "حقوق قابلية نقل البيانات",
        rightToObject: "الحق في الاعتراض",
        automatedDecisionMaking: "اتخاذ القرارات الآلي",
        profiling: "التنميط",
        consentManagement: "إدارة الموافقة",
        cookieConsent: "الموافقة على ملفات تعريف الارتباط",
        privacyConsent: "الموافقة على الخصوصية",
        dataConsent: "الموافقة على البيانات",
        consentWithdrawal: "سحب الموافقة",
        consentPreferences: "تفضيلات الموافقة",
        consentRecords: "سجلات الموافقة",
        consentAuditing: "تدقيق الموافقة",
        consentCompliance: "الامتثال للموافقة",
        consentEnforcement: "إنفاذ الموافقة",
        consentRevocation: "إلغاء الموافقة",
        consentRenewal: "تجديد الموافقة",
        consentLifecycle: "دورة حياة الموافقة",
        consentTracking: "تتبع الموافقة",
        consentMonitoring: "مراقبة الموافقة",
        consentReporting: "الإبلاغ عن الموافقة",
        consentAnalytics: "تحليلات الموافقة",
        consentOptimization: "تحسين الموافقة",
        consentAutomation: "أتمتة الموافقة",
        consentOrchestration: "تنظيم الموافقة",
        consentIntelligence: "ذكاء الموافقة",
        consentGovernance: "حوكمة الموافقة",
        consentManagementPlatform: "منصة إدارة الموافقة",
        cmp: "CMP",
        privacyEnhancingTechnologies: "تقنيات تعزيز الخصوصية",
        pet: "PET",
        anonymization: "إخفاء الهوية",
        pseudonymization: "اسم مستعار",
        differentialPrivacy: "الخصوصية التفاضلية",
        homomorphicEncryption: "التشفير المتماثل",
        secureMultiPartyComputation: "حساب متعدد الأطراف آمن",
        federatedLearning: "التعلم الموحد",
        privacyPreservingDataMining: "استخراج البيانات مع الحفاظ على الخصوصية",
        privacyPreservingMachineLearning: "التعلم الآلي مع الحفاظ على الخصوصية",
        privacyPreservingAnalytics: "تحليلات مع الحفاظ على الخصوصية",
        privacyPreservingAI: "الذكاء الاصطناعي مع الحفاظ على الخصوصية",
        privacyPreservingCloud: "السحابة مع الحفاظ على الخصوصية",
        privacyPreservingBlockchain: "سلسلة الكتل مع الحفاظ على الخصوصية",
        privacyPreservingIoT: "إنترنت الأشياء مع الحفاظ على الخصوصية",
        privacyPreservingEdgeComputing: "الحوسبة الطرفية مع الحفاظ على الخصوصية",
        privacyPreservingDataSharing: "مشاركة البيانات مع الحفاظ على الخصوصية",
        privacyPreservingCollaboration: "التعاون مع الحفاظ على الخصوصية",
        privacyPreservingCommunication: "الاتصال مع الحفاظ على الخصوصية",
        privacyPreservingSearch: "البحث مع الحفاظ على الخصوصية",
        privacyPreservingAdvertising: "الإعلان مع الحفاظ على الخصوصية",
        privacyPreservingMarketing: "التسويق مع الحفاظ على الخصوصية",
        privacyPreservingPersonalization: "التخصيص مع الحفاظ على الخصوصية",
        privacyPreservingRecommendation: "التوصية مع الحفاظ على الخصوصية",
        privacyPreservingSocialNetworking: "الشبكات الاجتماعية مع الحفاظ على الخصوصية",
        privacyPreservingHealthcare: "الرعاية الصحية مع الحفاظ على الخصوصية",
        privacyPreservingFinance: "التمويل مع الحفاظ على الخصوصية",
        privacyPreservingEducation: "التعليم مع الحفاظ على الخصوصية",
        privacyPreservingGovernment: "الحكومة مع الحفاظ على الخصوصية",
        privacyPreservingResearch: "البحث مع الحفاظ على الخصوصية",
        privacyPreservingInnovation: "الابتكار مع الحفاظ على الخصوصية",
        privacyPreservingTechnology: "التكنولوجيا مع الحفاظ على الخصوصية",
        privacyPreservingSolutions: "حلول مع الحفاظ على الخصوصية",
        privacyPreservingTools: "أدوات مع الحفاظ على الخصوصية",
        privacyPreservingServices: "خدمات مع الحفاظ على الخصوصية",
        privacyPreservingProducts: "منتجات مع الحفاظ على الخصوصية",
        privacyPreservingPlatforms: "منصات مع الحفاظ على الخصوصية",
        privacyPreservingEcosystem: "النظام البيئي مع الحفاظ على الخصوصية",
        privacyPreservingCommunity: "المجتمع مع الحفاظ على الخصوصية",
        privacyPreservingMovement: "الحركة مع الحفاظ على الخصوصية",
        privacyPreservingFuture: "المستقبل مع الحفاظ على الخصوصية",
        privacyPreservingWorld: "العالم مع الحفاظ على الخصوصية",
      },
    }
  
    // DOM Elements
    const notificationBar = document.getElementById("notificationBar")
    const notificationClose = document.getElementById("notificationClose")
    const englishOption = document.getElementById("english-option")
    const arabicOption = document.getElementById("arabic-option")
    const tabButtons = document.querySelectorAll(".tab-btn")
    const tabPanes = document.querySelectorAll(".tab-pane")
    const twoFactorToggle = document.getElementById("twoFactorToggle")
    const twoFactorSetup = document.getElementById("twoFactorSetup")
    const passwordStrengthSegments = document.querySelectorAll(".strength-segment")
    const strengthText = document.querySelector(".strength-text")
    const newPasswordInput = document.getElementById("newPassword")
    const backgroundObjects = document.getElementById("backgroundObjects")
  
    // Initialize background objects animation
    initBackgroundObjects()
  
    // Notification Bar
    if (notificationClose) {
      notificationClose.addEventListener("click", () => {
        notificationBar.classList.add("hidden")
        // Store in localStorage that notification was closed
        localStorage.setItem("notificationClosed", "true")
      })
    }
  
    // Check if notification was previously closed
    if (localStorage.getItem("notificationClosed") === "true") {
      notificationBar.classList.add("hidden")
    }
  
    // Language Switcher
    if (englishOption && arabicOption) {
      englishOption.addEventListener("click", () => {
        setLanguage("en")
      })
  
      arabicOption.addEventListener("click", () => {
        setLanguage("ar")
      })
    }
  
    // Tab Navigation
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const tabId = this.getAttribute("data-tab")
  
        // Remove active class from all buttons and panes
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        tabPanes.forEach((pane) => pane.classList.remove("active"))
  
        // Add active class to current button and pane
        this.classList.add("active")
        document.getElementById(`${tabId}-tab`).classList.add("active")
      })
    })
  
    // Two-Factor Authentication Toggle
    if (twoFactorToggle && twoFactorSetup) {
      twoFactorToggle.addEventListener("change", function () {
        if (this.checked) {
          twoFactorSetup.style.display = "block"
        } else {
          twoFactorSetup.style.display = "none"
        }
      })
    }
  
    // Password Strength Meter
    if (newPasswordInput && passwordStrengthSegments.length > 0) {
      newPasswordInput.addEventListener("input", function () {
        const password = this.value
        const strength = calculatePasswordStrength(password)
  
        // Reset all segments
        passwordStrengthSegments.forEach((segment) => {
          segment.className = "strength-segment"
        })
  
        // Update segments based on strength
        for (let i = 0; i < strength; i++) {
          if (i < passwordStrengthSegments.length) {
            if (strength === 1) {
              passwordStrengthSegments[i].classList.add("weak")
            } else if (strength === 2) {
              passwordStrengthSegments[i].classList.add("medium")
            } else {
              passwordStrengthSegments[i].classList.add("strong")
            }
          }
        }
  
        // Update strength text
        if (strengthText) {
          if (strength === 0) {
            updateElementText(strengthText, "passwordWeak")
          } else if (strength === 1) {
            updateElementText(strengthText, "passwordWeak")
          } else if (strength === 2) {
            updateElementText(strengthText, "passwordMedium")
          } else if (strength === 3) {
            updateElementText(strengthText, "passwordStrong")
          } else {
            updateElementText(strengthText, "passwordVeryStrong")
          }
        }
      })
    }
  
    // Search functionality
    const searchInput = document.querySelector(".search-input")
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase()
  
        // Get all toggleable elements and section titles
        const searchableElements = document.querySelectorAll(
          ".toggle-label span, .section-title, .data-action-content h3",
        )
  
        // If search term is empty, show all sections
        if (searchTerm === "") {
          document.querySelectorAll(".section").forEach((section) => {
            section.style.display = "block"
          })
          document.querySelectorAll(".toggle-group").forEach((group) => {
            group.style.display = "flex"
          })
          document.querySelectorAll(".data-action-card").forEach((card) => {
            card.style.display = "flex"
          })
          return
        }
  
        // Hide all sections and toggle groups initially
        document.querySelectorAll(".section").forEach((section) => {
          section.style.display = "none"
        })
        document.querySelectorAll(".toggle-group").forEach((group) => {
          group.style.display = "none"
        })
        document.querySelectorAll(".data-action-card").forEach((card) => {
          card.style.display = "none"
        })
  
        // Show sections and toggle groups that match the search term
        searchableElements.forEach((element) => {
          if (element.textContent.toLowerCase().includes(searchTerm)) {
            // Show the parent section
            const section = element.closest(".section")
            if (section) {
              section.style.display = "block"
            }
  
            // If it's a toggle group or data action card, show it
            const toggleGroup = element.closest(".toggle-group")
            if (toggleGroup) {
              toggleGroup.style.display = "flex"
            }
  
            const dataCard = element.closest(".data-action-card")
            if (dataCard) {
              dataCard.style.display = "flex"
            }
          }
        })
      })
    }
  
    // Set initial language
    setLanguage(currentLanguage)
  
    // Language Functions
    function setLanguage(lang) {
      currentLanguage = lang
  
      // Update active state in language switcher
      if (englishOption && arabicOption) {
        if (lang === "en") {
          englishOption.classList.add("active")
          arabicOption.classList.remove("active")
          document.dir = "ltr"
        } else {
          englishOption.classList.remove("active")
          arabicOption.classList.add("active")
          document.dir = "rtl"
        }
      }
  
      // Update all translatable elements
      const translatableElements = document.querySelectorAll("[data-key]")
      translatableElements.forEach((element) => {
        const key = element.getAttribute("data-key")
        updateElementText(element, key)
      })
  
      // Update placeholders
      const elementsWithPlaceholder = document.querySelectorAll("input[data-key], textarea[data-key]")
      elementsWithPlaceholder.forEach((element) => {
        const key = element.getAttribute("data-key")
        if (translations[lang][key]) {
          element.placeholder = translations[lang][key]
        }
      })
  
      // Update select options
      const selectElements = document.querySelectorAll("select")
      selectElements.forEach((select) => {
        Array.from(select.options).forEach((option) => {
          const key = option.getAttribute("data-key")
          if (key && translations[lang][key]) {
            option.text = translations[lang][key]
          }
        })
      })
  
      // Store language preference
      localStorage.setItem("preferredLanguage", lang)
    }
  
    function updateElementText(element, key) {
      if (translations[currentLanguage][key]) {
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = translations[currentLanguage][key]
        } else {
          element.textContent = translations[currentLanguage][key]
        }
      }
    }
  
    // Password Strength Calculator
    function calculatePasswordStrength(password) {
      if (!password) return 0
  
      let strength = 0
  
      // Length check
      if (password.length >= 8) strength += 1
  
      // Complexity checks
      const hasUpperCase = /[A-Z]/.test(password)
      const hasLowerCase = /[a-z]/.test(password)
      const hasNumbers = /\d/.test(password)
      const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  
      if ((hasUpperCase && hasLowerCase) || (hasNumbers && hasSpecialChars)) strength += 1
      if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) strength += 1
      if (password.length >= 12 && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) strength += 1
  
      return strength
    }
  
    // Background Objects Animation
    function initBackgroundObjects() {
      const objects = document.querySelectorAll(".bg-object")
  
      objects.forEach((obj) => {
        // Random starting position within constraints
        const randomX = Math.random() * 10 - 5 // -5 to 5
        const randomY = Math.random() * 10 - 5 // -5 to 5
  
        // Apply random transform
        obj.style.transform = `translate(${randomX}px, ${randomY}px)`
  
        // Add event listeners for interactive movement
        document.addEventListener("mousemove", (e) => {
          const mouseX = e.clientX / window.innerWidth
          const mouseY = e.clientY / window.innerHeight
  
          // Calculate movement based on mouse position
          const moveX = (mouseX - 0.5) * 15
          const moveY = (mouseY - 0.5) * 15
  
          // Apply parallax effect with different intensities based on object position
          const intensity = Number.parseFloat(obj.style.opacity) || 0.1
          const parallaxFactor = 1 + intensity * 10
  
          obj.style.transform = `translate(${moveX / parallaxFactor + randomX}px, ${moveY / parallaxFactor + randomY}px)`
        })
      })
  
      // Add puzzle game interaction
      const puzzleObjects = document.querySelectorAll(".bg-object.puzzle")
      puzzleObjects.forEach((puzzle) => {
        puzzle.style.cursor = "pointer"
        puzzle.addEventListener("click", function () {
          // Simple animation on click
          this.style.transform = "scale(1.5)"
          setTimeout(() => {
            this.style.transform = ""
          }, 300)
        })
      })
    }
  
    // Form Submission Handlers
    const updatePasswordBtn = document.querySelector(".update-password-btn")
    if (updatePasswordBtn) {
      updatePasswordBtn.addEventListener("click", (e) => {
        e.preventDefault()
  
        const currentPassword = document.getElementById("currentPassword").value
        const newPassword = document.getElementById("newPassword").value
        const confirmPassword = document.getElementById("confirmPassword").value
  
        if (!currentPassword || !newPassword || !confirmPassword) {
          alert(currentLanguage === "en" ? "Please fill in all password fields." : "يرجى ملء جميع حقول كلمة المرور.")
          return
        }
  
        if (newPassword !== confirmPassword) {
          alert(currentLanguage === "en" ? "New passwords do not match." : "كلمات المرور الجديدة غير متطابقة.")
          return
        }
  
        const strength = calculatePasswordStrength(newPassword)
        if (strength < 2) {
          alert(currentLanguage === "en" ? "Please choose a stronger password." : "يرجى اختيار كلمة مرور أقوى.")
          return
        }
  
        // Simulate password update
        alert(currentLanguage === "en" ? "Password updated successfully!" : "تم تحديث كلمة المرور بنجاح!")
  
        // Clear form
        document.getElementById("currentPassword").value = ""
        document.getElementById("newPassword").value = ""
        document.getElementById("confirmPassword").value = ""
  
        // Reset strength meter
        passwordStrengthSegments.forEach((segment) => {
          segment.className = "strength-segment"
        })
        updateElementText(strengthText, "passwordWeak")
      })
    }
  
    // Data action buttons
    const dataActionBtns = document.querySelectorAll(".data-action-btn")
    dataActionBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const action = this.textContent.trim()
  
        if (action.includes("Delete Account") || action.includes("حذف حساب")) {
          if (
            confirm(
              currentLanguage === "en"
                ? "Are you sure you want to delete your account? This action cannot be undone."
                : "هل أنت متأكد أنك تريد حذف حسابك؟ لا يمكن التراجع عن هذا الإجراء.",
            )
          ) {
            alert(
              currentLanguage === "en"
                ? "Account deletion request submitted. You will receive a confirmation email."
                : "تم تقديم طلب حذف الحساب. ستتلقى رسالة تأكيد بالبريد الإلكتروني.",
            )
          }
        } else if (action.includes("Request Download") || action.includes("طلب التنزيل")) {
          alert(
            currentLanguage === "en"
              ? "Data download request submitted. You will receive a download link via email within 48 hours."
              : "تم تقديم طلب تنزيل البيانات. ستتلقى رابط التنزيل عبر البريد الإلكتروني في غضون 48 ساعة.",
          )
        } else if (action.includes("Request Deletion") || action.includes("طلب الحذف")) {
          alert(
            currentLanguage === "en"
              ? "Data deletion request submitted. You will receive a confirmation email."
              : "تم تقديم طلب حذف البيانات. ستتلقى رسالة تأكيد بالبريد الإلكتروني.",
          )
        }
      })
    })
  
    // Logout buttons
    const logoutDeviceBtns = document.querySelectorAll(".logout-device-btn")
    logoutDeviceBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const deviceInfo = this.closest(".login-item").querySelector(".device-name").textContent
  
        alert(currentLanguage === "en" ? `Logged out from ${deviceInfo}` : `تم تسجيل الخروج من ${deviceInfo}`)
  
        // Remove the item from the list
        this.closest(".login-item").remove()
      })
    })
  
    const logoutAllBtn = document.querySelector(".logout-all-btn")
    if (logoutAllBtn) {
      logoutAllBtn.addEventListener("click", () => {
        if (
          confirm(
            currentLanguage === "en"
              ? "Are you sure you want to log out from all devices?"
              : "هل أنت متأكد أنك تريد تسجيل الخروج من جميع الأجهزة؟",
          )
        ) {
          // Remove all items except the current device
          const loginItems = document.querySelectorAll(".login-item:not(:has(.login-status.current))")
          loginItems.forEach((item) => {
            item.remove()
          })
  
          alert(
            currentLanguage === "en" ? "Logged out from all other devices." : "تم تسجيل الخروج من جميع الأجهزة الأخرى.",
          )
        }
      })
    }
  
    // Check for stored language preference
    const storedLanguage = localStorage.getItem("preferredLanguage")
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  })
  