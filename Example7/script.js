var users = [
    { id: 1, name: 'Jack'}, 
    { id: 2, name: 'Mac'}, 
    {id: 3, name: 'Smith'}
];

function getUsers(){
    fetchUsers(displayUsers);
    alert('fetchUserCall is in progress');
}

function fetchUsers(onSuccessCallback){
    
    if( typeof onSuccessCallback !== "function") return;

    setTimeout(function(){
        onSuccessCallback(users);
    }, 5000);
}
function displayUsers(users){
    var parentContainer  = document.getElementById("users");
    for(var i=0; i < users.length; i++){

        var childContainer = document.createElement("div"); 
        
        childContainer.innerText = JSON.stringify(users[i]);
        
        parentContainer.appendChild(childContainer);  
    }
}




