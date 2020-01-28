
let anioMaximo;
let anioMinimo;
let rangoAnioAutos;
let optionSelected;
let buttonSelected;
let tipoSeguro;
let formularioEnvio;

anioMaximo = new Date().getFullYear(); //anioActual
anioMinimo = anioMaximo - 20;

formularioEnvio = document.getElementById('formulario');
rangoAnioAutos = document.getElementById('rangoAnio');
optionSelected = document.getElementById('select');
tipoSeguro = document.getElementById('tipoSeguro');

formularioEnvio.addEventListener('submit',enviarDatos);


function cargarValores(event){
    rangoAnioAutos.max = anioMaximo;
    rangoAnioAutos.min = anioMinimo;
}

function enviarDatos(event){
    event.preventDefault();
    let marcaAuto = optionSelected.getAttribute('seleccion');
    let anioAuto = rangoAnioAutos.value;
    let seguroAuto = tipoSeguro.querySelector('input[name="group1"]:checked').value;

}

//clases

class Auto {
    constructor(marca,anio,tipoSeguro){
        this.marca = marca;
        this.anio = anio;
        this.tipoSeguro = tipoSeguro;
    }
}