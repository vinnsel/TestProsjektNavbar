const inputPris = document.getElementById("inputPris")
const inputArtikkel = document.getElementById("inputArtikkel")
const inputBtn = document.getElementById("inputBtn")
const emptyBtn = document.getElementById("emptyBtn")
const showInput = document.getElementById('results')
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




function visInputArray() {
  const displayArray = JSON.parse(storage.getItem("storeTilbudArray"))
  if (!displayArray) {
    showInput.innerText = `Ingen resultat`
  }
  else {
    const hentFraLocalStorge = JSON.parse(storage.getItem("storeTilbudArray"))
    const varePris = hentFraLocalStorge.map((element, i) => `<p id="${i}">#${i + 1} Artikkelnavn: ${element.artikkel} 
    Pris: ${element.pris},- <a href=# onClick="remove_element('${i}')">Slett</a> `);
    showInput.innerHTML = varePris.join('')
    //Nullstiller skjema
    inputArtikkel.value = '';
    inputPris.value = '';
   
  }
}
visInputArray()


inputBtn.addEventListener("click", lagreInputArray)
emptyBtn.addEventListener("click", emptyArray)

//video 1:58