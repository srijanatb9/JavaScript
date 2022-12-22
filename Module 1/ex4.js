'use strict';

const Gryffindor = 1;
const Slytherin = 2;
const Hufflepuff = 3;
const Ravenclaw = 4;

const name = prompt('Type your name!')

let value = Math.floor((Math.random()*4)+1);

switch (value) {
    case Gryffindor:
        document.querySelector('#harryPotter').innerHTML = `${name}, you are Gryffindor.`;
        break;

    case Slytherin:
        document.querySelector('#harryPotter').innerHTML = `${name}, you are Slytherin.`
        break;

    case Hufflepuff:
        document.querySelector('#harryPotter').innerHTML = `${name}, you are Hufflepuff.`
        break;

    default:
        document.querySelector('#harryPotter').innerHTML = `${name}, you are Ravenclaw.`

}
