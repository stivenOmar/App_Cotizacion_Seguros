
let anioMaximo;
let anioMinimo;
let rangoAnioAutos;
let optionSelected;
anioMaximo = new Date().getFullYear(); //anioActual
anioMinimo = anioMaximo - 20;

rangoAnioAutos = document.getElementById('rangoAnio');
optionSelected = document.getElementById('select');

console.log(optionSelected);

window.addEventListener('DOMContentLoaded',cargarValores);
rangoAnioAutos.addEventListener('click',verInfo);

function cargarValores(event){
    rangoAnioAutos.max = anioMaximo;
    rangoAnioAutos.min = anioMinimo;
}

function verInfo(event){
    console.log(event.target.value);
    console.log(optionSelected.getAttribute('seleccion'));
}


