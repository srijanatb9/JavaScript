'use strict'

function calculate (){

    let calculation = document.getElementById('operation').value
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)

    switch (calculation){
        case "add":
            result.innerHTML = num1 + num2
            break

        case "sub":
            result.innerHTML = num1 - num2
            break

        case "multi":
            result.innerHTML = num1 * num2
            break

        case "div":
            result.innerHTML = (num1 / num2)
            break
    }
}

start.addEventListener('click', calculate);