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

    fetch("https://zsk9bo6vv7.execute-api.ap-south-1.amazonaws.com/Powerofdev", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
};


// Function to validate input and allow only numeric values
function validateInput(inputElement) {
    inputElement.value = inputElement.value.replace(/[^0-9.-]/g, "");
}

// calculatePower function that calculates and displays the result
var calculatePower = () => {
    var base = new Big(document.getElementById('base').value);
    var exponent = parseInt(document.getElementById('exponent').value);
    
    if (isNaN(exponent)) {
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = "Please enter a valid numeric exponent.";
        return;
    }

    var result = base.pow(exponent).toString();

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Math Result: ${base.toString()} ^ ${exponent} = ${result}`;

    // Call the API function
    callAPI();
};
