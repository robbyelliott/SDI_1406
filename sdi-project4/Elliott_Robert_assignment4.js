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
            var upperCaseWords = function (val){
                var sepString = val.split(" ");  
                    for (var i=0 ; i < sepString.length ; i++) {
                        var eachWord = sepString[i];
                        var firstLetter = eachWord.substring (0,1);
                        var remainLetter = eachWord.substring (1, eachWord.length - 0);
                        sepString[i] = firstLetter.toUpperCase () + remainLetter;
                    };
                        console.log (sepString.join (" "));
                
            };
        
        //Scenario 5: Give a string different seperators. 
            var changeCharcater = function (text){
                var chgText = text;
                var textIndex = chgText.indexOf(",")
                while (textIndex != -1) {
                    chgText = chgText.replace (",", " &");
                    textIndex = chgText.indexOf (",")
                };
                console.log (chgText);
            };
            
        

//Main Code
	//Scenario 1: String for phone number
	    promptNumReturn = ("123-456-7000");
            console.log (promptNumReturn);
            phNumValidate (promptNumReturn);
            
	//Scenario 4: String for title-case
            var stringTitle = upperCaseWords("this line is filler");
            
        //Scenario 5: String for different sperators.
            changeCharcater("Mario, Luigi, Peach");
            
            
            
            