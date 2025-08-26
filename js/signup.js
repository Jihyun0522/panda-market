import { setupAuthForm } from "./auth.js";

const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const pwdInput = document.getElementById("password");
const pwdCheckInput = document.getElementById("check-password");
const pwdToggleBtn = document.querySelectorAll(".show-pwd-btn")[0];
const pwdCheckToggleBtn = document.querySelectorAll(".show-pwd-btn")[1];

setupAuthForm({
  inputs: {
    emailInput,
    pwdInput,
    nicknameInput,
    pwdCheckInput,
  },
  toggleBtns: [pwdToggleBtn, pwdCheckToggleBtn],
});
