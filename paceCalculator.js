
const kmtInput = document.getElementById("insertSpeed")
const paceInput = document.getElementById("insertPace")
const resultTitle = document.getElementById("result-title")
const calculateBtn = document.getElementById("calculateBtn")
const resultDom = document.getElementById('results')

// console.log(para)






    
function calculate() {
  const kmtOutput = kmtInput.value
  const paceOutput = paceInput.value
  kmtInput.value = ''
  paceInput.value = ''

  if(kmtOutput == '' && paceOutput == '')  {
    alert('FYLL INN ET AV FELTENE')
    
  }  
  if(kmtOutput != '' && paceOutput != '') {
   alert('DU KAN BARE FYLLE UT ET AV FELTENE')
    
  }  



  if(kmtOutput != '' & paceOutput == '') { 
    // converting speed to pace  
        const resPace = 60 / kmtOutput; 
        function minTommss(minutes){
            const sign = minutes < 0 ? "-" : "";
            const min = Math.floor(Math.abs(minutes));
            const sec = Math.floor((Math.abs(minutes) * 60) % 60);
            return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
           }
        
  
  
  const convertDecimalToTime = minTommss(resPace);
  
  
  
  
    
    console.log(kmtOutput); 
    console.log(convertDecimalToTime);
   console.log(resultDom.innerText) 
    const resultOutputPace = convertDecimalToTime


    resultTitle.innerText = 'REGN OM FART -> PACE'
    resultDom.innerText = 'Farten ' + kmtOutput +'kmt. omregnet til pace er '
     + resultOutputPace + ' min. pr. km.'; 

   
       } 
 



    if(paceOutput != '' & kmtOutput == '') { 
        // converting pace to speed
        function timeStringToFloat(time) {
            const hoursMinutes = time.split(/[.:]/);
            const hours = parseInt(hoursMinutes[0], 10);
            const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
            return hours + minutes / 60;
          }
  
          const timeToDecimal = timeStringToFloat(paceOutput);
         
          const DecimalTokmt = 60 / timeToDecimal;
            let OutputKmtDecimal = DecimalTokmt;
            resultOutputSpeed = OutputKmtDecimal.toFixed(1);
  

            resultTitle.innerText = 'REGN OM PACE -> FART'
            resultDom.innerText = 'Pace ' + paceOutput +'min. pr. km. omregnet til fart er '
            + resultOutputSpeed + 'kmt.'; 


            
            console.log(resultDom.innerText) 

    console.log(paceOutput);
    console.log(resultOutputSpeed);
  

    }
    else {
    }

}

calculateBtn.addEventListener("click", calculate)
