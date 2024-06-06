function addSync(a, b) {
    return a + b;
}

function subtractSync(a, b) {
    return a - b;
}

function main() {
    console.log("Adding 5 and 3...");
    const sum = addSync(5, 3);
    console.log("Result of addition:", sum);

    console.log("Subtracting 5 from 10...");
    const difference = subtractSync(10, 5);
    console.log("Result of subtraction:", difference);
}

// Invoke the main function
main();
