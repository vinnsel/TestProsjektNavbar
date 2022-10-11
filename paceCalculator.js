

let kmtInput = 15;
let paceInput = '5:00';



if(kmtInput) { 
    // converting speed to pace  
        const resPace = 60 / kmtInput; 
        function minTommss(minutes){
            const sign = minutes < 0 ? "-" : "";
            const min = Math.floor(Math.abs(minutes));
            const sec = Math.floor((Math.abs(minutes) * 60) % 60);
            return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
           }
        


 const convertDecimalToTime = minTommss(resPace);




    
    console.log(kmtInput); 
    console.log(convertDecimalToTime);
   


   
       } 

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

