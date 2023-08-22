// calculatePower function that handles input validation and displays the result
var calculatePower = () => {
    var baseInput = document.getElementById('base').value;
    var exponentInput = document.getElementById('exponent').value;

    // Validate input to ensure they are numbers
    if (!isNumber(baseInput) || !isNumber(exponentInput)) {
        document.getElementById('result').innerHTML = "Please enter valid numeric values.";
        return;
    }

    var base = parseFloat(baseInput);
    var exponent = parseFloat(exponentInput);

    var result = Math.pow(base, exponent);
    document.getElementById('result').innerHTML = `Result: ${base} ^ ${exponent} = ${result}`;
}

// Function to check if a value is a number
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
