'use strict'

const numbers = []

while (true) {
    const num = parseInt(prompt('Enter the numbers:'))
    if (numbers.includes(num)) {
        console.log('The number has already been given.')
        break
    }
    else {
        numbers.push(num)
    }
}

numbers.sort()

let i = 0
while (i < numbers.length) {
    console.log(numbers[i])
    i++;
}
