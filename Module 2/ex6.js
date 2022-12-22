'use strict'

function diceRoll(){
    let roll = 0
    while (roll !== 6) {
        roll = Math.floor((Math.random()*6)+1)
        document.getElementById('diceRoll').innerHTML += `<li> ${roll} </li>`
    }
}

diceRoll()