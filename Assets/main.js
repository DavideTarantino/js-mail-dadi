//Minigioco 1

let x = Math.floor((Math.random() * 100) + 1);
document.getElementById("primo").innerHTML = x;

let y = Math.floor((Math.random() * 100) + 1);
document.getElementById("secondo").innerHTML = y;

if(x > y){
    document.getElementById("risultato").innerHTML = "HAI VINTO !"
}else{
    document.getElementById("risultato").innerHTML = "HAI PERSO :("
}

let email = ["mariorossi@gmail.com","alfredomariano@gmail.com","davidetarantino@gmail.com","luigipucci@gmail.com"];
let mail = document.getElementById("inputmail");

function accedi(){
    if(email.includes (mail.value) ){
        document.getElementById("responso").innerHTML = "ACCESSO CONSENTITO :)"
    }else{
        document.getElementById("responso").innerHTML = "ACCESSO NEGATO !!"
    }    
}

  
    