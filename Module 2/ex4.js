'use strict'

const numbers = []

while (true) {
    const num = parseInt(prompt('Enter a number:'))
    if (num === 0) {
        break
    }
    else {
        numbers.push(num)
    }
}

numbers.sort()
numbers.reverse()

for (let n in numbers){
    console.log(numbers[n])
}