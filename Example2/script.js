function displayTime(){
    //1. Get the control where the time need to be placed
    var control = document.getElementById("timeContainer"); 
    if(control){
        //2. In order to place the text value inside the div container we have to use either  
        // innerHTML (or) inntText
        control.innerText = Date();    
    }
}

function startTimer(){ 
    setInterval(displayTime, 1000);
}