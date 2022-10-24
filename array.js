const formPris = document.getElementById("inputPris")
const formArtikkel = document.getElementById("inputArtikkel")
const inputBtn = document.getElementById("inputBtn")
const showInput = document.getElementById('results')
const resultList = document.getElementById("result-list")
const storage = window.localStorage // opprett egen variabel med tilgag til localStorage
const displayArray = JSON.parse(storage.getItem("storeTilbudArray")) // Hent informasjon fra localStorage og parse til JS fra JSON


const displayTilbudArray = JSON.parse(localStorage.getItem("storeTilbudArray")) 
console.log(displayTilbudArray)

const tilbudArray = []


 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

function input() {

    const inputObject = {
      artikkel: formArtikkel.value,
      pris: formPris.value
    }

    tilbudArray.push(inputObject) // dytt ny verdi inn i prisArray

    //skriver vedier til DOM
    const visVarePris = tilbudArray.map(element => `Artikkelnavn: ${element.artikkel} Pris: ${element.pris},- `)
    showInput.innerText = visVarePris.join('\r\n')
  
  

    const storageArray = JSON.stringify(tilbudArray) // opprett en ny variabel med en JSON-verdi med prisArray som kilde
    storage.setItem("storeTilbudArray", storageArray) // lagre "prisArray" (key) med storageArray (value) i localStorage
    console.log(storageArray)

       
    // Akkurat nå overskrives verdiene i localStorage hver gang input-funksjonen kjøres (når knappen trykkes)
    // Mål: hente verdiene som ligger i localStorage, legg til nye verdier/oppdater "gammel" array, oppdater/push nye verdier inn i localStorage

    console.log({storageArray}) 
    console.log({tilbudArray})

  
}






//  function storeArrayfunction() {
  // Når siden laster første gang kjøres displayArray.map - denne bør inn i en egen funksjon som kjøres både når siden laster første gang (function call) og når noen trykker på knappen

//}
//console.log(localStorage)
//showInput.innerText = 'test'

inputBtn.addEventListener("click", input)



