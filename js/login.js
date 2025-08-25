import {
  isValidEmail,
  showError,
  removeError,
  setupPasswordToggle,
  updateButtonState,
} from "./auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".auth-form-box");
  const emailInput = document.getElementById("email");
  const pwdInput = document.getElementById("password");
  const pwdToggleBtn = document.querySelector(".show-pwd-btn");
  const loginBtn = form.querySelector(".auth-btn");

  // 비밀번호 토글
  setupPasswordToggle(pwdInput, pwdToggleBtn);

  // 이메일 유효성 검사
  emailInput.addEventListener("blur", () => {
    if (!emailInput.value.trim()) {
      showError(emailInput, "REQUIRED_EMAIL");
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, "INVALID_EMAIL");
    } else {
      removeError(emailInput);
    }
    updateButtonState(form, ".auth-btn");
  });

  // 비밀번호 유효성 검사
  pwdInput.addEventListener("blur", () => {
    if (!pwdInput.value.trim()) {
      showError(pwdInput.parentNode, "REQUIRED_PASSWORD");
    } else if (pwdInput.value.trim().length < 8) {
      showError(pwdInput.parentNode, "SHORT_PASSWORD");
    } else {
      removeError(pwdInput.parentNode);
    }
    updateButtonState(form, ".auth-btn");
  });

  // 입력값 변경 시 버튼 상태 업데이트
  [emailInput, pwdInput].forEach((input) => {
    input.addEventListener("input", () => {
      removeError(input);
      updateButtonState(form, ".auth-btn");
    });
  });

  // 로그인 버튼 클릭 시 이동
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!loginBtn.disabled) {
      window.location.href = "/items";
    }
  });
});
