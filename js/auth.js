// 에러 메시지
export const ERROR_MSG = {
  REQUIRED_EMAIL: "이메일을 입력해주세요.",
  INVALID_EMAIL: "잘못된 이메일 형식입니다.",
  REQUIRED_NICKNAME: "닉네임을 입력해주세요.",
  REQUIRED_PASSWORD: "비밀번호를 입력해주세요.",
  SHORT_PASSWORD: "비밀번호를 8자 이상 입력해주세요.",
  PASSWORD_MISMATCH: "비밀번호가 일치하지 않습니다..",
};

// 이메일 형식 검사
export function isValidEmail(email) {
  // 이메일 유효성 검사 정규표현식
  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email_regex.test(email);
}

// 에러 메시지 표시
export function showError(input, messageKey) {
  removeError(input);
  input.classList.add("error");
  const errorSpan = document.createElement("span");
  errorSpan.className = "error-msg";
  errorSpan.textContent = ERROR_MSG[messageKey];
  input.parentNode.appendChild(errorSpan);
}

// 에러 메시지 제거
export function removeError(input) {
  input.classList.remove("error");
  const parent = input.parentNode;
  const errorMsg = parent.querySelector(".error-msg");
  if (errorMsg) parent.removeChild(errorMsg);
}

// 비밀번호 보기/숨기기 토글
export function setupPasswordToggle(pwdInput, toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isHidden = pwdInput.type === "password";
    pwdInput.type = isHidden ? "text" : "password";
    toggleBtn.querySelector("img").src = isHidden
      ? "./images/btn/btn_visibility_on.svg"
      : "./images/btn/btn_visibility_off.svg";
    toggleBtn.querySelector("img").alt = isHidden
      ? "비밀번호 숨기기"
      : "비밀번호 보기";
  });
}

// 버튼 활성/비활성 업데이트
export function updateButtonState(form, btnSelector) {
  const inputs = form.querySelectorAll("input");
  const hasError = !!form.querySelector(".error-msg");
  const hasEmpty = Array.from(inputs).some((input) => !input.value.trim());
  const btn = form.querySelector(btnSelector);
  btn.disabled = hasError || hasEmpty;
}