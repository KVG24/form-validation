import "./style.css";

const form = document.querySelector(".form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const passConfirmation = document.getElementById("pass-confirmation");
const error = document.querySelector(".error");

// Email

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

email.addEventListener("input", () => {
    const isValid = emailRegExp.test(email.value);
    if (isValid) {
        email.className = "valid";
        error.textContent = "";
    } else {
        email.className = "invalid";
    }
});

// Country and ZIP Code

let selectedCountry = "Ukraine";
const zipRegExp = {
    "United States": /^\d{5}(?:-\d{4})?$/,
    Australia: /^\d{4}$/,
    Canada: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
    Japan: /^\d{3}-\d{4}$/,
    Ukraine: /^\d{5}$/,
    "United Kingdom": /^(?:[A-Z]{1,2}\d[A-Z\d]?|\d[A-Z]{2}) \d[A-Z]{2}$/,
};

country.addEventListener("change", () => {
    selectedCountry = country.value;
    validateZip();
});

zip.addEventListener("input", () => {
    validateZip();
});

function validateZip() {
    const isValid = zipRegExp[selectedCountry].test(zip.value);
    if (!isValid) {
        zip.className = "invalid";
        error.textContent = "Invalid zip";
    } else {
        zip.className = "valid";
        error.textContent = "";
    }
}

// Password

const passRegExp =
    /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*\d))(?=(.*[\W_]))[A-Za-z\d\W_]{5,}$/;

password.addEventListener("input", () => {
    const isValid = passRegExp.test(password.value);
    if (!isValid) {
        password.className = "invalid";
        error.textContent = "Invalid password";
    } else {
        password.className = "valid";
        error.textContent = "";
    }
});

passConfirmation.addEventListener("input", () => {
    const isValid = password.value === passConfirmation.value;
    if (!isValid) {
        passConfirmation.className = "invalid";
        error.textContent = "Passwords don't match";
    } else {
        passConfirmation.className = "valid";
        error.textContent = "";
    }
});

// Submit

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isValid =
        email.classList.contains("valid") &&
        zip.classList.contains("valid") &&
        password.classList.contains("valid") &&
        passConfirmation.classList.contains("valid");
    if (isValid) {
        error.textContent = "Everything is fine 👌, form submitted";
        error.style.color = "green";
    } else {
        error.textContent = "Please fill in all fields";
        error.style.color = "red";
    }
});