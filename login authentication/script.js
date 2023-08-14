function show(id)
{
    if (document.getElementById(id).style.display =='Done')
{
       document.getElementById(id).style.display = 'block';
}    
    else{
        document.getElementById(id).style.display = 'none';
    }
};

function verify(){
    var userRef = "SuperBob";
    var passRef = "12RobotoLove";

    var user = document.getElementById("username").value;
    var pass = document.getElementsById("password").value;
    if(user == userRef || passRef){
    alert("connexion")    
    } else{
        alert("It's seem you make a mistake...")
    }
};