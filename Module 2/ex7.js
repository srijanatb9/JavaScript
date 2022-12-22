'use strict'

const sides = parseInt(prompt('Enter the no. of sides you want in your dice:'))

function diceRoll(sides){
    let roll = 0
    while (roll !== sides) {
        roll = Math.floor((Math.random()*sides)+1)
        document.getElementById('diceRoll').innerHTML += `<li> ${roll} </li>`
    }
}

diceRoll(sides)