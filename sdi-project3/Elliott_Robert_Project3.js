//alert("JavaScript works!");

/* 
Robert Elliott
SDI - 1406
Project 3
*/

// Global Variables
var daysNeeded;
var numHrs = 8;


//Function Junction
//Number of Days to hours
mathHours = function(daysNeeded,numHrs){
    totalHours = (daysNeeded * numHrs);
      if (totalHours <= 40) {
        console.log ("Equal or less than 40 hours.");
      } else {
        console.log ("Not less than 40 hours.");
        
      };
    
    console.log (totalHours);
};

//Confirm the hours
var hrsConfirm = function (totalHours){
  while (totalHours < 40) 
    console.log ("Hours exceed the limit.");
    totalHours++;
        if (totalHours > 40) {
            console.log ("Hours have been adjusted.");
        }
    return totalHours;
};


// **Main Code**
//Prompt for number of days needed.
daysNeeded = prompt ("How many days are needed?", "Value between 1 and 10");
mathHours (daysNeeded,numHrs);
hrsConfirm (mathHours)
console.log (totalHours)