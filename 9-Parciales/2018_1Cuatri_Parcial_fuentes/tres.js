function mostrar()
{   var precio;
    var descuento;
    var resultado;
    precio = prompt("Ingrese el precio:");
    descuento = prompt("Ingrese el descuento:");
    resultado= precio - (precio/100)*descuento;
    document.getElementById("elPrecioFinal").value = resultado;
}
