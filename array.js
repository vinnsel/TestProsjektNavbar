const formPris = document.getElementById("inputPris")
const formArtikkel = document.getElementById("inputArtikkel")
const inputBtn = document.getElementById("inputBtn")
const showInput = document.getElementById('results')
const resultList = document.getElementById("result-list")
const storage = window.localStorage // opprett egen variabel med tilgag til localStorage
const displayArray = JSON.parse(storage.getItem("prisArray")) // Hent informasjon fra localStorage og parse til JS fra JSON

console.log(showInput)

const prisArray = []

 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

function input() {


    const inputObject = {
      artikkel: formArtikkel.value,
      pris: formPris.value
    };
    
    prisArray.push(inputObject) // dytt ny verdi inn i prisArray
    console.log('prisarray')
    console.log(prisArray)

    const storageArray = JSON.stringify(prisArray) // opprett en ny variabel med en JSON-verdi med prisArray som kilde
    storage.setItem("prisArray", storageArray) // lagre "prisArray" (key) med storageArray (value) i localStorage
  
       
    // Akkurat nå overskrives verdiene i localStorage hver gang input-funksjonen kjøres (når knappen trykkes)
    // Mål: hente verdiene som ligger i localStorage, legg til nye verdier/oppdater "gammel" array, oppdater/push nye verdier inn i localStorage

    // resultList.innerHTML = ''
    console.log({storageArray}) 
    console.log({prisArray})
    // resultList.innerHTML = resultItems

    for (let i=0; i < prisArray.length; i++) {
  
  //const li = document.createElement('li') // opprett et <li> element
  //local storage
  console.log(prisArray[i].artikkel)
  const textOutput = 'Artikkelnavn: ' + prisArray[i].artikkel + ', er priset til ' + prisArray[i].pris + ',-' 
  showInput.innerText = textOutput
  
 // li.appendChild(document.createTextNode(textOutput)) // legg verdien av textOutput inn som textNode-barn av <li> elementet
 // resultList.appendChild(li) // legg <li> elementet inn som et node-barn av <ul> elementet

 for (let i=0; i < storageArray.length; i++) {

  console.log(storageArray[i].pris)
  showInput.innerText = storageArray[i].pris
}

}
}

  function storeArrayfunction() {
  // Når siden laster første gang kjøres displayArray.map - denne bør inn i en egen funksjon som kjøres både når siden laster første gang (function call) og når noen trykker på knappen

}
//console.log(localStorage)
//showInput.innerText = 'test'

inputBtn.addEventListener("click", input)

/*
  const prisTest = ['t1', 't2', 't3', 't4']

  for (let i=0; i < prisTest.length; i++) {
    console.log(prisTest[i])

    function kalkyle(prisTest1) {
        prisTestSplit = prisTest1.join('\r\n')
        showInput.innerText = prisTestSplit
        console.log(prisTestSplit)
    }
    kalkyle(prisTest)
    


}


//  let arrayTest = showInput.innerText = prisTest
//  console.log(prisTest)





const enkeltObjekt = {
  produktnavn: "",
  kostpris: 0,


}


let arr = [];

const obj = {name: 'Tom'};

arr.push(obj);

console.log(arr); // 👉️ [{name: 'Tom'}]

*/

