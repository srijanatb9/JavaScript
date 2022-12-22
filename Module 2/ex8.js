'use strict'

const arrayOfStrings = ['Nepal', 'Mountain', 'Trekking', 'Bouddha']

function concat(arrayOfStrings) {
    let str = ''
    for (let i = 0; i < arrayOfStrings.length; i++) {
        str += arrayOfStrings[i]
        document.querySelector('#home').innerHTML = str
    }
}

concat(arrayOfStrings)