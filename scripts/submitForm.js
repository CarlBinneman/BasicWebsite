/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function processSubmittedData() {
	//email validation on submit
	if (!email.validity.valid) {
		showError();

		event.preventDefault();
	} else if (email.value.length === 0) {
		event.preventDefault();

		requiredEmail.innerHTML = " * Required";
		requiredEmail.className = "requiredError";
	}

	const test = letters.test(name.value);

	// fullname validation on submit
	if (!test) {
		event.preventDefault();
		name.className = "invalid";
		nameError.innerHTML = "Entered value can only be alphabet and spaces.";
		nameError.className = "errorPopUp active";

		return false;
	} else if (name.value.length === 0) {
		// if input has no values
		event.preventDefault();

		requiredError.innerHTML = " * Required";
		requiredError.className = "requiredError";
	} else {
		name.className = "valid";
		nameError.innerHTML = "";
		nameError.className = "errorPopUp";
	}

	// phone number validation on submit
	const testPhone = numbers.test(phoneNumber.value);

	if (phoneNumber.value.length === 0) {
		// if input has no values
		event.preventDefault();
		requiredPhone.innerHTML = " * Required";
		requiredPhone.className = "requiredError ";
	} else if (!testPhone) {
		event.preventDefault();
		phoneNumber.className = "invalid";
		phoneError.innerHTML = "Entered value can only be a number.";
		phoneError.className = "errorPopUp active";

		return false;
	} else {
		phoneNumber.className = "valid";
		phoneError.innerHTML = "";
		phoneError.className = "errorPopUp";
	}

	// url validation on submit
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

	// coverletter validation on submit
	if (coverLetter.value.length === 0) {
		event.preventDefault();
		requiredLetter.innerHTML = " * Required";
		requiredLetter.className = "requiredError ";
	}

	// determines if all data inputed is correct and can be stored into the erray
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
		// storing of the selected job title in a variable
		let jobTitle;
		let selectInput = document.getElementById("jobTitle");
		let chosenJobTitle =
			selectInput.options[selectInput.selectedIndex].text;
		jobTitle = chosenJobTitle;

		// prevents form from clearing after succesfully submitting it
		event.preventDefault();

		let applicantDataArray = [];

		let applicantData = {
			name: document.getElementById("fullName").value,
			email: document.getElementById("email").value,
			phone: document.getElementById("phoneNumber").value,
			jobTitle: jobTitle,
			url: document.getElementById("url").value,
			coverLetter: document.getElementById("coverLetter").value,
		};
		applicantDataArray.push(applicantData);

		// for display purposes
		console.log("Added : ", applicantDataArray[0]);
		document.forms[0].reset(); // to clear the form for the next entries
	}
}
