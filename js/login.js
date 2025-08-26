import { setupAuthForm } from "./auth.js";

const emailInput = document.getElementById("email");
const pwdInput = document.getElementById("password");
const pwdToggleBtn = document.querySelector(".show-pwd-btn");

setupAuthForm({
  inputs: { emailInput, pwdInput },
  toggleBtns: [pwdToggleBtn],
});
