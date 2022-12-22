'use strict'

const participants = []
let noOfParticipants = parseInt(prompt('Enter the no. of participants:'))

for (let i = 0; i < noOfParticipants; i++) {
    const names = prompt('Enter the name of participants:')
    participants.push(names)
}

participants.sort()

for (let i = 0; i < participants.length; i++) {
        console.log(participants[i]);
    }



