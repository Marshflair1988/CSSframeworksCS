document.addEventListener('DOMContentLoaded', function () {
  /**
   * Event listener for the login tab button.
   * Switches the form view to show the login form and updates tab styling.
   */
  const loginTab = document.getElementById('login-tab');
  const registerTab = document.getElementById('register-tab');

  function setActiveTab(isLoginActive) {
    if (isLoginActive) {
      loginTab.classList.add('tab-button--active');
      loginTab.setAttribute('aria-selected', 'true');
      registerTab.classList.remove('tab-button--active');
      registerTab.setAttribute('aria-selected', 'false');
    } else {
      registerTab.classList.add('tab-button--active');
      registerTab.setAttribute('aria-selected', 'true');
      loginTab.classList.remove('tab-button--active');
      loginTab.setAttribute('aria-selected', 'false');
    }
  }

  loginTab.addEventListener('click', function () {
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('register-form').classList.add('hidden');
    setActiveTab(true);
  });

  /**
   * Event listener for the register tab button.
   * Switches the form view to show the register form and updates tab styling.
   */
  registerTab.addEventListener('click', function () {
    document.getElementById('register-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
    setActiveTab(false);
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
  const loginSubmit = document.getElementById('login-submit');

  function setFieldState(input, isValid, errorElement) {
    if (isValid) {
      errorElement && errorElement.classList.add('hidden');
      input.classList.remove('border-red-500');
      input.classList.add('field-valid');
    } else {
      input.classList.remove('field-valid');
    }
  }

  function updateLoginSubmitState() {
    const emailValid =
      loginEmail.value.length > 0 && validateEmail(loginEmail.value);
    const passwordValid =
      loginPassword.value.length > 0 && validatePassword(loginPassword.value);
    const isValid = emailValid && passwordValid;
    loginSubmit.disabled = !isValid;
    loginSubmit.classList.toggle('btn-disabled', !isValid);
  }

  /**
   * Event listener for login email input.
   * Validates email format in real-time and shows/hides error messages.
   */
  loginEmail.addEventListener('input', function () {
    if (this.value && !validateEmail(this.value)) {
      loginEmailError.classList.remove('hidden');
      this.classList.add('border-red-500');
      this.classList.remove('field-valid');
    } else {
      loginEmailError.classList.add('hidden');
      setFieldState(this, !!this.value && validateEmail(this.value));
    }
    updateLoginSubmitState();
  });

  /**
   * Event listener for login password input.
   * Validates password length in real-time and shows/hides error messages.
   */
  loginPassword.addEventListener('input', function () {
    if (this.value && !validatePassword(this.value)) {
      loginPasswordError.classList.remove('hidden');
      this.classList.add('border-red-500');
      this.classList.remove('field-valid');
    } else {
      loginPasswordError.classList.add('hidden');
      setFieldState(this, !!this.value && validatePassword(this.value));
    }
    updateLoginSubmitState();
  });

  // Form elements for register validation
  const registerUsername = document.getElementById('register-username');
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
  const registerSubmit = document.getElementById('register-submit');

  function updateRegisterSubmitState() {
    const usernameValid = registerUsername.value.trim().length > 0;
    const emailValid =
      registerEmail.value.length > 0 && validateEmail(registerEmail.value);
    const passwordValid =
      registerPassword.value.length > 0 &&
      validatePassword(registerPassword.value);
    const confirmValid =
      registerConfirmPassword.value.length > 0 &&
      registerConfirmPassword.value === registerPassword.value;

    const isValid =
      usernameValid && emailValid && passwordValid && confirmValid;

    registerSubmit.disabled = !isValid;
    registerSubmit.classList.toggle('btn-disabled', !isValid);
  }

  registerUsername.addEventListener('input', function () {
    setFieldState(this, this.value.trim().length > 0);
    updateRegisterSubmitState();
  });

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
      setFieldState(this, !!this.value && validateEmail(this.value));
    }
    updateRegisterSubmitState();
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
      setFieldState(this, !!this.value && validatePassword(this.value));
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
      setFieldState(
        registerConfirmPassword,
        !!registerConfirmPassword.value &&
          registerConfirmPassword.value === this.value
      );
    }
    updateRegisterSubmitState();
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
      setFieldState(
        this,
        !!this.value && this.value === registerPassword.value
      );
    }
    updateRegisterSubmitState();
  });

  /**
   * Toggle helpers for password visibility.
   */
  function setupPasswordToggle(inputId, toggleButtonId) {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleButtonId);
    if (!input || !toggle) return;

    toggle.addEventListener('click', function () {
      const isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';
      toggle.textContent = isHidden ? 'Hide' : 'Show';
      toggle.setAttribute(
        'aria-label',
        isHidden ? 'Hide password' : 'Show password'
      );
    });
  }

  setupPasswordToggle('login-password', 'login-password-toggle');
  setupPasswordToggle('register-password', 'register-password-toggle');
  setupPasswordToggle(
    'register-confirm-password',
    'register-confirm-password-toggle'
  );

  // Initial state for buttons and tabs
  setActiveTab(true);
  updateLoginSubmitState();
  updateRegisterSubmitState();
});
