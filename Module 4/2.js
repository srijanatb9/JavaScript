'use strict';

async function showInfo() {

    const show = prompt('Enter the name of the show.')

    const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${show}`)
    const responseJSON = await response.json()

    console.log(responseJSON)

}

showInfo()