function mostrar()
{var numero = prompt("ingrese un número entre 0 y 10.");
 numero=parseInt(numero);
	while(isNaN(numero) || numero < 0 || numero > 9){
		numero = prompt("Error. Reingrese: ");
		numero = parseInt(numero);
	}
	 document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN