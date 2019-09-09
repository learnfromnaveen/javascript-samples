var names = ["Jack", "Mac", "Jonathan Jy", "Smith Joran"];

/*
   When users clicks on [Add] button call this function  
*/
function addName(){
   
    //1. Get the control references
    var txtNameCtrl  = document.getElementById('name'); 
    
    var name  = txtNameCtrl.value;  

    
    if(name.trim() !== "" ){
        names.push(txtNameCtrl.value);
    }else{
        alert("* name cannot be empty");
    }


    displayNames(names, "result");
}


/*
   Following function takes the JSON object array and displyes 
   it
*/

function displayNames(names, containerId){
    var container = document.getElementById(containerId);
    container.innerHTML = "";
    for(var i=0; i<names.length;  i++){
        var childContainer  = document.createElement("div");
        childContainer.innerText = names[i];
        container.appendChild(childContainer);
    }
}


function seacrhAndReplace(){
    var txtNameCtrl = document.getElementById("name");
    var txtNameReplaceCtrl = document.getElementById("nameReplace");

    for(var i=0; i<names.length; i++){

        if( names[i].toLocaleLowerCase() === txtNameCtrl.value.trim().toLocaleLowerCase()){
            names[i] = txtNameReplaceCtrl.value.trim();
            break; // exits from the loop
        }
    }
    
    displayNames(names, "result");
}

function seacrhAndDelete(){
    var txtNameCtrl = document.getElementById("name");
    var txtNameReplaceCtrl = document.getElementById("nameReplace");

    for(var i=0; i<names.length; i++){

        if( names[i] !== undefined &&
            names[i].toLocaleLowerCase() === txtNameCtrl.value.trim().toLocaleLowerCase()){
            delete names[i];
        }
    }
    
    displayNames(names, "result");
}