var primeraDecena="";
var segundaDecena="";
var operaciones=["+","-","x"];
var i="";
var puntaje = 0;
var tiempoLimite = 10;
var cronometro=document.getElementById("Cronometro")
var intervalo

function Timer(){
    intervalo=setInterval(function (){
    tiempoLimite = tiempoLimite-1
    cronometro.textContent=tiempoLimite
    if (tiempoLimite===0) {
        clearInterval(intervalo)
        puntaje = puntaje - 5;
        alert("Te Quedaste sin Tiempo!!!");
    }
}, 1000)
}


function Operacion() {
    if (primeraDecena ==="" && segundaDecena ==="" && i ===""){
    primeraDecena= Math.floor(Math.random()*10)+1;
    segundaDecena= Math.floor(Math.random()*20)+1;
    i=Math.floor(Math.random()*3);
    }
    var resultado="";    
 if (operaciones[i]==="+"){
     resultado=segundaDecena+primeraDecena;
 }
 if (operaciones[i]==="-"){
     resultado=segundaDecena-primeraDecena;
 }
if (operaciones[i]==="x") {
    resultado=segundaDecena*primeraDecena;
}
return resultado;
}

function Game(resultado) {
    tiempoLimite=10
    primeraDecena= "";
    segundaDecena= "";
    i= "";
    Operacion()
    clearInterval(intervalo)
    Timer()
    resJuego=document.getElementById("Respuesta").value = "";
    document.getElementById("Puntaje").innerHTML="<h1>"+puntaje+"</h1>";
    document.getElementById("Cuenta").innerHTML="<h1>"+segundaDecena+" "+operaciones[i]+" "+primeraDecena+" = </h1>";

}

function InGame() { 
    var resJuego=Number(document.getElementById("Respuesta").value);  
    if (resJuego===Number(Operacion())){
        puntaje=puntaje+5;
        alert("Es Correcto!!!");

    }else{
       puntaje=puntaje-10;
       alert("Te has Equivocado!!!");
    }
    document.getElementById("Puntaje").innerHTML="<h1>"+puntaje+"</h1>";
    Game()


}

