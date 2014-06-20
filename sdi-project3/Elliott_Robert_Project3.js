//alert("JavaScript works!");

/* 
Robert Elliott
SDI - 1406
Project 3
*/

// Global Variables

var promptValue;
var numHrs = 8;
var teamMembers = ["Todd", "Bobby", "James", "Jenn"];

//Boolean Function
var booInfo = function (daysNeeded, daysConfirm) {
	while (daysNeeded > 5) 
		daysNeeded --
		console.log (+daysNeeded)			
			if (daysNeeded < 5) {
			console.log ("You shall pass!");
			} else {
			console.log ("You shall not pass!");
			}
	return daysNeeded
};

//Number Function
var numFunction = function (numHrs) {
	for (numHrs; numHrs < 40; numHrs++)
		if (numHrs = 40) {
		console.log ("Less than " +numHrs);
		} else {
		console.log ("Not less than " +numHrs);
		}
	console.log ("Number of " +numHrs);
	return numHrs;
};

//String Function
var stringFun = function (textDays, textHours) {
        var explText = ("You have requested " +textDays+ " days, which will take " +textHours+ " hours.");
	console.log (explText);
	return explText;

};


//***MAIN SECTION**
	// prompt section

promptValue = prompt ("How many days are needed?", "Value between 1 and 10");

	//procedure
var daysNeeded = parseInt(promptValue);
 if (promptValue < 5) {
 	console.log ("Great we can handle " +promptValue+ " days.");
 } else {
 	console.log ("We may have to evaluate " +promptValue+ " days.");
 
 };  
	
	//Confirm
daysConfirm = confirm ("Number of days requested was " +promptValue+ "?");
console.log ("The following people can work on the task " +teamMembers+ ".")	
	//function calls
var booReturn = booInfo (daysNeeded);
var numReturn = numFunction(numHrs);
var stringReturn = stringFun (daysNeeded, numHrs);
teamMembers.push ("Martin")
console.log ("The following people can work on the task " +teamMembers+ ".")

//Returned Values
console.log ("Returned value for: " +promptValue);
console.log ("Returned value for: " +numReturn);
console.log ("Returned value for: " +daysNeeded);
console.log ("Returned value for: " +stringReturn);

