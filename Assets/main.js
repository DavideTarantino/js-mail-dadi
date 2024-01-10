let x = Math.floor((Math.random() * 100) + 1);
document.getElementById("primo").innerHTML = x;

let y = Math.floor((Math.random() * 100) + 1);
document.getElementById("secondo").innerHTML = y;

if(x > y){
    document.getElementById("risultato").innerHTML = "HAI VINTO !"
}else{
    document.getElementById("risultato").innerHTML = "HAI PERSO :("
}