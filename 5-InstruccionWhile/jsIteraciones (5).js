function mostrar()
{var sexo = prompt("ingrese f ó m .");
    while(sexo.toLowerCase() != "f" && sexo != "m" ){
        sexo = prompt("Incorrecto. Reingrese f ó m: ");
    }
 document.getElementById('Sexo').value=sexo;

 /*Para que una variable no sea case sensetive se usa las funciones
    "toUpperCase()" y "toLowerCase()". */
}//FIN DE LA FUNCIÓN