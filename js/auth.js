// 에러 메시지
const ERROR_MSG = {
  REQUIRED_EMAIL: "이메일을 입력해주세요.",
  INVALID_EMAIL: "잘못된 이메일 형식입니다.",
  REQUIRED_NICKNAME: "닉네임을 입력해주세요.",
  REQUIRED_PASSWORD: "비밀번호를 입력해주세요.",
  SHORT_PASSWORD: "비밀번호를 8자 이상 입력해주세요.",
  PASSWORD_MISMATCH: "비밀번호가 일치하지 않습니다..",
};

// 이메일 형식 검사
function isValidEmail(email) {
  // 이메일 유효성 검사 정규표현식
  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email_regex.test(email);
}

// 에러 메시지 표시
function showError(input, messageKey) {
  // 기존 에러 메시지 제거
  removeError(input);
  input.classList.add("error");
  const errorSpan = document.createElement("span");
  errorSpan.className = "error-msg";
  errorSpan.textContent = ERROR_MSG[messageKey];
  input.parentNode.appendChild(errorSpan);
}

// 에러 메시지 제거
function removeError(input) {
  input.classList.remove("error");
  const parent = input.parentNode;
  const errorMsg = parent.querySelector(".error-msg");
  if (errorMsg) parent.removeChild(errorMsg);
}

// 비밀번호 보기/숨기기 토글
function setupPasswordToggle(pwdInput, toggleBtn) {
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
function updateButtonState(form, btnSelector) {
  const inputs = form.querySelectorAll("input");
  // 에러 메시지 존재 여부 확인
  const hasError = !!form.querySelector(".error-msg");
  // 빈 입력 필드 존재 여부 확인
  const hasEmpty = Array.from(inputs).some((input) => !input.value.trim());
  const btn = form.querySelector(btnSelector);
  // 에러가 있거나 빈 입력이 있으면 버튼 비활성화
  btn.disabled = hasError || hasEmpty;
}

// 이메일 유효성 검사 핸들러
function validateEmailInput(form, btnSelector) {
  return function (event) {
    const emailInput = event.target;
    if (!emailInput.value.trim()) {
      showError(emailInput, "REQUIRED_EMAIL");
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, "INVALID_EMAIL");
    } else {
      removeError(emailInput);
    }
    updateButtonState(form, btnSelector);
  };
}

// 닉네임 유효성 검사 핸들러
function validateNicknameInput(form, btnSelector) {
  return function (event) {
    const nicknameInput = event.target;
    if (!nicknameInput.value.trim()) {
      showError(nicknameInput, "REQUIRED_NICKNAME");
    } else {
      removeError(nicknameInput);
    }
    updateButtonState(form, btnSelector);
  };
}

// 비밀번호 유효성 검사 핸들러
function validatePasswordInput(form, btnSelector) {
  return function (event) {
    const pwdInput = event.target;
    if (!pwdInput.value.trim()) {
      showError(pwdInput.parentNode, "REQUIRED_PASSWORD");
    } else if (pwdInput.value.trim().length < 8) {
      showError(pwdInput.parentNode, "SHORT_PASSWORD");
    } else {
      removeError(pwdInput.parentNode);
    }
    updateButtonState(form, btnSelector);
  };
}

// 비밀번호 확인 유효성 검사 핸들러
function validatePasswordConfirmInput(pwdInput, form, btnSelector) {
  return function (event) {
    const pwdCheckInput = event.target;
    if (pwdCheckInput.value.trim() !== pwdInput.value.trim()) {
      showError(pwdCheckInput.parentNode, "PASSWORD_MISMATCH");
    } else {
      removeError(pwdCheckInput.parentNode);
    }
    updateButtonState(form, btnSelector);
  };
}

// focus out 시 각 입력 필드별 유효성 검사 처리
function formBlurHandler(event, form, pwdInput) {
  const target = event.target;
  const btnSelector = ".auth-btn";

  // 입력 필드별 유효성 검사 호출
  if (target.id === "email") {
    validateEmailInput(form, btnSelector)(event);
  } else if (target.id === "nickname") {
    validateNicknameInput(form, btnSelector)(event);
  } else if (target.id === "password") {
    validatePasswordInput(form, btnSelector)(event);
  } else if (target.id === "check-password") {
    validatePasswordConfirmInput(pwdInput, form, btnSelector)(event);
  }

  // 검증 완료 후 버튼 상태 업데이트
  updateButtonState(form, btnSelector);
}

// 입력값 변경 시 에러 제거 및 버튼 상태 업데이트 핸들러
function checkChangeInput(event, form) {
  const target = event.target;

  // input 태그에서 발생한 이벤트만 처리
  if (target.tagName === "INPUT") {
    removeError(target);
    updateButtonState(form, ".auth-btn");
  }
}

// 폼 제출 핸들러
function formSubmitHandler(redirectUrl) {
  return function (e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector(".auth-btn");
    if (!submitBtn.disabled) {
      window.location.href = redirectUrl;
    }
  };
}

// auth form 설정 통합 함수
function setupAuthForm(options) {
  const form = document.querySelector(".auth-form-box");
  const { inputs, toggleBtns } = options;

  // 객체 구조 분해 할당
  const { emailInput, pwdInput, nicknameInput, pwdCheckInput } = inputs;
  // 배열 구조 분해 할당
  const [pwdToggleBtn, pwdCheckToggleBtn] = toggleBtns;

  const redirectUrl = pwdCheckToggleBtn ? "/login" : "/items";

  // 비밀번호 토글 버튼 설정
  setupPasswordToggle(pwdInput, pwdToggleBtn);
  // 비밀번호 확인의 버튼이 있을 경우에만, 비밀번호 확인 토글 버튼 설정
  if (pwdCheckToggleBtn) {
    setupPasswordToggle(pwdCheckInput, pwdCheckToggleBtn);
  }

  // 폼 전체에 이벤트 위임으로 이벤트 리스너 등록
  form.addEventListener(
    "blur",
    (e) => formBlurHandler(e, form, pwdInput),
    true
  );
  form.addEventListener("input", (e) => checkChangeInput(e, form));
  form.addEventListener("submit", formSubmitHandler(redirectUrl));
}

export { setupAuthForm };