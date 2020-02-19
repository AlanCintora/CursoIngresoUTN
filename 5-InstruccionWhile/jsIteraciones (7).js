function mostrar()
{	var contador=0;
	var acumulador=0;
	var numero
	var respuesta = "si"
	while(contador >= 0){
		
		while(respuesta == "si"){
				numero = prompt("Ingrese un número: ");
				numero = parseInt(numero);
				acumulador = (acumulador + numero);
				contador++
				respuesta = prompt("¿Quiere continuar?")
				}
	}	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN