// Function to validate input and allow only numeric values
function validateInput(inputElement) {
    inputElement.value = inputElement.value.replace(/[^0-9.-]/g, "");
}

// calculatePower function that calculates and displays the result
var calculatePower = () => {
    var base = parseFloat(document.getElementById('base').value);
    var exponent = parseFloat(document.getElementById('exponent').value);

    if (isNaN(base) || isNaN(exponent)) {
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = "Please enter valid numeric values for base and exponent.";
        return;
    }

    var result = Math.pow(base, exponent);

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Math Result: ${base} ^ ${exponent} = ${result}`;

    // Call the API function
    callAPI();
};

// callAPI function that takes the base and exponent numbers as parameters
var callAPI = () => {
    var base = parseFloat(document.getElementById('base').value);
    var exponent = parseFloat(document.getElementById('exponent').value);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"base": base, "exponent": exponent});

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("Has to be updated", requestOptions)
        .then(response => response.text())
        .then(result => {
            var resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `API Result: ${base} ^ ${exponent} = ${JSON.parse(result).body}`;
        })
        .catch(error => console.log('error', error));
};
