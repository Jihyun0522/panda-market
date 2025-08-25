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
  const nicknameInput = document.getElementById("nickname");
  const pwdInput = document.getElementById("password");
  const pwdCheckInput = document.getElementById("check-password");
  const pwdToggleBtn = document.querySelectorAll(".show-pwd-btn")[0];
  const pwdCheckToggleBtn = document.querySelectorAll(".show-pwd-btn")[1];
  const signupBtn = form.querySelector(".auth-btn");

  // 비밀번호 토글
  setupPasswordToggle(pwdInput, pwdToggleBtn);
  setupPasswordToggle(pwdCheckInput, pwdCheckToggleBtn);

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

  // 닉네임 유효성 검사
  nicknameInput.addEventListener("blur", () => {
    if (!nicknameInput.value.trim()) {
      showError(nicknameInput, "REQUIRED_NICKNAME");
    } else {
      removeError(nicknameInput);
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

  // 비밀번호 확인 유효성 검사
  pwdCheckInput.addEventListener("blur", () => {
    if (pwdCheckInput.value.trim() !== pwdInput.value.trim()) {
      showError(pwdCheckInput.parentNode, "PASSWORD_MISMATCH");
    } else {
      removeError(pwdCheckInput.parentNode);
    }
    updateButtonState(form, ".auth-btn");
  });

  // 입력값 변경 시 버튼 상태 업데이트
  [emailInput, nicknameInput, pwdInput, pwdCheckInput].forEach((input) => {
    input.addEventListener("input", () => {
      removeError(input);
      updateButtonState(form, ".auth-btn");
    });
  });

  // 회원가입 버튼 클릭 시 이동
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!signupBtn.disabled) {
      window.location.href = "./login.html";
    }
  });
});
