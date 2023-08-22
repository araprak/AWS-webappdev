// calculatePower function that handles input validation, displays the result, and calls the API
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

    // Call the API
    callAPI(base, exponent);
}

// Function to check if a value is a number
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

// callAPI function that takes the base and exponent numbers as parameters
var callAPI = (base, exponent) => {
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"base": base, "exponent": exponent});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://a4tb3iadnh.execute-api.ap-south-1.amazonaws.com/dev/", requestOptions)
    .then(response => response.text())
    .then(result => {
        // Update the result element with the API response
        document.getElementById('result').innerHTML += "<br>API Result: " + JSON.parse(result).body;
    })
    .catch(error => console.log('error', error));
}
