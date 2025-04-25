// Translations object
const translations = {
    en: {
      // Notification
      notificationMessage: "Your privacy settings were last updated 30 days ago. Consider reviewing them.",
  
      // Header
      privacySecurity: "Privacy & Security",
      searchPlaceholder: "Search settings...",
      notifications: "Notifications",
      settings: "Settings",
  
      // Tabs
      privacyTab: "Privacy",
      securityTab: "Security",
      dataTab: "Data Management",
      policyTab: "Privacy Policy",
  
      // Privacy Tab
      profilePrivacy: "Profile Privacy",
      profileVisibility: "Profile Visibility",
      profileVisibilityDesc: "Control who can see your profile information.",
      activityStatus: "Activity Status",
      activityStatusDesc: "Show when you're active on the platform.",
      showResults: "Show Results",
      showResultsDesc: "Allow your competition results to be visible on public leaderboards.",
      dataSharing: "Data Sharing",
      dataCollection: "Data Collection",
      dataCollectionDesc: "Allow us to collect anonymous usage data to improve our services.",
      thirdPartySharing: "Third-Party Sharing",
      thirdPartySharingDesc: "Allow sharing your data with trusted third parties.",
      personalizedAds: "Personalized Ads",
      personalizedAdsDesc: "Allow us to show you personalized advertisements based on your activity.",
      public: "Public",
      friends: "Friends Only",
      private: "Private",
  
      // Security Tab
      accountSecurity: "Account Security",
      currentPassword: "Current Password",
      newPassword: "New Password",
      confirmPassword: "Confirm New Password",
      passwordStrength: "Password Strength:",
      passwordWeak: "Weak",
      passwordMedium: "Medium",
      passwordStrong: "Strong",
      passwordVeryStrong: "Very Strong",
      updatePassword: "Update Password",
      twoFactorAuth: "Two-Factor Authentication",
      enableTwoFactor: "Enable Two-Factor Authentication",
      enableTwoFactorDesc:
        "Add an extra layer of security to your account by requiring a verification code in addition to your password.",
      twoFactorInstructions: "Scan this QR code with your authenticator app, then enter the verification code below.",
      verificationCode: "Verification Code",
      verify: "Verify",
      loginHistory: "Login History",
      currentDevice: "Current Device",
      logoutDevice: "Logout",
      logoutAllDevices: "Logout from All Devices",
  
      // Data Management Tab
      dataManagement: "Data Management",
      downloadData: "Download Your Data",
      downloadDataDesc:
        "Get a copy of all the data we have stored about you, including your profile information, activity, and preferences.",
      requestDownload: "Request Download",
      deleteData: "Delete Your Data",
      deleteDataDesc: "Request deletion of specific data we have stored about you. This action cannot be undone.",
      requestDeletion: "Request Deletion",
      deleteAccount: "Delete Your Account",
      deleteAccountDesc: "Permanently delete your account and all associated data. This action cannot be undone.",
  
      // Privacy Policy Tab
      privacyPolicy: "Privacy Policy",
      lastUpdated: "Last Updated: May 1, 2023",
      informationWeCollect: "Information We Collect",
      informationWeCollectDesc:
        "We collect information you provide directly to us, such as when you create an account, update your profile, use interactive features, participate in contests, or otherwise communicate with us. This information may include your name, email address, phone number, profile picture, and any other information you choose to provide.",
      howWeUseInformation: "How We Use Information",
      howWeUseInformationDesc:
        "We use the information we collect to provide, maintain, and improve our services, such as to administer your account, deliver the content you request, and improve your experience. We may also use the information to communicate with you about products, services, offers, and events, and provide news and information we think will be of interest to you.",
      informationSharing: "Information Sharing",
      informationSharingDesc:
        "We may share information about you as follows or as otherwise described in this Privacy Policy: with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf; in response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process; and with your consent or at your direction.",
      yourChoices: "Your Choices",
      yourChoicesDesc:
        "You may update, correct, or delete information about you at any time by logging into your online account and modifying your information or by emailing us. You may also opt out of receiving promotional emails from us by following the instructions in those emails. If you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing business relations.",
      contactUs: "Contact Us",
      contactUsDesc: "If you have any questions about this Privacy Policy, please contact us at: privacy@mindarena.com",
      downloadFullPolicy: "Download Full Policy",
    },
    ar: {
      // Notification
      notificationMessage: "تم تحديث إعدادات الخصوصية الخاصة بك منذ 30 يومًا. يرجى مراجعتها.",
  
      // Header
      privacySecurity: "الخصوصية والأمان",
      searchPlaceholder: "البحث في الإعدادات...",
      notifications: "الإشعارات",
      settings: "الإعدادات",
  
      // Tabs
      privacyTab: "الخصوصية",
      securityTab: "الأمان",
      dataTab: "إدارة البيانات",
      policyTab: "سياسة الخصوصية",
  
      // Privacy Tab
      profilePrivacy: "خصوصية الملف الشخصي",
      profileVisibility: "ظهور الملف الشخصي",
      profileVisibilityDesc: "التحكم في من يمكنه رؤية معلومات ملفك الشخصي.",
      activityStatus: "حالة النشاط",
      activityStatusDesc: "إظهار متى تكون نشطًا على المنصة.",
      showResults: "عرض النتائج",
      showResultsDesc: "السماح بظهور نتائج المسابقات الخاصة بك على لوحات المتصدرين العامة.",
      dataSharing: "مشاركة البيانات",
      dataCollection: "جمع البيانات",
      dataCollectionDesc: "السماح لنا بجمع بيانات الاستخدام المجهولة لتحسين خدماتنا.",
      thirdPartySharing: "المشاركة مع أطراف ثالثة",
      thirdPartySharingDesc: "السماح بمشاركة بياناتك مع أطراف ثالثة موثوقة.",
      personalizedAds: "الإعلانات المخصصة",
      personalizedAdsDesc: "السماح لنا بعرض إعلانات مخصصة لك بناءً على نشاطك.",
      public: "عام",
      friends: "الأصدقاء فقط",
      private: "خاص",
  
      // Security Tab
      accountSecurity: "أمان الحساب",
      currentPassword: "كلمة المرور الحالية",
      newPassword: "كلمة المرور الجديدة",
      confirmPassword: "تأكيد كلمة المرور الجديدة",
      passwordStrength: "قوة كلمة المرور:",
      passwordWeak: "ضعيفة",
      passwordMedium: "متوسطة",
      passwordStrong: "قوية",
      passwordVeryStrong: "قوية جدًا",
      updatePassword: "تحديث كلمة المرور",
      twoFactorAuth: "المصادقة الثنائية",
      enableTwoFactor: "تفعيل المصادقة الثنائية",
      enableTwoFactorDesc: "إضافة طبقة إضافية من الأمان لحسابك من خلال طلب رمز تحقق بالإضافة إلى كلمة المرور الخاصة بك.",
      twoFactorInstructions: "امسح رمز QR هذا باستخدام تطبيق المصادقة الخاص بك، ثم أدخل رمز التحقق أدناه.",
      verificationCode: "رمز التحقق",
      verify: "تحقق",
      loginHistory: "سجل تسجيل الدخول",
      currentDevice: "الجهاز الحالي",
      logoutDevice: "تسجيل الخروج",
      logoutAllDevices: "تسجيل الخروج من جميع الأجهزة",
  
      // Data Management Tab
      dataManagement: "إدارة البيانات",
      downloadData: "تنزيل بياناتك",
      downloadDataDesc:
        "الحصول على نسخة من جميع البيانات التي قمنا بتخزينها عنك، بما في ذلك معلومات ملفك الشخصي ونشاطك وتفضيلاتك.",
      requestDownload: "طلب التنزيل",
      deleteData: "حذف بياناتك",
      deleteDataDesc: "طلب حذف بيانات محددة قمنا بتخزينها عنك. لا يمكن التراجع عن هذا الإجراء.",
      requestDeletion: "طلب الحذف",
      deleteAccount: "حذف حسابك",
      deleteAccountDesc: "حذف حسابك وجميع البيانات المرتبطة به بشكل دائم. لا يمكن التراجع عن هذا الإجراء.",
  
      // Privacy Policy Tab
      privacyPolicy: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: 1 مايو 2023",
      informationWeCollect: "المعلومات التي نجمعها",
      informationWeCollectDesc:
        "نحن نجمع المعلومات التي تقدمها لنا مباشرة، مثل عندما تنشئ حسابًا، أو تحدث ملفك الشخصي، أو تستخدم الميزات التفاعلية، أو تشارك في المسابقات، أو تتواصل معنا بطريقة أخرى. قد تتضمن هذه المعلومات اسمك وعنوان بريدك الإلكتروني ورقم هاتفك وصورة ملفك الشخصي وأي معلومات أخرى تختار تقديمها.",
      howWeUseInformation: "كيف نستخدم المعلومات",
      howWeUseInformationDesc:
        "نستخدم المعلومات التي نجمعها لتوفير خدماتنا وصيانتها وتحسينها، مثل إدارة حسابك وتقديم المحتوى الذي تطلبه وتحسين تجربتك. قد نستخدم المعلومات أيضًا للتواصل معك بشأن المنتجات والخدمات والعروض والأحداث، وتقديم الأخبار والمعلومات التي نعتقد أنها ستكون ذات أهمية لك.",
      informationSharing: "مشاركة المعلومات",
      informationSharingDesc:
        "قد نشارك معلومات عنك على النحو التالي أو كما هو موضح في سياسة الخصوصية هذه: مع البائعين والاستشاريين ومقدمي الخدمات الآخرين الذين يحتاجون إلى الوصول إلى هذه المعلومات لتنفيذ العمل نيابة عنا؛ استجابة لطلب معلومات إذا كنا نعتقد أن الإفصاح يتوافق مع أي قانون أو لائحة أو عملية قانونية معمول بها؛ وبموافقتك أو بتوجيه منك.",
      yourChoices: "خياراتك",
      yourChoicesDesc:
        "يمكنك تحديث المعلومات المتعلقة بك أو تصحيحها أو حذفها في أي وقت عن طريق تسجيل الدخول إلى حسابك عبر الإنترنت وتعديل معلوماتك أو عن طريق مراسلتنا عبر البريد الإلكتروني. يمكنك أيضًا إلغاء الاشتراك في تلقي رسائل البريد الإلكتروني الترويجية منا باتباع التعليمات الواردة في تلك الرسائل الإلكترونية. إذا اخترت إلغاء الاشتراك، فقد نستمر في إرسال رسائل بريد إلكتروني غير ترويجية إليك، مثل تلك المتعلقة بحسابك أو علاقات أعمالنا المستمرة.",
      contactUs: "اتصل بنا",
      contactUsDesc: "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على: privacy@mindarena.com",
      downloadFullPolicy: "تنزيل السياسة الكاملة",
    },
  }
  
  // Export translations for use in other files
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { translations }
  }
  