function mostrar()
{   var edad;
    
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    if(!(edad >= 13 && edad <= 17))
    {
        alert("Usted no esta en la adolecencia.");
    }
    


}//FIN DE LA FUNCIÓN