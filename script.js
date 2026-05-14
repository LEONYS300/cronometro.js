const min = document.querySelector(".minutos")
const seg = document.querySelector(".segundos")
const mil = document.querySelector(".milesegundos")
const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const restartBtn = document.querySelector(".restart")
const continueBtn  = document.querySelector(".continue")


let interval;
let minutos = 0;
let segundos = 0;
let milesegundos = 0;
let isstop =false;


startBtn.addEventListener("click",startTime)
stopBtn.addEventListener("click",stopTimer)
restartBtn.addEventListener("click",restartTime)
continueBtn.addEventListener("click", contiueTimer)

function startTime() {

    interval = setInterval(()=>{

        if(!isstop){
            milesegundos += 10

            if(milesegundos === 1000){
                segundos++;
                milesegundos = 0;
            }
              if(segundos === 60){
                minutos++;
                segundos = 0;
              }
              
              min.textContent = formatTime(minutos);
              seg.textContent = formatTime(segundos);
              mil.textContent = formatmilisegundos(milesegundos);
              
             
            }
        },10)

       startBtn.style.display = "none"
       continueBtn.style.display = "block"
       isstop = false

        



    
    }
    
    function restartTime(){

        clearInterval(interval);

        
     
       
        minutos = 0;
        segundos = 0;
        milesegundos = 0;

        min.textContent = "00"
        seg.textContent = "00"
        mil.textContent = "000"
        startBtn.style.display = "block"
        continueBtn.style.display = "none"

     
    }

    function contiueTimer(){
        isstop = false
        

    }

    function stopTimer(){
        isstop = true
        
       
       
    }

    function formatTime(time){
        return time < 10 ? ` 0${time} ` : time;

    }

    function formatmilisegundos(time){
        return time < 100 ?  `${time}`.padStart(3, "0") : time;
    } 
