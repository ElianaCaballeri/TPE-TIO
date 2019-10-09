"use strict"
document.addEventListener("DOMContentLoaded", iniciarPagina);
function iniciarPagina() {
    let baseUrl =“web-unicen.herokuapp.com / api / groups / 06GrupoBolivarMegaDelGiorgio / vencimientos”;
    const MAX = 3;
    document.querySelector("#btnAgregarIva").addEventListener("click", agregarFecha);
    document.querySelector("#btnAgregarVariosIva").addEventListener("click", agregarVarios);
    document.querySelector("#btnVaciarIva").addEventListener("click", vaciarTabla);
    let tabla = document.querySelector("#tablaVtoIva");

    function agregarDato(datoJson) {
        fetch(baseUrl, {
            "method": "POST",
            "headers": { "Content-Type": "application/json" };
            "body": JSON.stringify(thing.datoJson)
        })
            .then(r => r.json())
            .then(j => {
                console.log(vencimientos);
            });
    }

    function agregarFecha() {
        //agrega un objeto JSON al arreglo Vencimientos. 
        // Luego actualiza la tabla en el html
        let fechaV = document.querySelector("#fechaVencimiento").value;
        let terminacionCuit = parseInt(document.querySelector("#cuit").value);
        if ((terminacionCuit >= 0) && (terminacionCuit < 10)) {
            let vencimiento = {
                "thing": {
                    "cuit": terminacionCuit,
                    "fecha": fechaV
                }

            }
            agregarDato(vencimiento);
            //vencimientosIva.push(vencimiento);
            mostrarTabla();
        }
        else {
            alert("TERMINACION DE CUIT INVALIDO; debe ser entre 0 y 9");
        }
    }

    function agregarVarios() {
        for (let index = 0; index < MAX; index++) {
            agregarFecha();
        }
    }

    function mostrarTabla() {
        tabla.innerHTML = " ";
        vencimientosIva.forEach(element => {
            tabla.innerHTML += "<tr><td>" + element.cuit + "</td><td>" + element.fecha + "</td></tr>";
        });
    }

    function vaciarTabla() {
        vencimientosIva = [];
        mostrarTabla();
    }

}//cierra funcion iniciar pagina