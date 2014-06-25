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
                    textIndex = chgText.indexOf (",");
                };
                console.log (chgText);
            };
            
        //Scenario 6: Format a number to a specific length
           var formatNum = function (setNumber) {
             var resultFormat = setNumber.toFixed (2);
             console.log (resultFormat);
           
           };
        
        //Scenario 9: Number as a String to a Number
            var convertString = function (numText){
                var numFormated = parseInt(numText); {
                  console.log (numFormated);  
                };
                
            };

        //Scenario 11: Add numbers within an array.
            var addArray = function (numVar){
             for (var i = 0; i < numVar.length; i++){
               result += numVar[i];
               console.log ()
             };
             
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
            
        //Scenario 6: Number to format
            var sendNumTo = formatNum (123.456789);
        
        //Scenario 9: String to number
            var stringNumber = convertString ("421");
        
        //Scenario 11: Add numbers within an array.
            var inputNumber = addArray (1, 2, "3", "eggs", 2, "bacon", 5);
        
        
        
            