function mostrar()
{var mesDelAño;
 mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño){
        case "Febrero":
            alert("Este mes no tiene mas de 29 días.");
            break;
        case "Enero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        case "Julio":
        case "Agosto":
        case "Septiembre":
        case "Octubre":
        case "Nomviembre":
        case "Diciembre":
            alert("Este mes tiene 30 o más días.");
            break;
    }
/* Cuando las demas opciones quedan como descarte se puede acortar el codigo
utilizando un default ( funciona como el "ELSE" del "IF" )
ej : switch(mesDelAño){
        case "Febrero":
            alert("Este mes no tiene mas de 29 días.");
            break;
        default :
            alert("Este mes tiene 30 o más días.");
            break;      */

}//FIN DE LA FUNCIÓN