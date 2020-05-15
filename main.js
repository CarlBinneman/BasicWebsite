const userInputs = document.querySelector(".job-application");
const fullname = document.querySelector("input[name=fullname]");
const emailAddress = document.querySelector("input[name=email]");
const phoneNumber = document.querySelector("input[name=phone-number]");
const jobSelect = document.getElementById("job-title");
const linkedinLink = document.querySelector("input[name=linkedin-link]");
const coverLetter = document.querySelector("input[name=cover-letter]");
const userDetails = [];
//const sumbitForm = document.querySelector(".");

userInputs.addEventListener("submit", (e) => {
	e.preventDefault();

	checkInputs(); 
});

function checkInputs(){
    
}