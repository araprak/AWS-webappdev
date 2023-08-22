// callAPI function that handles input validation and makes the API call
var callAPI = () => {
    var baseInput = document.getElementById('base').value;
    var exponentInput = document.getElementById('exponent').value;

    // Validate input to ensure they are numbers
    if (!isNumber(baseInput) || !isNumber(exponentInput)) {
        alert("Please enter valid numeric values.");
        return;
    }

    var base = parseFloat(baseInput);
    var exponent = parseFloat(exponentInput);

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
    fetch("YOUR API GATEWAY ENDPOINT", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}

// Function to check if a value is a number
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
