'use strict'

const dogs = []

for (let i = 0; i < 6; i++) {
    const names = prompt('Enter the name of dogs:')
    dogs.push(names)
}

dogs.sort()
dogs.reverse()

for (let d in dogs) {
    console.log(dogs[d])
}