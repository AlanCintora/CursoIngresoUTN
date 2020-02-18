/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   var largoTerreno;
    var anchoTerreno;
    var radioTerreno;
    var resultado;
    largoTerreno = document.getElementById("Largo").value;
    anchoTerreno = document.getElementById("Ancho").value;
    radioTerreno = document.getElementById("Radio").value;
    largoTerreno= parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);
    radioTerreno = parseInt(radioTerreno);
    resultado = (largoTerreno + anchoTerreno)*2;
        if((largoTerreno && anchoTerreno) > 0){
            alert("La cantidad de alambre a comprar es: " + (resultado * 3));
        }
        else{
        }

}   

function Circulo () 
{   var largoTerreno;
    var anchoTerreno;
    var radioTerreno;
    var resultado;
    largoTerreno = document.getElementById("Largo").value;
    anchoTerreno = document.getElementById("Ancho").value;
    radioTerreno = document.getElementById("Radio").value;
    largoTerreno= parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);
    radioTerreno = parseInt(radioTerreno);
    resultado = 
	
}
function Materiales () 
{
	
}