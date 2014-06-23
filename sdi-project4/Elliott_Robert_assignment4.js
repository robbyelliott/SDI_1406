//alert("JavaScript works!");
/* 	Robert Elliott
	SDI 1406
	Assignment 4
*/
var promptNumReturn;


//String Function
	//Scenario 1: Does a string follow a 123-456-7890
            var phNumValidate = function (promptNumReturn) {
            var numLength = (promptNumReturn.length);
            var hyphenIndex = (promptNumReturn.indexOf ("-"));
            var hyphenLast = (promptNumReturn.lastIndexOf ("-"));
                if (numLength == 12 && hyphenIndex == 3 && hyphenLast == 7) {
                    return true
                };
            };
                
//Main Code
	//Scenario 1: String for phone number
	    promptNumReturn = prompt ("Enter your telephone number for validation","000-000-0000");
            console.log (promptNumReturn);
            phNumValidate (promptNumReturn)
            
