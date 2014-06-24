//alert("JavaScript works!");
/* 	Robert Elliott
	SDI 1406
	Assignment 4
*/
var promptNumReturn;
var phFuncReturn;


//String Function
	//Scenario 1: Does a string follow a pattern?
            var phNumValidate = function (promptNumReturn) {
            var numLength = (promptNumReturn.length);
            var hyphenIndex = (promptNumReturn.indexOf ("-"));
            var hyphenLast = (promptNumReturn.lastIndexOf ("-"));
                if (numLength == 12 && hyphenIndex == 3 && hyphenLast == 7) {
                    console.log ("True");
                };
            };
        
        //Scenario 4: Title-Case a string
            var splitString = function (val){
              var sepString = val.split(" ")  
                console.log (sepString)
            };
        

//Main Code
	//Scenario 1: String for phone number
	    promptNumReturn = ("123-456-7000");
            console.log (promptNumReturn);
            phNumValidate (promptNumReturn);
            
	//Scenario 4: String for title-case
            var stringTitle = splitString("i think lines mostly filler.");
            