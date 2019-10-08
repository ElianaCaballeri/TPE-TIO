"use strict"
let n1=4;
let n2=5;
let span = document.querySelector(".capcha");

if (span){
    span.innerHTML =  n1 + "+" + n2 + "=";
    }
else {
    console.log("no existe el div");
    }
let btnCapcha = document.querySelector(".btnValidar");
btnCapcha.addEventListener("click",function validar(){
    let resultado = n1 + n2;
    let valor = document.querySelector(".valorIngresado").value;
    if (resultado==valor) {
        alert("Su consulta fue enviada");
    }
    else {
        alert("Ingrese el valor correcto");
    };
})