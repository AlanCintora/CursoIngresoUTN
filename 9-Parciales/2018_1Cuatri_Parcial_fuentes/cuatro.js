function mostrar()
{var num1;
 var num2;
 num1 = prompt("Ingrese un número:");
 num2 = prompt("Ingrese un número:");
   if(num1 == num2){
       alert(num1 + num2);
   }
   num1 = parseInt(num1);
   num2 = parseInt(num2);

        if(num1 > num2){
       alert(num1 - num2);
         }
         else if(num1 < num2){
       alert(num1 + num2 );
         }
        if((num1 + num2) > 10){
         alert("La suma es " + (num1+num2) + " y supero el 10");
         }
}
