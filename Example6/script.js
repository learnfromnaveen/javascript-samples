function readName(){
    var control  = document.getElementById("name");  
    if(control){

        try{
            displayName(control.value);
        }
        catch(e){
            alert(e.message);
        } // e - exception object
        
    }
    
}


function displayName(name){
    alert(name);
}