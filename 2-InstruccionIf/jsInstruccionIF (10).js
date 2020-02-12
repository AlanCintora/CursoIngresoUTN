function mostrar()
{var num1;
	num1 = Math.floor(Math.random()*(11-1))+1;
	console.log(num1);	
		if(num1 >= 9)
		{
			alert("EXCELENTE");
		}
		else if(num1 >= 4 && num1 < 9)
		{
			alert("APROBÓ");
		}
			else
			{
				alert("Vamos, la proxima se puede");
			}
	
/*Para saber si esta correcto el resultado del RANDOM
podemos usar el comando "console.log(var) y de esa manera vemos 
en la consola el numero que salio en la variable para comprobar*/

}//FIN DE LA FUNCIÓN