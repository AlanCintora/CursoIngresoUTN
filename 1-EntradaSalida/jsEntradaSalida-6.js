/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{   var number1;
    var number2;
    var resultado;

    number1 = parseInt(document.getElementById("numeroUno").value);
    number2 = parseInt(document.getElementById("numeroDos").value);
    /*parseInt() es para transformar lo que inserta el usuario de texto a numero
    para que se pueda realizar una operación matematica.*/
    resultado = number1+number2;
        alert("El resultado es: " + resultado);

 }

