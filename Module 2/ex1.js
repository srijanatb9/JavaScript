'use strict'

const numArray = []

for (let i = 0; i < 5; i++) {
    const num = parseInt(prompt('Enter numbers:'))
    numArray.push(num)
}

for (let i = numArray.length; i > -1; i--) {
    console.log(numArray[i])
}