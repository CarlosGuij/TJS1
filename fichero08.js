let horas = parseInt(prompt( "Ingrese las horas:"));
let sueldo = parseInt(prompt( "Ingrese el sueldo:"));

    let resultado = (horas * sueldo);
    
document.getElementById("resultado").innerHTML="El salario a pagar es de " +resultado +"$";
