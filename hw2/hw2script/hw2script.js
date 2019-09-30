//alert("hello"); //to check if the link is correct

/// h o m e w o r k - p a r t 2///

/////////////////////////////////////////////////
function process() {
  
  var hwAvg = parseInt(document.getElementById("homeworkInput").value);
  var midTerm = parseInt(document.getElementById("midTermInput").value);
  var finalExam = parseInt(document.getElementById("finalExamInput").value);
  var participation = parseInt(document.getElementById("partInput").value);
  var finalResult = parseInt((.5 * hwAvg) + (.2 * midTerm) + (.2 * finalExam) + (.1 * participation));
  var inputValid = true;

  document.forms["formPart1"].elements["result"].value = finalResult;

  if (hwAvg > 0 || hwAvg > 100) {
    // document.getElementById("studentNote").innerHTML=("invalid. 1");
    document.inputForm.grade.value = ("Please enter a valid Homework Average (0-100).");
    inputValid = false;
  }
  if (midTerm > 0 || midTerm > 100) {
    // document.getElementById("studentNote").innerHTML=("invalid. 2");
    document.inputForm.grade.value = ("Please enter a valid Mid-Term (0-100).");
    inputValid = false;
  }
  if (finalExam > 0 || FinalExam > 100) {
    //document.getElementById("studentNote").innerHTML=("invalid 3");
    document.inputForm.grade.value = ("Please enter a valid Final Exam (0-100).");
    inputValid = false;
  }
  if (participation > 0 || participation > 100) {
    //document.getElementById("studentNote").innerHTML=("invalid 3");
    document.inputForm.grade.value = ("Please enter a valid Participation (0-100).");
    inputValid = false;
  }

  // Calculate finalGrade based on finalResult
  if(finalResult >= 89){
    finalGrade = "A";
  } else if(finalResult >= 79){
    finalGrade = "B";
  } else if(finalResult >= 69){
    finalGrade = "C";
  } else if(finalResult >= 59){
    finalGrade = "D";
  } else if(finalResult <= 59){
    finalGrade = "F";
  }

  if ((inputValid && finalGrade == "D") || (inputValid && finalGrade == "F")) {
    //document.getElementById("studentNote").innerHTML=("Student must retake the course. Your Final Grade is " + finalGrade);
    document.inputForm.grade.value = ("Your average score is " + finalAverage + "\nYour Final Grade is " + finalGrade );
  }else if(inputValid == true) {
    //document.getElementById("studentNote").innerHTML=("Congrats you pass! Your Final grade is " + finalGrade);
    document.inputForm.grade.value = ("Your average score is " + finalAverage + "\nYour Final Grade is " + finalGrade + "\n");
  }else {
    document.getElementById("studentNote").innerHTML=("Invalid Input (0-100). Please try again.");
  }
}