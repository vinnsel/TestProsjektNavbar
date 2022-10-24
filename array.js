const formPris = document.getElementById("inputPris")
const formArtikkel = document.getElementById("inputArtikkel")
const inputBtn = document.getElementById("inputBtn")
const showInput = document.getElementById('results')
const resultList = document.getElementById("result-list")
const storage = window.localStorage // opprett egen variabel med tilgag til localStorage
const displayArray = JSON.parse(storage.getItem("prisArray")) // Hent informasjon fra localStorage og parse til JS fra JSON
const prisTest = ['t1', 't2', 't3', 't4']
console.log(showInput)

const prisArray = []

 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

function input() {

    const inputObject = {
      artikkel: formArtikkel.value,
      pris: formPris.value
    };
    
    prisArray.push(inputObject) // dytt ny verdi inn i prisArray
    //console.log('prisarray')
    //console.log(prisArray)

//    const storageArray = JSON.stringify(prisArray) // opprett en ny variabel med en JSON-verdi med prisArray som kilde
//    storage.setItem("prisArray", storageArray) // lagre "prisArray" (key) med storageArray (value) i localStorage
  
       
    // Akkurat nå overskrives verdiene i localStorage hver gang input-funksjonen kjøres (når knappen trykkes)
    // Mål: hente verdiene som ligger i localStorage, legg til nye verdier/oppdater "gammel" array, oppdater/push nye verdier inn i localStorage

    //console.log({storageArray}) 
    //console.log({prisArray})




//      function kalkyle(prisTest1) {
//          console.log(prisTest)
//          const prisTestSplit = prisTestValue.join('\r\n')
//          showInput.innerText = prisTestSplit.
//          console.log(prisTestSplit)
//      }
//      kalkyle(prisArray.artikkel)
    

//    for (let i=0; i < prisArray.length; i++) {
  
      //const li = document.createElement('li') // opprett et <li> element
      //local storage
      //const textOutput = 'Artikkelnavn: ' + prisArray[i].artikkel + ', er priset til ' + prisArray[i].pris + ',-' 
      //console.log(showInput.innerText = prisArray[i].artikkel)
      //console.log({prisArray[1].artikkel})
      
     // li.appendChild(document.createTextNode(textOutput)) // legg verdien av textOutput inn som textNode-barn av <li> elementet
     // resultList.appendChild(li) // legg <li> elementet inn som et node-barn av <ul> elementet
    
     for (let i=0; i < prisArray.length; i++) {
      let prisArray = showInput.innerText = prisArray
  }
  
}






//  function storeArrayfunction() {
  // Når siden laster første gang kjøres displayArray.map - denne bør inn i en egen funksjon som kjøres både når siden laster første gang (function call) og når noen trykker på knappen

//}
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


*/