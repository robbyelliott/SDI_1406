//alert("JavaScript works!");
/* 	Robert Elliott
	SDI 1406
	Assignment 4
*/
var promptNumReturn;
var phFuncReturn;
var promptEmailReturn;


//String Function
	//Scenario 1: Does a string follow a 123-456-7890?
            var phNumValidate = function (promptNumReturn) {
            var numLength = (promptNumReturn.length);
            var hyphenIndex = (promptNumReturn.indexOf ("-"));
            var hyphenLast = (promptNumReturn.lastIndexOf ("-"));
                if (numLength == 12 && hyphenIndex == 3 && hyphenLast == 7) {
                    return phFuncReturn;
                };
            };

        //Scenario 2: Does a string follow an aaa@bbb.ccc pattern like an email address?
            var validateEmail = function (emailValue) {
                
                
            
            
            };
            
        

//Main Code
	//Scenario 1: String for phone number
	    promptNumReturn = ("123-456-7890");
            console.log (promptNumReturn);
            phNumValidate (promptNumReturn);
            
	//Scenario 2: String for email address
            emailValueSend = ("robbyelliott@fullsail.edu");