const inputPris = document.getElementById("inputPris")
const inputArtikkel = document.getElementById("inputArtikkel")
const inputBtn = document.getElementById("inputBtn")
const emptyBtn = document.getElementById("emptyBtn")
const showInput = document.getElementById('results')
const arrayLength = document.getElementById('arrayLength')
// opprett egen variabel med tilgang til localStorage
const storage = window.localStorage

const displayArray = []
console.log(displayArray)
function emptyArray() {
  storage.removeItem("storeTilbudArray")

  visInputArray()

}

function lagreInputArray() {
  // Hent informasjon fra localStorage og parse til JS fra JSON
  const displayArray = JSON.parse(storage.getItem("storeTilbudArray"))

  const inputObject = {
    artikkel: inputArtikkel.value,
    pris: inputPris.value
  }

  if (!displayArray) {
    const displayArray = []
    displayArray.push(inputObject) // dytt ny verdi inn i prisArray
    // opprett en ny variabel med en JSON-verdi med prisArray som kilde
    const storageArray = JSON.stringify(displayArray)
    // lagre "prisArray" (key) med storageArray (value) i localStorage
    storage.setItem("storeTilbudArray", storageArray) // lagre "prisArray" (key) med storageArray (value) i localStorage

    visInputArray()

  }
  else {
    displayArray.push(inputObject)
    const storageArray = JSON.stringify(displayArray)
    storage.setItem("storeTilbudArray", storageArray)
  }

  visInputArray()

}

function remove_element(index_no){
  test = displayArray.splice(index_no,1)
  console.log(test)

  
  visInputArray()
}


function visInputArray() {
  const displayArray = JSON.parse(storage.getItem("storeTilbudArray"))
  if (!displayArray) {
    showInput.innerText = `Ingen resultat`
  }
  else {
    const hentFraLocalStorge = JSON.parse(storage.getItem("storeTilbudArray"))
    let str='';
    str = 'Antall: ' + hentFraLocalStorge.length + '<br>';
    for (let i=0; i < hentFraLocalStorge.length; i++) {

      
      str += i + ':'+ hentFraLocalStorge[i].pris + " <a href=# onClick='remove_element("+hentFraLocalStorge.indexOf(hentFraLocalStorge[i])+")'> Remove</a> " + "<br >";  // adding each element with key number to variable
//      let varePris = hentFraLocalStorge[i].pris
//      console.log(hentFraLocalStorge[i])
      console.log(hentFraLocalStorge[i].pris)
//      varePris = hentFraLocalStorge.pris
      showInput.innerHTML = str

      
    } 



//    const varePris = hentFraLocalStorge.map((element, i) => `<p id="${i}">#${i + 1} Artikkelnavn: ${element.artikkel} 
//    Pris: ${element.pris},- <a href=# onClick="remove_element('${i}')">Slett</a> `);
//    showInput.innerHTML = varePris.join('')
    //Nullstiller skjema
    inputArtikkel.value = '';
    inputPris.value = '';
   
  }
}
visInputArray()


inputBtn.addEventListener("click", lagreInputArray)
emptyBtn.addEventListener("click", emptyArray)

/*
const inputNum = 9
testArray = [1, 4, 5, 6]
testArray.push(inputNum)
console.log(testArray)
delete testArray[1];
console.log(testArray)
testArray.push(inputNum)
console.log(testArray)
console.log(testArray.indexOf(5))
console.log(testArray.length)
//showInput.innerText = `Ingen ${testArray}`

for (let i=0; i < testArray.length; i++) {
  console.log(testArray[i])
}
*/
//video 1:58