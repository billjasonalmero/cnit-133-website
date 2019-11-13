function validate() {
  var valid = true;
  //var errorMessage = "";

  if (document.myform.firstName.value == "") {
    document.getElementById("errorName").innerHTML = "<h3>Please add Name</h3>";
    valid = false;
  }

  if ((!document.myform.gender[0].checked) && (!document.myform.gender[1].checked) && (!document.myform.gender[2].checked)) {
    document.getElementById("errorGender").innerHTML = "Please select a Gender.";
    valid = false;
  }

  if ((!document.myform.university[0].checked) && (!document.myform.university[1].checked) && (!document.myform.university[2].checked) && (!document.myform.university[3].checked)) {
    document.getElementById("errorTeam").innerHTML = "Please select one or more Teams.";
    valid = false;
  }

  if (document.getElementById("stateYou").value == "select") {
    document.getElementById("errorState").innerHTML = "Please select a State.";
    valid = false;
  }

  return valid;
}