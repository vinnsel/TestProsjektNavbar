const insertKostPris = document.getElementById("insertKostPris")
const insertSalgsPris = document.getElementById("insertSalgsPris")
const insertRabatt = document.getElementById("insertRabatt")
const resultTitle = document.getElementById("result-title")
const calculateBtn = document.getElementById("calculateBtn")
const resultDom = document.getElementById('results')



// KALKYLEKALKULATOR
// Regner om desimaler
function noDecimal(ingenDesimaler) {
    return Number.parseFloat(ingenDesimaler).toFixed(0);
}
function toDecimal(toDesimaler) {
    return Number.parseFloat(toDesimaler).toFixed(2);
}

// Regner ut kalkylen på en vare
function kalkyle() {

    const artikkel = 'Jakke' // Forslag: Legg til en input der brukeren kan legge inn navnet på produktet
    const kostPris = insertKostPris.value
    const veilPris = insertSalgsPris.value
    const rabatt = insertRabatt.value

    const rabattProsentDesimal = rabatt / 100
    const betaltDesimal = 1 - rabattProsentDesimal
    const etterRabatt = veilPris * betaltDesimal
    const mva = etterRabatt * 0.20
    const prisEtterMva = etterRabatt - mva
    const dekningsbidragKr = prisEtterMva - kostPris
    const dekningsbidragProsent = dekningsbidragKr / prisEtterMva
    

    console.log('Salgspris på ' + artikkel + ' ' + veilPris + ',-')
//    console.log('Rabattprosent, desimal ' + toDecimal(rabattProsentDesimal) + '')
//    console.log('Betaltprosent, desimal ' + toDecimal(betaltDesimal) + '')
    console.log('Pris etter rabatt ' + noDecimal(etterRabatt) + ',-')
//    console.log('Pris etter rabatt og mva ' + noDecimal(prisEtterMva) + ',-')
//    console.log('Mva ' + noDecimal(mva) + ',-')
//    console.log('Dekningsbidrag i kroner er ' + noDecimal(dekningsbidragKr) + ',-')
    console.log('Dekningsbidrag i % er ' + toDecimal(dekningsbidragProsent) + '%')


    resultTitle.innerText = 'ØNSKET PRISTILBUD'
    resultDom.innerText = '' + artikkel +' - ' + rabatt + '%  Pris: ' + etterRabatt + ',- ' 
    // Sjekk ut Template literals (Template strings) noen med bruk av ` (backtics). Da blir det "penere" og lettere å kode inn tekststrenger
}
calculateBtn.addEventListener("click", kalkyle)
