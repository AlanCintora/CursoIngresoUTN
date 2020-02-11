function mostrar()
{var edad;
var estadoCivil;    
edad = document.getElementById("edad").value;
edad = parseInt(edad);
estadoCivil = document.getElementById("estadoCivil").value;
    if(edad < 18 &&  estadoCivil != "Soltero")
    {
        alert("Usted es muy pequeño para NO ser soltero.");
    }
    else(edad >= 18 && estadoCivil == "Soltero")
    {}

    
	


}//FIN DE LA FUNCIÓN