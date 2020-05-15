/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("email");
const name = document.getElementById("fullName");
const phoneNumber = document.getElementById("phoneNumber");
const url = document.getElementById("url");
const coverLetter = document.getElementById("coverLetter");

const requiredError = document.querySelector(".requiredError");
const requiredEmail = document.querySelector(".requiredEmail");
const requiredPhone = document.querySelector(".requiredPhone");
const requiredUrl = document.querySelector(".requiredUrl");
const requiredLetter = document.querySelector(".requiredLetter");

const emailError = document.querySelector(".error");
const urlError = document.querySelector(".urlError");
let nameError = name;
while ((nameError = nameError.nextSibling).nodeType != 1);
let phoneError = phoneNumber;
while ((phoneError = phoneError.nextSibling).nodeType != 1);

const letters = /^[a-zA-Z ]*$/; // regex for alphabet and spaces
const numbers = /^(?=.*\d)[\d ]+$/; // regex for numbers only
const urlRegex = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/; // regex for url

window.addEvent("load", validOrInalidIdentifier);

name.addEventListener("input", changeOnNameInput);

email.addEventListener("input", validateEmailInput);

phoneNumber.addEventListener("input", changeOnPhoneNumberInput);

url.addEventListener("input", updateUrlErrorMsg);

form.addEventListener("submit", processSubmittedData);
