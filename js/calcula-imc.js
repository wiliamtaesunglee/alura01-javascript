var titulo = document.querySelector(".nutri");{
    console.log(titulo);
    console.log(titulo.textContent);

    titulo.textContent = "Elen Cintia Vale Pedro";
}
var titulo = document.querySelector(".patientRoll");{
    console.log(titulo);
    console.log(titulo.textContent);

    titulo.textContent = "Meus Pacientes";
}

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso"),
    peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura") 
    altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc"); 

var pesoEhValido = validaPeso(peso), alturaEhValida = validaAltura(altura);

if(!pesoEhValido){
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent="Peso inválido";
    paciente.classList.add("paciente-invalido");
}
else if(!alturaEhValida){
    console.log("Altura inválida");
    alturaEhValida = false;
    tdImc.textContent="altura inválida";
    paciente.classList.add("paciente-invalido");
}
else if(alturaEhValida && pesoEhValido){
var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
    paciente.classList.add("paciente-valido");    
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura*altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {
    if(peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura > 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}