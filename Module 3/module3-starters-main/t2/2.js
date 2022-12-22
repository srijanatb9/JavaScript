'use strict'

const list = document.querySelector("#target")

const item1 = document.createElement('li')
const item2 = document.createElement('li')
const item3 = document.createElement('li')

item1.innerText = 'First item'
item2.innerText = 'Second item'
item3.innerText = 'Third item'

list.appendChild(item1)
list.appendChild(item2)
list.appendChild(item3)