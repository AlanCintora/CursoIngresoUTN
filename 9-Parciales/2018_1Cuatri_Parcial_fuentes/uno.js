
function mostrar()
{   var ancho;
    var largo;
    var resultado;
    ancho = prompt("Ingrese el ancho:");
    largo = prompt("Ingrese el largo:");
    ancho = parseInt(ancho);
    largo = parseInt(largo);
    resultado = (ancho+largo)*2;
    alert("El resultado es: " + resultado);
}    