// Name: Devan Enhelder
// Date Created: 5/1/2020
// Most recent revision: 5/1/2020
// Restaurant Project

function validateForm(event) {
  var name =document.forms["contact"]["name"].value;
  var email =document.forms["contact"]["email"].value;
  var phone =document.forms["contact"]["phone"].value;
  var isValid = true;
  if (name == ""){
    alert("Name must be filled out.");
    isValid = false;
  }
  if(email == ""){
    alert("Email must be filled out.");
    isValid = false;
  }
  if(phone == ""){
    alert("Phone must be filled out.");
    isValid = false;
  }
  if(isValid == true){
    alert('Form Submitted Successfully.');
  }
  return false;}
