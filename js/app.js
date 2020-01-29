
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
    const nuevatarjeta = new tarjetaCotizacion();
    if(marcaAuto == 0){
        nuevatarjeta.mostrarError('Debes seleccionar una marca de auto');
    }else {
        const nuevoAuto = new Auto(marcaAuto,anioAuto,seguroAuto);
        console.log(nuevoAuto.cotizarSeguro());
    }

}

//clases
class tarjetaCotizacion {

    mostrarResultados(){

    }

    mostrarError(mensaje){
        alert(mensaje)
    }
}

class Auto {
    constructor(marca,anio,tipoSeguro){
        this.marca = marca;
        this.anio = anio;
        this.tipoSeguro = tipoSeguro;
    }

    cotizarSeguro(){
        /*
        1 = americano 1.15
        2 = asiatico  1.05
        3 = europeo 1.35
        */
        let valorPorMarca;
        let base;
        let diferenciaDeAnios;
        let valorTotal;

        base = 2000;

        switch (this.marca) {
            case '1':
                valorPorMarca = base * 1.15
                break;
            case '2':
                valorPorMarca = base * 1.05
                break;
            case '3':
                valorPorMarca = base * 1.35
                break;
        }

        //obtener la diferencia entre el anio actual y el anio del auto

        diferenciaDeAnios = new Date().getFullYear() - this.anio;

        //por cada anio se reduce 3% al valor por marca
        valorTotal = valorPorMarca -  (valorPorMarca * (diferenciaDeAnios * 3))/100;

        if(this.tipoSeguro === 'Basico'){
            valorTotal = valorTotal + (valorTotal * 0.30);
        }else {
            valorTotal = valorTotal + (valorTotal * 0.50);
        }
        
        console.log(valorTotal);

    }

}