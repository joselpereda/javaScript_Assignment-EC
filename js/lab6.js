// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

//----------------------------------------------------------------------------------------
// Funtion to check that investment amount entered is in the correct format
function isFloat(invest) {
    let floatRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
    if (!floatRegex.test(invest)) {
        return false;
    }
    invest = parseFloat(invest);
    if (isNaN(invest)) {
        return false;
    }
    return true;
}
//----------------------------------------------------------------------------------------
// function to check that years entered is a a whole integer
function isInt(investYears) {
    let intRegex = /^-?\d+$/;
    if (!intRegex.test(investYears))
        return false;

    let intVal = parseInt(investYears, 10);
    return parseFloat(investYears) == intVal && !isNaN(intVal);
}

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
// Verify investment amount is in correct format, and that it is > $0
if ((isFloat(investment) === false) || (parseFloat(investment) <= 0)) {
    do {
        investment = window.prompt("Enter investmnt amount in the correct format, xxxx.xx, which must be greater than $0");       
    } while ((isFloat(investment) === false) || (parseFloat(investment) <= 0));
}
// Round investment amount to 2 decimals 
investment = Math.round(parseFloat(investment * 100)) / 100;

rate = parseFloat(prompt('Enter interest rate as x.x'));
// Verify that interest rate is in correct format and that it is between 0% and 6%
if ((isFloat(rate) === false) || (parseInt(rate) < 0 || parseInt(rate) > 6)) {
    do {
        rate = window.prompt("Enter investmnt amount in the correct format, xxxx.x, which must be between 0.0% and 6.0%");       
    } while ((isFloat(rate) === false) || (parseInt(rate) < 0 || parseInt(rate) > 6));
}
// Round interest rate to one decimal place
rate = Math.round(parseFloat(rate * 10)) / 10;

years = parseInt(prompt('Enter the number of years you want to invest for'));

// Check if years entered is a whole integer. If not, prompt user to re-enter value
while (isInt(years) === false) {
    years = window.prompt("Enter number of years as a whole number.");
}
years = parseInt(years,10);

// Vefity that number of years entered is between 1 an 30. If not, prompt user to enter a valid entry
while ((years >= 1 && years <= 30) !== true) {
    years = window.prompt("Entry not valid. Number of years must be between 1 and 30.");
}

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);