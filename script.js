// callAPI function that takes the base and exponent numbers as parameters
var callAPI = () => {
    var base = document.getElementById('base').value;
    var exponent = document.getElementById('exponent').value;
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({"base": base, "exponent": exponent});
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    fetch("https://a4tb3iadnh.execute-api.ap-south-1.amazonaws.com/dev/", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
};
