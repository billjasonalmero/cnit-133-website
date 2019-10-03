//alert("hello"); //to check if the link is correct
//$("#hello").dialog() //to check if jquery is working

/* to check if jqueryis working
jQuery(document).ready(function($) {
 	alert("js is working");
});
*/

// $("#salesPerson").tooltip();
// $(document).tooltip();

// function calculate() {
//   var item1 = parseInt($(item1input).value)

// }

////still working on it.

    // JQuery tooltip
    $(function() {
      $( document ).tooltip();
    });

    $(document).ready(function() {


      var item1 = parseInt($(item1input).value);
      var item2 = parseInt($(item2input).value);
      var item3 = parseInt($(item3input).value);
      var item4 = parseInt($(item4input).value);

      var itemTotal = item1 + item2 + item3 + item4;

      $("#submit").click(function() {
        $("#totalAMountSold").change(itemTotal);
      })
      
    })




///////// code not working
    function calculate() {
      var item1 = document.formPart2.item1Form.value;
      var item2 = document.formPart2.item2Form.value;
      var item3 = document.formPart2.item3Form.value;
      var item4 = document.formPart2.item1Form.value;
      var validInput = true;
      var item1Total = 0;
      var item2Total = 0;
      var item3Total = 0;
      var item4Total = 0;
      var totalAmount = 0;
      var commission = 0;
      var totalSum = 0;
	
      // // Check for valid input
      // if (item1 < 0 || isNaN(item1)){
      //   $('#item1Input').html("Enter valid number of sales.");
      //   validInput = false;
      // }
      // if (item2 < 0 || isNaN(item2)){
      //   $('#item2Input').html("Enter valid number of sales.");
      //   validInput = false;
      // }
      // if (item3 < 0 || isNaN(item3)){
      //   $('#item3Input').html("Enter valid number of sales.");
      //   validInput = false;
      // }
      // if (item4 < 0 || isNaN(item4)){
      //   $('#item4Input').html("Enter valid number of sales.");
      //   validInput = false;
      // }
	
      // Calcuate sales totals
      if(validInput){
        item1Total = item1 * 239.99;
        item2Total = item2 * 129.75;
        item3Total = item3 * 99.95;
        item4Total = item4 * 350.89;
        
        // Fill Sales table
        $('#item1Total').html("$" + item1Total);
        $('#item1Sold').html("#item1Form");
        
        $('#item2Total').html("$" + item2Total);
        $('#item2Sold').html(item2Form);
        
        $('#item3Total').html("$" + item3Total);
        $('#item3Sold').html(item3Form);
        
        $('#item4Total').html("$" + item4Total);
        $('#item4Sold').html(item4Form);
        
        totalAmount = item1Total + item2Total + item3Total + item4Total;
        $('#totalAmount').html("$" + totalAmount);
        
        commission = totalAmount * .09;
        commission = commission.toFixed(2);
        $('#commission').html("$" + commission);
        
        totalSum = 200 + parseFloat(commission);
        totalSum = totalSum.toFixed(2);
        $('#totalSum').html("$" + totalSum);
      }
}


///// code not working
if (item1 < 0 || isNaN(item1)){
  $("result").html("Enter valid number of sales."); 
}
if (item2 < 0 || isNaN(item2)){
  $("result").html("Enter valid number of sales."); 
}
if (item3 < 0 || isNaN(item3)){
  $("result").html("Enter valid number of sales."); 
}
if (item4 < 0 || isNaN(item4)){
  $("result").html("Enter valid number of sales."); 
}


///// part 3
function Celsius(degreeF){
	var temp = 5/9 * (degreeF - 32);
	return temp;
}

function Fahrenheit(degreeC){
	var temp = (9/5 * degreeC) + 32;
	return temp;
}

function Calculate() {
	var temp;
	var fahrenheit = document.inputForm.fahrenheit.value;
	var celsius = document.inputForm.celsius.value;
	var fText = document.getElementById("fahrenheit");
	var cText = document.getElementById("celsius");
	
	// check for valid inputs
	if ((fahrenheit == "Fahrenheit" && celsius == "Celsius") || (fahrenheit != "Fahrenheit" && celsius != "Celsius")){
		alert("Please enter a valid temperature for either Fahrenheit or Celsius.");
		fText.value = ("Fahrenheit");
		cText.value = ("Celsius");
	} else if ((isNaN(fahrenheit) && (celsius == "Celsius")) || (fahrenheit == "Fahrenheit") && isNaN(celsius)){
		alert("Please enter a numeric temperature.");
		fText.value = ("Fahrenheit");
		cText.value = ("Celsius");
	} else {
		if (fahrenheit != "Fahrenheit"){
			cText.value = Celsius(fahrenheit) + " Degrees Celsius";
		} else {
			fText.value = Fahrenheit(celsius) + " Degrees Fahrenheit";
		}
	}
}

function Reset(){
	var fText = document.getElementById("fahrenheit");
	var cText = document.getElementById("celsius");
	
	fText.value = ("Fahrenheit");
	cText.value = ("Celsius");
}
