
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

//array for kunder
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
//  console.log(kunder)
//  console.log(kunder[1].navn)

//array for varer
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

kunder.map(navn => console.log(navn.artikler))
varer.map(vareArtikkelId => console.log(vareArtikkelId.artikkelid))

    // Looper gjennom kunders artikler
for (let i=0; i < kunder.length; i++) {
            console.log('Navn på kunde: ' + kunder[i].navn + '')
    let kundeArtikkelId = kunder[i].artikler

    //Looper gjennom artikkelId under kunder
for (let i=0; i < kundeArtikkelId.length; i++) {
        let ifKundeArtikkelId = kundeArtikkelId[i]

    // Looper gjennom varer    
for (let i=0; i < varer.length; i++) {
        let ifVareArtikkelId = varer[i].artikkelid
        let vareArtikkel = varer[i].artikkel
        let varePris = varer[i].pris
    // Sjekker for lik Id og printer varer med pris
        if (ifKundeArtikkelId == ifVareArtikkelId ){
            console.log('Produkt kjøpt: ' + vareArtikkel + ', Pris: ' + varePris + '')
        }   
        }
}




    }

