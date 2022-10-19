const inputPris = document.getElementById("inputPris")
const inputBtn = document.getElementById("inputBtn")
const showInput = document.getElementById('results')

const pris = []

function input() {

    pris.push(inputPris.value)
//    console.log(inputPris.value)
     
//    console.log(showInput.innerText = pris)
    
    for (let i=0; i < pris.length; i++) {
            let prisArray = showInput.innerText = pris
        }
        
}

  inputBtn.addEventListener("click", input)

/*
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














