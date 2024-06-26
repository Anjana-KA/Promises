// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Define the main function
function mainFunction(callback) {
  console.log("Performing operation...");
  // Use Array.forEach to loop through the array of numbers
  numbers.forEach(callback);
}

// Define the callback function
function callbackFunction(number) {
  console.log("Result: " + number);
}

// Call the main function with the callback function
mainFunction(callbackFunction);
