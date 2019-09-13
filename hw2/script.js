//alert("hello"); //to check if the link is correct

/// h o m e w o r k - p a r t 1///

function process() {
  
  var hwAvg = parseInt(document.getElementById("homeworkInput").value);
  var midTerm = parseInt(document.getElementById("midTermInput").value);
  var finalExam = parseInt(document.getElementById("finalExamInput").value);
  var participation = parseInt(document.getElementById("partInput").value);
  
  var sum = parseInt((.5 * hwAvg) + (.2 * midTerm) + (.2 * finalExam) + (.1 * participation));
  
  document.forms["formPart1"].elements["result"].value = sum;

  if (sum<=69) {
    document.getElementById("studentNote").innerHTML=("Student must retake the course");
  } else {
    document.getElementById("studentNote").innerHTML=("Congrats you pass!");
  }
  
  
}

/// h o m e w o r k - p a r t 2///

