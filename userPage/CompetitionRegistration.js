// DOM Elements
const registrationForm = document.getElementById("registrationForm");
const cancelButton = document.getElementById("cancelButton");
const iqScoreInput = document.getElementById("iqScore");

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initFormValidation();
  initFormSubmission();
  initCancelButton();
});

// Initialize form validation
function initFormValidation() {
  // Validate IQ score
  iqScoreInput.addEventListener("input", validateIQScore);
}

// Validate IQ score
function validateIQScore() {
  const iqScore = parseInt(iqScoreInput.value);
  const minRequired = 110;
  
  if (iqScore < minRequired) {
    iqScoreInput.setCustomValidity(`IQ score must be at least ${minRequired} to qualify`);
  } else {
    iqScoreInput.setCustomValidity("");
  }
}

// Initialize form submission
function initFormSubmission() {
  registrationForm.addEventListener("submit", handleFormSubmit);
}

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  
  // Validate form
  if (!registrationForm.checkValidity()) {
    // If form is invalid, trigger browser's built-in validation UI
    registrationForm.reportValidity();
    return;
  }
  
  // Get form data
  const formData = new FormData(registrationForm);
  const formDataObj = {};
  
  // Convert FormData to object
  for (const [key, value] of formData.entries()) {
    formDataObj[key] = value;
  }
  
  // In a real application, you would send this data to a server
  console.log("Registration data:", formDataObj);
  
  // Show success message
  showSuccessMessage();
}

// Show success message
function showSuccessMessage() {
  // Remove any existing messages
  removeMessages();
  
  // Create success message
  const successMessage = document.createElement("div");
  successMessage.className = "success-message show";
  successMessage.setAttribute("data-key", "registrationSuccess");
  successMessage.textContent = "Registration successful! You will receive a confirmation email shortly.";
  
  // Insert message before the form
  const formContainer = document.querySelector(".registration-form-container");
  formContainer.insertBefore(successMessage, formContainer.firstChild);
  
  // Reset form
  registrationForm.reset();
  
  // Scroll to top of form
  formContainer.scrollIntoView({ behavior: "smooth" });
  
  // After 5 seconds, redirect to the competition page
  setTimeout(() => {
    window.location.href = "copyLogicPuzzleChallenge.html";
  }, 5000);
}

// Show error message
function showErrorMessage(message) {
  // Remove any existing messages
  removeMessages();
  
  // Create error message
  const errorMessage = document.createElement("div");
  errorMessage.className = "error-message show";
  errorMessage.textContent = message || "An error occurred. Please try again.";
  
  // Insert message before the form
  const formContainer = document.querySelector(".registration-form-container");
  formContainer.insertBefore(errorMessage, formContainer.firstChild);
  
  // Scroll to top of form
  formContainer.scrollIntoView({ behavior: "smooth" });
}

// Remove all messages
function removeMessages() {
  const messages = document.querySelectorAll(".success-message, .error-message");
  messages.forEach(message => message.remove());
}

// Initialize cancel button
function initCancelButton() {
  cancelButton.addEventListener("click", () => {
    // Confirm before canceling
    if (confirm("Are you sure you want to cancel? All entered data will be lost.")) {
      window.location.href = "copyLogicPuzzleChallenge.html";
    }
  });
}

// Update the language translations for the registration form
// This extends the existing translations object from the main JS file
if (typeof translations !== "undefined") {
  // Add English translations
  translations.en.registrationTitle = "Competition Registration";
  translations.en.logicPuzzleRegistration = "Logic Puzzle Registration";
  translations.en.personalInfo = "Personal Information";
  translations.en.fullName = "Full Name";
  translations.en.email = "Email Address";
  translations.en.phone = "Phone Number";
  translations.en.birthdate = "Date of Birth";
  translations.en.gender = "Gender";
  translations.en.male = "Male";
  translations.en.female = "Female";
  translations.en.other = "Other";
  translations.en.preferNotToSay = "Prefer not to say";
  translations.en.competitionDetails = "Competition Details";
  translations.en.iqScore = "IQ Test Score";
  translations.en.iqScoreNote = "Must be 110 or higher to qualify";
  translations.en.experience = "Previous Experience with Logic Puzzles";
  translations.en.beginner = "Beginner";
  translations.en.intermediate = "Intermediate";
  translations.en.advanced = "Advanced";
  translations.en.expert = "Expert";
  translations.en.specialNeeds = "Special Accommodations (if any)";
  translations.en.termsAndConditions = "Terms and Conditions";
  translations.en.termsAgreeText = "I agree to the competition rules and terms of participation";
  translations.en.dataConsentText = "I consent to the processing of my personal data for the purpose of this competition";
  translations.en.cancel = "Cancel";
  translations.en.submitRegistration = "Submit Registration";
  translations.en.registrationSuccess = "Registration successful! You will receive a confirmation email shortly.";
  
  // Add Arabic translations
  translations.ar.registrationTitle = "تسجيل المسابقة";
  translations.ar.logicPuzzleRegistration = "تسجيل مسابقة الألغاز المنطقية";
  translations.ar.personalInfo = "المعلومات الشخصية";
  translations.ar.fullName = "الاسم الكامل";
  translations.ar.email = "البريد الإلكتروني";
  translations.ar.phone = "رقم الهاتف";
  translations.ar.birthdate = "تاريخ الميلاد";
  translations.ar.gender = "الجنس";
  translations.ar.male = "ذكر";
  translations.ar.female = "أنثى";
  translations.ar.other = "آخر";
  translations.ar.preferNotToSay = "أفضل عدم الذكر";
  translations.ar.competitionDetails = "تفاصيل المسابقة";
  translations.ar.iqScore = "نتيجة اختبار الذكاء";
  translations.ar.iqScoreNote = "يجب أن تكون 110 أو أعلى للتأهل";
  translations.ar.experience = "الخبرة السابقة في الألغاز المنطقية";
  translations.ar.beginner = "مبتدئ";
  translations.ar.intermediate = "متوسط";
  translations.ar.advanced = "متقدم";
  translations.ar.expert = "خبير";
  translations.ar.specialNeeds = "احتياجات خاصة (إن وجدت)";
  translations.ar.termsAndConditions = "الشروط والأحكام";
  translations.ar.termsAgreeText = "أوافق على قواعد المسابقة وشروط المشاركة";
  translations.ar.dataConsentText = "أوافق على معالجة بياناتي الشخصية لغرض هذه المسابقة";
  translations.ar.cancel = "إلغاء";
  translations.ar.submitRegistration = "تقديم التسجيل";
  translations.ar.registrationSuccess = "تم التسجيل بنجاح! ستتلقى رسالة تأكيد عبر البريد الإلكتروني قريبًا.";
}