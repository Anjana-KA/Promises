function validateNumber(num) {
    if (typeof num !== 'number') {
        throw new Error('Input is not a valid number');
    }
    
    if (num < 0) {
        throw 'Number must be non-negative';
    }
    
    return true;
}

try {
    validateNumber('abc');
} catch (error) {
    console.error('Error:', error.message || error); 
}

try {
    validateNumber(-5); 
} catch (error) {
    console.error('Error:', error);
}

try {
    validateNumber(10); 
    console.log('Validation successful');
} catch (error) {
    console.error('Error:', error);
}
