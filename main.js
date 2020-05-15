function Submit()  {

    // get the html text values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var jobs = document.getElementById("jobs").value;
    var url = document.getElementById("url").value;
    var cover = document.getElementById("cover").value;
    var result = document.getElementById("result");

    // validate textfield  have values
    if(name == "")
    {
        window.alert("Full Name can’t  be blank");
        return;
    }

    if(email == "")
    {
        window.alert("email can’t  be blank");
        return;
    }

    if(phone == "")
    {
        window.alert("phone can’t  be blank");
        return;
    }

    if(jobs == "Select Job.")
    {
        window.alert("jobs can’t  be blank");
        return;
    }

    if(cover == "")
    {
        window.alert("cover can’t  be blank");
        return;
    }

    // validate if phone number is valid
    var phoneNoRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(phone.match(phoneNoRegex)) 
    {
        //do nothing
    }
    else
    {
        window.alert("Invalid Phone Number");
        return;
    }
  
  //get all textvalues from html as an array
    var arrayInput = document.getElementById("myform");
    var output = "{";
    //loopinh thru the array and saving the values in a string
    for (var i = 0; i < arrayInput.length ;i++) {
        if(i != arrayInput.length - 1)
        {
            output += arrayInput.elements[i].name + ":" + arrayInput.elements[i].value + ",";
        }
        else
        {
            output += arrayInput.elements[i].name + ":" + arrayInput.elements[i].value ;
        }
       
    }
    output += "}"
    // logging the result
    console.log(output);
    return false; // prevent the page to reload
}