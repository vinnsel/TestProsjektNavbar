const insertKostPris = document.getElementById("insertKostPris")
const insertSalgsPris = document.getElementById("insertSalgsPris")
const insertRabatt = document.getElementById("insertRabatt")
const calculateBtn = document.getElementById("calculateBtn")



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

    const artikkel = 'Jakke'
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
    
    return dekningsbidragProsent
}
calculateBtn.addEventListener("click", kalkyle)
