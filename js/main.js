// Establecer las variables
const buttonId = "diego-button";
const contadorId = "diego-contador";

let elemento = document.getElementById(buttonId);
let elementoContador = document.getElementById(contadorId);

const MARK = "SURNOMALICO";
let contador = 0;


// Establecemos el listener (el escuchador de eventos PARA SURNOMALICOS)
elemento.addEventListener("click", saludar);

// Funciones
function saludar() {
    contador = contador + 1;
    elementoContador.innerText = contador;
}
