
function addToArray(fullname, emailAddress, phoneNumber, jobSelect, linkedinURL, coverLetter){	
	console.assert(
		fullname != null && emailAddress != null && jobSelect != null && coverLetter != null,
		"Some required fields are null or undefined."
	);

	const details = {
		name: fullname,
		email: emailAddress,
		number: phoneNumber,
		job: jobSelect,
		linkedIn: linkedinURL,
		coverLetter: coverLetter
	};

	userDetailsArray.push(details);
	console.log(userDetailsArray);
}