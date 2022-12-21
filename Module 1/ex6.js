'use strict'

const option = confirm('Should I calculate the square root?')

if (option === true){
    const num = parseInt(prompt('Enter a number:'))
    if (num >= 0){
        document.querySelector('#square_root').innerHTML = `The square root of ${num} is ${Math.sqrt(num)}.`
    }
    else {
        document.querySelector('#square_root').innerHTML = 'The square root of a negative number is not defined.'
    }
}
else{
    document.querySelector('#square_root').innerHTML = 'The square root is not calculated.'
}



