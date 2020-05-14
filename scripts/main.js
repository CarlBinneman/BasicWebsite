const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("email");
const name = document.getElementById("fullName");
const phoneNumber = document.getElementById("phoneNumber");
const url = document.getElementById("url");
const coverLetter = document.getElementById("coverLetter");

// start of email validation

const emailError = document.querySelector(".error");


email.addEventListener("input", function () {
	// if the users input matches the emails regex api
	if (email.validity.valid) {
		emailError.innerHTML = "";
		emailError.className = "errorPopUp";
	} else {
		showError();
	}
});

function showError() {
	if (email.validity.valueMissing) {
		emailError.textContent = "You need to enter an e-mail address.";
	} else if (email.validity.typeMismatch) {
		emailError.textContent = "Entered value needs to be an e-mail address.";
	} else if (email.validity.tooShort) {
		emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
	}

	emailError.className = "errorPopUp active";
}

let nameError = name;
while ((nameError = nameError.nextSibling).nodeType != 1);

let phoneError = phoneNumber;
while ((phoneError = phoneError.nextSibling).nodeType != 1);

const letters = /^[a-zA-Z ]*$/;
const numbers = /^(?=.*\d)[\d ]+$/;
const urlRegex = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/ ;

const requiredError = document.querySelector(".requiredError");
const requiredEmail = document.querySelector(".requiredEmail");
const requiredPhone = document.querySelector(".requiredPhone");
const requiredUrl = document.querySelector(".requiredUrl");
const requiredLetter = document.querySelector(".requiredLetter");

const urlError = document.querySelector(".urlError");

function addEvent(element, event, callback) {
	let previousEventCallBack = element["on" + event];
	element["on" + event] = function (e) {
		let output = callback(e);

		// A callback that returns `false` stops the callback chain
		// and interrupts the execution of the event callback.
		if (output === false) return false;

		if (typeof previousEventCallBack === "function") {
			output = previousEventCallBack(e);
			if (output === false) return false;
		}
	};
}

// explicitly set the valid/invalid class on the name field
addEvent(window, "load", function () {
	const test = name.value.length === 0 || letters.test(name.value);

	const testPhone =
		phoneNumber.value.length === 0 || numbers.test(phoneNumber.value);

	name.className = test ? "valid" : "invalid";
	phoneNumber.className = testPhone ? "valid" : "invalid";
});

// This defines what happens when the user types in the field
addEvent(name, "input", function () {
	const test = name.value.length === 0 || letters.test(name.value);

	if (test) {
		name.className = "valid";
		nameError.innerHTML = "";
		nameError.className = "errorPopUp";
	} else {
		name.className = "invalid";
		nameError.innerHTML = "Entered value can only be alphabet and spaces.";
		nameError.className = "errorPopUp active";
	}
});

addEvent(phoneNumber, "input", function () {
	const testPhone =
		phoneNumber.value.length === 0 || numbers.test(phoneNumber.value);
	if (testPhone) {
		phoneNumber.className = "valid";
		phoneError.innerHTML = "";
		phoneError.className = "errorPopUp";
	} else {
		phoneNumber.className = "invalid";
		phoneError.innerHTML = "Entered value can only be a 10 digit number.";
		phoneError.className = "errorPopUp active";
	}
});

// This defines what happens when the user tries to submit the data
addEvent(form, "submit", function () {

	


	if (!email.validity.valid) {
		showError();

		event.preventDefault();
	} else if (email.value.length === 0) {
		event.preventDefault();

		requiredEmail.innerHTML = " * Required";
		requiredEmail.className = "requiredError";
	}

	const test = letters.test(name.value);

	if (!test) {
		event.preventDefault();
		name.className = "invalid";
		nameError.innerHTML = "Entered value can only be alphabet and spaces.";
		nameError.className = "errorPopUp active";

		return false;
	} else if (name.value.length === 0) {
		event.preventDefault();

		requiredError.innerHTML = " * Required";
		requiredError.className = "requiredError";
	} else {
		name.className = "valid";
		nameError.innerHTML = "";
		nameError.className = "errorPopUp";
	}

	const testPhone = numbers.test(phoneNumber.value);

	if (phoneNumber.value.length === 0) {
		event.preventDefault();
		requiredPhone.innerHTML = " * Required";
		requiredPhone.className = "requiredError ";
	} else if (!testPhone) {
		event.preventDefault();
		phoneNumber.className = "invalid";
		phoneError.innerHTML = "Entered value can only be alphabet and spaces.";
		phoneError.className = "errorPopUp active";

		return false;
	} else {
		phoneNumber.className = "valid";
		phoneError.innerHTML = "";
		phoneError.className = "errorPopUp";
	}

	if (url.value.length === 0) {
		event.preventDefault();
		requiredUrl.innerHTML = " * Required";
		requiredUrl.className = "requiredError ";
	} else if (!urlRegex.test(url.value)) {
		event.preventDefault();
		url.className = "invalid";
		urlError.innerHTML = "Please enter a valid URL.";
		urlError.className = "errorPopUp active";
		
		return false; 
	} 
	if (coverLetter.value.length === 0) {
		event.preventDefault();
		requiredLetter.innerHTML = " * Required";
		requiredLetter.className = "requiredError ";
	}


	if (
		test === letters.test(name.value) &&
		name.value.length != 0 &&
		email.validity.valid &&
		email.value.length != 0 &&
		testPhone === numbers.test(phoneNumber.value) &&
		phoneNumber.value.length != 0 &&
		urlRegex.test(url.value) &&
		url.value.length != 0 &&
		coverLetter.value.length != 0

	) {
		var jobTitle;
  
		var selectInput = document.getElementById("jobTitle");
		var chosenJobTitle =selectInput.options[selectInput.selectedIndex].text;
		jobTitle = chosenJobTitle;
		console.log(jobTitle);
		event.preventDefault();

		console.log("correct");
		let applicantDataArray = [];

		//to stop the form submitting
		let applicantData = {
			name: document.getElementById("fullName").value,
			email: document.getElementById("email").value,
			phone: document.getElementById("phoneNumber").value,
			jobTitle: jobTitle,
			url: document.getElementById("url").value,
			coverLetter: document.getElementById("coverLetter").value,
			
		};
		applicantDataArray.push(applicantData);
		document.forms[0].reset(); // to clear the form for the next entries

		//for display purposes
		console.log("added", { applicantDataArray });
	}
});

url.addEventListener("input", updateErrorMsg);
function updateErrorMsg() {
	url.className = "valid";
	urlError.innerHTML = "";
	urlError.className = "errorPopUp";
}



