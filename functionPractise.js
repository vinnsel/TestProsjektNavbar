
//Objekt vare
/*
const vare1 = {
    artikkel: 'Jakke',
    kostpris: 600,
    pris: 1500,
    rabatt: 15
}

const vare2 = {
    artikkel: 'Bukse',
    kostpris: 600,
    pris: 1200,
    rabatt: 10
}
*/

//array for varer
let kunder = [
    {
        kundeid: 1,
        navn: 'Peter Pan',
        telefon: '97453465',
        artikler: [1, 2]
    },
    {
        kundeid: 2,
        navn: 'Petter Smart',
        telefon: '97422465',
        artikler: [1, 2, 3]
    },    
    {
        kundeid: 3,
        navn: 'Trond Bonde',    
        telefon: 96965383,
        artikler: [2, 3, 5]
    }
]
// console.log(kunder[1].navn)

let varer = [
    {  
    artikkelid: 1,    
    artikkel: 'Jakke',
    kostpris: 600,
    pris: 1500,
    rabatt: 15
},
{
    artikkelid: 2, 
    artikkel: 'Bukse',
    kostpris: 500,
    pris: 1000,
    rabatt: 10
},
{
    artikkelid: 3, 
    artikkel: 'Sko',
    kostpris: 350,
    pris: 699,
    rabatt: null
},
{
    artikkelid: 4, 
    artikkel: 'Sykkel',
    kostpris: 1200,
    pris: 2999,
    rabatt: null
},
{
    artikkelid: 5, 
    artikkel: 'Skjermer',
    kostpris: 79,
    pris: 199,
    rabatt: null
}
]

for (let i=0; i < varer.length; i++) {
// console.log(varer[i].artikkelid)
// console.log(varer[i].artikkel)

}

// looper gjennom kunders artikler
for (let i=0; i < kunder.length; i++) {
//    console.log(kunder[i].kundeid)
    console.log('Navn på kunde: ' + kunder[i].navn + '')
//    console.log(kunder[i].artikler) 
    let kundeArtikkelId = kunder[i].artikler
//    console.log(kundeArtikkelId.length)

    for (let i=0; i < kundeArtikkelId.length; i++) {
//    console.log(kundeArtikkelId[i])
        let ifKundeArtikkelId = kundeArtikkelId[i]
    for (let i=0; i < varer.length; i++) {
        let ifVareArtikkelId = varer[i].artikkelid
        let vareArtikkel = varer[i].artikkel
        let varePris = varer[i].pris
        if (ifKundeArtikkelId == ifVareArtikkelId ){
//          console.log(true)
//            console.log(ifKundeArtikkelId)
//            console.log(ifVareArtikkelId)
            console.log('Produkt kjøpt: ' + vareArtikkel + ', Pris: ' + varePris + '')

        }
        else
        {
 //           console.log(false)
 //           console.log(ifKundeArtikkel)
 //           console.log(ifVareArtikkel)
        }

//        console.log(varer[i].artikkelid)
//        console.log(varer[i].artikkel)
        
        }

}




    }
/*    
if (artikkelId = vareArtikkel ){
    console.log(true)
}
else{
    console.log(false)
}
        
*/

// looper gjennom kunders artikler
for (let i=0; i < kunder.length; i++) {
//    console.log(kunder[i].navn)
//    console.log(kunder[i].artikler)
    let vareKunde = kunder[i].navn
    let vareArtikkel = kunder[i].artikler
//    console.log(vareKunde, vareArtikkel)
    }







// Regner om desimaler
function noDecimal(ingenDesimaler) {
    return Number.parseFloat(ingenDesimaler).toFixed(0);
}
function toDecimal(toDesimaler) {
    return Number.parseFloat(toDesimaler).toFixed(2);
}

for (let i=0; i < varer.length; i++) {
//    console.log(varer[i].artikkel)
//    console.log(varer.length)
//    console.log(i + 1)


// Regner ut kalkylen på en vare
function kalkyle(artikkel, kostPris, veilPris, rabatt) {
    const rabattProsentDesimal = rabatt / 100
    const betaltDesimal = 1 - rabattProsentDesimal
    const etterRabatt = veilPris * betaltDesimal
    const mva = etterRabatt * 0.20
    const prisEtterMva = etterRabatt - mva
    const dekningsbidragKr = prisEtterMva - kostPris
    const dekningsbidragProsent = dekningsbidragKr / prisEtterMva
    

//    console.log('Salgspris på ' + artikkel + ' ' + veilPris + ',-')
//    console.log('Rabattprosent, desimal ' + toDecimal(rabattProsentDesimal) + '')
//    console.log('Betaltprosent, desimal ' + toDecimal(betaltDesimal) + '')
//    console.log('Pris etter rabatt ' + noDecimal(etterRabatt) + ',-')
//    console.log('Pris etter rabatt og mva ' + noDecimal(prisEtterMva) + ',-')
//    console.log('Mva ' + noDecimal(mva) + ',-')
//    console.log('Dekningsbidrag i kroner er ' + noDecimal(dekningsbidragKr) + ',-')
//    console.log('Dekningsbidrag i % er ' + toDecimal(dekningsbidragProsent) + '%')
    
    return dekningsbidragProsent
}
kalkyle(varer[i].artikkel, varer[i].kostpris, varer[i].pris, varer[i].rabatt)

}