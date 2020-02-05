/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{   var num1;
    var resultado;
    num1 = parseInt(document.getElementById("importe").value);
    resultado = num1 - ((num1/100)*25);
    /*Otra manera de sacar este porcentaje es ingresando la variable
    y multiplicar por 0.75 ---> var*0.75  */
	document.getElementById("resultado").value = resultado;
}
