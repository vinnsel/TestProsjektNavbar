
const kmtInput = document.getElementById("insertSpeed")
const calculateBtn = document.getElementById("calculateBtn")
// console.log(calculateBtn)

function calculate() {
  const kmtOutput = kmtInput.value
//  console.log(value)


  if(kmtOutput || '') { 
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
   
  
  
   
       } 
    else {
         cosole.log('false kmt');
    }

}

function addere(verdi1, verdi2) {
  const sum = verdi1 + verdi2

  return sum
}
 
const sum = addere(1, 3)
console.log(sum)

calculateBtn.addEventListener("click", calculate)

    



/*
if(paceInput) { 
      // converting pace to speed
      function timeStringToFloat(time) {
          const hoursMinutes = time.split(/[.:]/);
          const hours = parseInt(hoursMinutes[0], 10);
          const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
          return hours + minutes / 60;
        }

        const timeToDecimal = timeStringToFloat(paceInput);
       
        const DecimalTokmt = 60 / timeToDecimal;
       let OutputKmtDecimal = DecimalTokmt;
          OutputKmtDecimal = OutputKmtDecimal.toFixed(1);

  console.log(paceInput);
  console.log(OutputKmtDecimal);




  }
  */