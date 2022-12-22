'use strict';
const names = ['John', 'Paul', 'Jones'];

const list = document.querySelector("#target")

for (let i = 0; i < names.length; i++) {
    let nameList = document.createElement('li')
    nameList.innerHTML = names[i]
    list.appendChild(nameList)
}