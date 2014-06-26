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
        
        //Scenario 3: Is the string a URL.
            var valURL = function (value){
                var valHTTP = value.contains("http://");
                var valHTTPS = value.contains("https://");
                if (valHTTP === true) {
                    console.log ("http value is true")
                }  if (valHTTPS === true) {
                    console.log ("https value is true")
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


    

//Main Code
	//Scenario 1: String for phone number
	    promptNumReturn = ("123-456-7000");
            console.log (promptNumReturn);
            phNumValidate (promptNumReturn);
    
    
        //Scenario 3: Does the string contain certain values.
            var stringURL = valURL("http://www.facebook.com")
        
	//Scenario 4: String for title-case
            var stringTitle = upperCaseWords("this line is filler");
            
        //Scenario 5: String for different sperators.
            changeCharcater("Mario, Luigi, Peach");
            
        //Scenario 6: Number to format
            var sendNumTo = formatNum (123.456789);
        
        //Scenario 9: String to number
            var stringNumber = convertString ("421");
        
   
            