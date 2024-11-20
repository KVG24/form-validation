import "./style.css";

const form = document.querySelector(".form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const passConfirmation = document.getElementById("pass-confirmation");
const submit = document.querySelector(".submit");
const error = document.querySelector(".error");

const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

window.addEventListener("load", () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    email.className = isValid ? "valid" : "invalid";
});

email.addEventListener("input", () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    if (isValid) {
      email.className = "valid";
      error.textContent = "";
    } else {
      email.className = "invalid";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    if (!isValid) {
      email.className = "invalid";
      error.textContent = "Invalid email";
      error.className = "error active";
    } else {
      email.className = "valid";
      error.textContent = "";
      error.className = "error";
    }
  });