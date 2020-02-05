/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{   var num1;
    var resultado;

    num1 = parseInt(document.getElementById("sueldo").value);
    resultado= num1 * 1.10;
    /*Utilizando la operacion var*1.x realiza el mismo calculo
    para porcentajes
    la operación tradicional sería (var/100)*x) */
    document.getElementById("resultado").value = resultado;
}