const inputPris = document.getElementById("inputPris")
const inputArtikkel = document.getElementById("inputArtikkel")
const inputBtn = document.getElementById("inputBtn")
const showInput = document.getElementById('results')

const tilbudArray = []


function input() {
        const inputObject = {
          artikkel: inputArtikkel.value,
          pris: inputPris.value
        }
        
        tilbudArray.push(inputObject) // dytt ny verdi inn i prisArray


    for (let i=0; i < tilbudArray.length; i++) {
                console.log(inputObject.artikkel)
                showInput.innerText = inputObject.artikkel
        }
        
}

  inputBtn.addEventListener("click", input)

/*

  function input() {
    const inputObject = {
      artikkel: formArtikkel.value,
      pris: formPris.value
    }


    tilbudArray.push(inputObject)

    console.log(tilbudArray)
    for (let i=0; i < tilbudArray.length; i++) {
            console.log(inputObject.artikkel)
            showInput.innerText = inputObject.artikkel
            console.log(tilbudArray)

        }

  const prisTest = ['t1', 't2', 't3', 't4']

  for (let i=0; i < prisTest.length; i++) {
    console.log(prisTest[i])

    function kalkyle(prisTest1) {
        showInput.innerText = prisTest1
        console.log(prisTest1)
    }
    kalkyle(prisTest)
    


}
*/

//  let arrayTest = showInput.innerText = prisTest
//  console.log(prisTest)













