const inputPris = document.getElementById("inputPris")
const inputArtikkel = document.getElementById("inputArtikkel")
const inputBtn = document.getElementById("inputBtn")
const showInput = document.getElementById('results')
const storage = window.localStorage // opprett egen variabel med tilgag til localStorage
const displayArray = JSON.parse(storage.getItem("storeTilbudArray")) // Hent informasjon fra localStorage og parse til JS fra JSON


function lagreInputArray() {

        const inputObject = {
          artikkel: inputArtikkel.value,
          pris: inputPris.value
        } 

      if (displayArray == null)  {
        const displayArray = []
        displayArray.push(inputObject) // dytt ny verdi inn i prisArray
        const storageArray = JSON.stringify(displayArray) // opprett en ny variabel med en JSON-verdi med prisArray som kilde
        storage.setItem("storeTilbudArray", storageArray) // lagre "prisArray" (key) med storageArray (value) i localStorage
        console.log(displayArray)
        visInputArray()
      
      }
      else {
        displayArray.push(inputObject) // dytt ny verdi inn i prisArray
        const storageArray = JSON.stringify(displayArray) // opprett en ny variabel med en JSON-verdi med prisArray som kilde
        storage.setItem("storeTilbudArray", storageArray) // lagre "prisArray" (key) med storageArray (value) i localStorage
        console.log(displayArray)
        
      }
visInputArray()
        

      } 
      

    function visInputArray() {
      
      if (!displayArray) {
        showInput.innerText = `Ingen resultat`
        console.log('nei')
      }
      else {
        console.log('JA')
      const hentFraLocalStorge = JSON.parse(storage.getItem("storeTilbudArray"))
      const varePris = hentFraLocalStorge.map(element => `Artikkelnavn: ${element.artikkel} Pris: ${element.pris},- `);
      showInput.innerText = varePris.join('\r\n')
    }
}
    visInputArray()




   inputBtn.addEventListener("click", lagreInputArray)