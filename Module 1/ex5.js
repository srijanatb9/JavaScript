'use strict'

const year = parseInt(prompt("Enter a year:"))

if (year % 4 === 0 && year % 100 !== 0) {
    document.querySelector('#leapyear').innerHTML = "It's a leap year."
}

else if (year % 100 === 0 && year % 400 === 0) {
    document.querySelector('#leapyear').innerHTML = "It's a leap year."
}

else {
    document.querySelector('#leapyear').innerHTML = "It's not a leap year."
}



