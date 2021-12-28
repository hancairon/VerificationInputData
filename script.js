function validate() {

  // Declaration of variable
  var email = document.getElementById("email").value;
  var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; // Email Type
  var password1 = document.getElementById("pass").value;
  var password2 = document.getElementById("pass2").value;
  var checkbox = document.getElementById("terms");
  var message = document.getElementById("message");
  var error = "";

  // Validation of email
  if (email.match(emailPattern)) {
  }
  else if (email == "") {
    error = "You entered a blank email address.";
    alert(error);
    return false;
  }
  else {
    error = "You have entered an invalid email address!";
    alert(error);
    return false;
  }

  // Validation of Password Matching
  if (password1.length === 0) {
    error = "Enter your passwords.";
    alert(error);
    return false;
  }
  else if (password1 == password2) {
  }
  else {
    message.textContent = "!Passwords do not match.";
    message.style.color = "red";
    return false;
  }

  // Validation of Checkbox
  if (checkbox.checked == true) {
    alert("Submitted Successfully")
    return true;
  }
  else {
    error = "Check the terms and conditions.";
    alert(error);
    return false;
  }

  
}



