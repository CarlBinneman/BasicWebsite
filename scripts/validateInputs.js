/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

////  FULLNAME AND PHONE NUMBER VALIDATION

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

function validOrInalidIdentifier() {
	const test = name.value.length === 0 || letters.test(name.value);

	const testPhone =
		phoneNumber.value.length === 0 || numbers.test(phoneNumber.value);
	// explicitly set the valid/invalid class on the name field
	name.className = test ? "valid" : "invalid";
	phoneNumber.className = testPhone ? "valid" : "invalid";
}

//// FULLNAME VALIDATIONS ON INPUT

function changeOnNameInput() {
	// defines the DOM changes when the user types
	// an incorrect character in the field
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
}

//// PHONE NUMBER VALIDATIONS ON INPUT
function changeOnPhoneNumberInput() {
	const testPhone =
		phoneNumber.value.length === 0 || numbers.test(phoneNumber.value);
	if (testPhone) {
		phoneNumber.className = "valid";
		phoneError.innerHTML = "";
		phoneError.className = "errorPopUp";
	} else {
		phoneNumber.className = "invalid";
		phoneError.innerHTML = "Entered value can only be a number.";
		phoneError.className = "errorPopUp active";
	}
}

////  EMAIL VALIDATION

function validateEmailInput() {
	// if the users input matches the emails regex api
	if (email.validity.valid) {
		emailError.innerHTML = "";
		emailError.className = "errorPopUp";
	}
	// if it doesnt match then the showerror function starts
	else {
		showError();
	}
}
function showError() {
	if (email.validity.valueMissing) {
		emailError.textContent = "You need to enter an e-mail address.";
	} else if (email.validity.typeMismatch) {
		emailError.textContent = "Entered value needs to be an e-mail address.";
	} else if (email.validity.tooShort) {
		emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
	}
	// css style for incorrect email format
	emailError.className = "errorPopUp active";
}

//// URL VALIDATION

function updateUrlErrorMsg() {
	url.className = "valid";
	urlError.innerHTML = "";
	urlError.className = "errorPopUp";
}
