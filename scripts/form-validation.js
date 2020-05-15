function formSubmition(fullname, emailAddress, phoneNumber, jobSelect, linkedinLink, coverLetter){
	//this.preventDefault();
	
	const user = {
		fullname,
		emailAddress,
		phoneNumber, 
		jobSelect, 
		linkedinLink, 
		coverLetter
	};

	userDetails.push(user);
	console.log(userDetails);
}


