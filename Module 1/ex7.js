'use strict'

const diceRollsNum = parseInt(prompt('How many dices do you want to roll?'))
let i = 0
let sum = 0

while (i <= diceRollsNum){
    const diceNum = Math.floor(Math.random()*7)
    document.querySelector('#dice_roll').innerHTML = `${diceNum}`
    sum = sum + diceNum
    i++
}
//document.querySelector('#dice_roll').innerHTML = `${diceNum}`
document.querySelector('#dice_roll').innerHTML = `The sum of the numbers on the dice is ${sum}.`