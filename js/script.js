/**
 * Event listener for the login tab button.
 * Switches the form view to show the login form and updates tab styling.
 */
document.getElementById('login-tab').addEventListener('click', function () {
  document.getElementById('login-form').classList.remove('hidden');
  document.getElementById('register-form').classList.add('hidden');
  document
    .getElementById('login-tab')
    .classList.add('text-indigo-600', 'border-b-2', 'border-indigo-600');
  document.getElementById('login-tab').classList.remove('text-gray-500');
  document.getElementById('register-tab').classList.add('text-gray-500');
  document
    .getElementById('register-tab')
    .classList.remove('text-indigo-600', 'border-b-2', 'border-indigo-600');
});

/**
 * Event listener for the register tab button.
 * Switches the form view to show the register form and updates tab styling.
 */
document.getElementById('register-tab').addEventListener('click', function () {
  document.getElementById('register-form').classList.remove('hidden');
  document.getElementById('login-form').classList.add('hidden');
  document
    .getElementById('register-tab')
    .classList.add('text-indigo-600', 'border-b-2', 'border-indigo-600');
  document.getElementById('register-tab').classList.remove('text-gray-500');
  document.getElementById('login-tab').classList.add('text-gray-500');
  document
    .getElementById('login-tab')
    .classList.remove('text-indigo-600', 'border-b-2', 'border-indigo-600');
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

// Form elements for login validation
const loginEmail = document.getElementById('login-email');
const loginEmailError = document.getElementById('login-email-error');
const loginPassword = document.getElementById('login-password');
const loginPasswordError = document.getElementById('login-password-error');

/**
 * Event listener for login email input.
 * Validates email format in real-time and shows/hides error messages.
 */
loginEmail.addEventListener('input', function () {
  if (this.value && !validateEmail(this.value)) {
    loginEmailError.classList.remove('hidden');
    this.classList.add('border-red-500');
  } else {
    loginEmailError.classList.add('hidden');
    this.classList.remove('border-red-500');
  }
});

/**
 * Event listener for login password input.
 * Validates password length in real-time and shows/hides error messages.
 */
loginPassword.addEventListener('input', function () {
  if (this.value && !validatePassword(this.value)) {
    loginPasswordError.classList.remove('hidden');
    this.classList.add('border-red-500');
  } else {
    loginPasswordError.classList.add('hidden');
    this.classList.remove('border-red-500');
  }
});

// Form elements for register validation
const registerEmail = document.getElementById('register-email');
const registerEmailError = document.getElementById('register-email-error');
const registerPassword = document.getElementById('register-password');
const registerPasswordError = document.getElementById(
  'register-password-error'
);
const registerConfirmPassword = document.getElementById(
  'register-confirm-password'
);
const registerConfirmPasswordError = document.getElementById(
  'register-confirm-password-error'
);

/**
 * Event listener for register email input.
 * Validates email format in real-time and shows/hides error messages.
 */
registerEmail.addEventListener('input', function () {
  if (this.value && !validateEmail(this.value)) {
    registerEmailError.classList.remove('hidden');
    this.classList.add('border-red-500');
  } else {
    registerEmailError.classList.add('hidden');
    this.classList.remove('border-red-500');
  }
});

/**
 * Event listener for register password input.
 * Validates password length and matches with confirm password in real-time.
 * Shows/hides error messages accordingly.
 */
registerPassword.addEventListener('input', function () {
  if (this.value && !validatePassword(this.value)) {
    registerPasswordError.classList.remove('hidden');
    this.classList.add('border-red-500');
  } else {
    registerPasswordError.classList.add('hidden');
    this.classList.remove('border-red-500');
  }

  // Check confirm password match when password changes
  if (
    registerConfirmPassword.value &&
    this.value !== registerConfirmPassword.value
  ) {
    registerConfirmPasswordError.classList.remove('hidden');
    registerConfirmPassword.classList.add('border-red-500');
  } else if (registerConfirmPassword.value) {
    registerConfirmPasswordError.classList.add('hidden');
    registerConfirmPassword.classList.remove('border-red-500');
  }
});

/**
 * Event listener for register confirm password input.
 * Validates that confirm password matches the password in real-time.
 * Shows/hides error messages accordingly.
 */
registerConfirmPassword.addEventListener('input', function () {
  if (this.value && this.value !== registerPassword.value) {
    registerConfirmPasswordError.classList.remove('hidden');
    this.classList.add('border-red-500');
  } else {
    registerConfirmPasswordError.classList.add('hidden');
    this.classList.remove('border-red-500');
  }
});
