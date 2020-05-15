const userInputs = document.querySelector(".job-application");	
const fullname = document.querySelector("input[name=full-name]");
const emailAddress = document.querySelector("input[name=email]");
const phoneNumber = document.querySelector("input[name=phone-number]");
const jobSelect = document.getElementById("job-title");
const linkedinLink = document.querySelector("input[name=linkedin-link]");
const coverLetter = document.getElementById("cover-letter");

const fullnameValue = fullname.value;
const emailAddressValue = emailAddress.value;
const jobSelectValue = jobSelect.text;
const coverLetterValue = coverLetter.value;

console.log(fullnameValue);

const userDetailsArray = [];


function runFormValitation(){
	checkInputs(fullnameValue, emailAddressValue, jobSelectValue, coverLetterValue);
}

function runAddToArray(){
	addToArray(fullname, emailAddress, phoneNumber, jobSelect, linkedinLink, coverLetter);
}



userInputs.addEventListener("submit", (e) => {
	e.preventDefault();

	runFormValitation();
		

	
});



