function mainFunction(callback) {
    // Some task is performed here
    console.log("Main function is doing something.");
    console.log("Main function is done.");

        callback();


    // After the task is done, invoke the callback function
}

function callbackFunction() {
    console.log("Callback function is called.");
}
// Using the main function with the callback
mainFunction(callbackFunction );
