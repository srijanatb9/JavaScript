'use strict'

let startingYear = parseInt(prompt('Enter the starting year:'))
let endingYear = parseInt(prompt('Enter the ending year:'))

while (startingYear <= endingYear){
    if (startingYear % 4 === 0 && startingYear % 100 !== 0) {
        document.getElementById("leapYrs").innerHTML += `<li>${startingYear}</li>`
        startingYear ++
    }
    else if (startingYear % 100 === 0 && startingYear % 400 === 0) {
        document.getElementById("leapYrs").innerHTML += `<li>${startingYear}</li>`
        startingYear ++
    }
    else {
         startingYear ++
    }
}




















