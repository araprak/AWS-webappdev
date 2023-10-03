# Power of x raised to y AWS web app

This project uses AWS REST API, Lambda, DynamoDB, API Gateway, and Amplify to build a simple web application that calculates the power of x raised to y.

AWS REST API

The Lambda function exposes a REST API that can be used to calculate the power of two numbers. The API has a single endpoint, /Powerofdev, which accepts a POST request with two parameters: base and exponent. The function returns the result of calculating the power of the base number to the exponent number as a JSON object.

Lambda

The Lambda function is written in Python and uses the AWS SDK to interact with DynamoDB. The function calculates the power of the two numbers and stores the result and the current time in the DynamoDB table. The function then returns the result as a JSON object.

DynamoDB

The DynamoDB table stores the results of the calculations and the timestamp of each calculation. This allows the web application to display a history of the calculations that have been performed.

API Gateway

API Gateway is used to expose the Lambda function as a REST API. This allows the web application to invoke the function and get the result of the calculation.

Amplify

Amplify is used to build and deploy the web application. Amplify provides a number of features that make it easy to build and deploy web applications using AWS services, such as API Gateway, Lambda, and DynamoDB.

Web application

The web application uses the JavaScript Fetch API to invoke the Lambda function and get the result of the calculation. The result is then displayed in the web application.

How it works

When the user clicks the "CALCULATE" button, the following happens:
1. The JavaScript code validates the input and makes sure that the exponent is a numeric value.
2. The JavaScript code calls the calculatePower() function, which calculates the power of x raised to y and stores the result in DynamoDB.
3. The JavaScript code calls the callAPI() function, which makes an HTTP request to the AWS REST API.
4. The AWS REST API invokes the Lambda function and passes in the base and exponent numbers.
5. The Lambda function calculates the power of x raised to y and stores the result in DynamoDB.
6. The Lambda function returns the result to the AWS REST API.
7. The AWS REST API returns the result to the JavaScript code.
8. The JavaScript code displays the result to the user.

Benefits of using AWS REST API, Lambda, DynamoDB, API Gateway, and Amplify

1. Scalability: The web application can scale to handle a large number of requests by adding more Lambda functions.
2. Reliability: The web application is highly reliable because the Lambda function and DynamoDB are both highly available services.
3. Security: The web application is secure because the Lambda function is authenticated by AWS IAM.
4. Ease of development: Amplify makes it easy to develop and deploy the web application.

Conclusion

This project demonstrates how to use AWS REST API, Lambda, DynamoDB, API Gateway, and Amplify to build a scalable, reliable, and secure web application.
