function checkInputs(fullnameValue,emailAddressValue,jobSelectValue,coverLetterValue){	
	
	if(fullnameValue === "" ){

		showErrorMessage(fullname, "Name is requiried.");
	
	}else {
		success(fullname);
	}
	
	if(emailAddressValue === ""){

		showErrorMessage(emailAddress, "Email address cannot be blank.");

	}else if(!validEmail(emailAddressValue)){

		showErrorMessage(emailAddress, "Email address is not valid.");

	}else {
		success(emailAddress);
	}
	
	if(coverLetterValue === ""){

		showErrorMessage(coverLetter, "Cover letter cannot be blank.");

	}else{
		success(coverLetter);
	}

	if(jobSelectValue === "Select"){

		showErrorMessage(jobSelectValue, "Select job interest.");

	}else{
		success(jobSelect);
	}

	runAddToArray();

}

function showErrorMessage(inputField, message){
	const formElement = inputField.parentElement;
	const smalltext = formElement.querySelector("small");
	smalltext.innerText = message;
	formElement.className = "row error";
}

function validEmail(email){
	return /\\S+@\\S+/.test(email);
}

function success(inputField){
	const formElement = inputField.parentElement;
	formElement.className = "row ";
}
