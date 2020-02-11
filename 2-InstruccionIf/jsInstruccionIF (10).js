function mostrar()
{var num1;
	num1 = Math.floor(Math.random()*(11-1))+1;
		
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
	

}//FIN DE LA FUNCIÓN