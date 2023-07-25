/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   var numeroMayor
   if(x>y)
   numeroMayor=x;
   else if(y>x)
   numeroMayor=y;
   else console.log(x);

   console.log(numeroMayor);

}

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if(edad>18)console.log("Allowed");
   else console.log("Not Allowed");

}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   var estadoUsuario;
   if(status==1)
   estadoUsuario="Online";
   else if(status==2)
   estadoUsuario="Away";
   else estadoUsuario="Offline";

   console.log(estadoUsuario);
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   if(idioma=='aleman')console.log("Guten Tag!");
   else if(idioma=='mandarin')console.log("Ni Hao!");
   else if(idioma=='ingles')console.log("Hello!");
   else console.log("Hola!");
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   switch(color){
   case 'blue':
      console.log("This is blue");
      break;
   
   case 'red':
      console.log("This is red");
      break;

   case 'green':
         console.log("This is green");
         break;

   case 'orange':
         console.log("This is orange");
         break;
   default:
      console.log("color not found");
      
   }

}

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   if(num==10||num==5)console.log(true);
   else console.log(false);

}

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   if(num<50 && num>20)console.log(true);
   else console.log(false);
}

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   if(Number.isInteger(num))console.log(true);
   else console.log(false);

}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   if(num%3==0&&num%5!==0)var divisiblex3=num;
   if(num%5==0&&num%3!==0)var divisiblex5=num;
   if(num%3==0&&num%5==0)var divisibleAmbos=num;

   switch(num){
   case divisiblex3:
       console.log("fizz");
       break;
   case divisiblex5:
       console.log("buzz");
       break;
   case divisibleAmbos:
       console.log("fizzbuzz");
       break;
   default:
         console.log("el num no es divisible por 3 ni 5");
   }
   }
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   if(num1>num2&&num1>num3&&num1>0)console.log("Numero 1 es mayor y positivo");
   else if(num1<0||num2<0||num3<0)console.log("Hay negativos");
   else if(num3>num1&&num3>num2){
   num3=num3+1;
   console.log(num3);}
   else if(num1==0&&num2==0&&num3==0)console.log("error");
   else console.log(false);
}

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   var a=new Boolean();
   if(num==1||num==0)
       console.log("no es primo");
   
   for(var x=2;x<num;x++){
      if(num%x==0)a=false;  
      else a=true;
   }
   if(a=true)console.log("Es primo");
   else if (a=false) console.log("no es primo");

}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if(valor=true)console.log("Soy verdadero");
   else console.log("soy falso");
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   if(num>99)console.log(true);
   else console.log(false);
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   var i=0
   do{
      num=num+5;
      i++;
   }while(i<8)
   console.log(num);

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
