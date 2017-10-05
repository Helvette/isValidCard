## Algoritmo de Luhn.

##### *Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn.*


## Diagrama de flujo de nuestro programa.

![](http://i.picasion.com/resize86/324ec7a75dd9356734eed878e2022ef2.png)


## Pseudocódigo de nuestro programa.

```
Crea un bucle que ejecute su cuerpo una vez antes de analizar las condiciones, debe contener una petición al usuario para que el resultado del bucle dependa de ella{
	Crear una variable que contenga el prompt con la petición al usuario;
	Si la respuesta ingresada no es un espacio vacío{
		Ejecutar la función isValidCard tomando como argumento la respuesta otorgada por el usuario;
	}De otra forma{
		Ejecutar una alerta que solicite ingresar un número válido;
	}
} Repite el bucle siempre que se ingrese algo diferente a un número;

Crea una función isValidCard que compruebe si el número de una tarjeta (ingresado como string) es válido o no{
	Crea una variable que contenga un arreglo vacío para luego, a modo de elementos, almacenar cada número de la tarjeta allí;
	Crea una variable que determine la longitud del número de tarjeta;
	Crea una variable que identifique el último índice del número de tarjeta;
	Crea una variable de suma global para, al final, almacenar la suma de cada dígito del número de tarjeta;
	Iterar en cada índice del string, pero a la inversa{
		por cada índice iterado, añadir dicho índice a nuestro arreglo vacío transformándolo a tipo "number";
	}
	Iterar en cada número de posición de nuestro nuevo arreglo, empezar desde 1 debido a que el algoritmo a usar para evaluar el número de tarjeta, lo hace de esa forma{
		Si estamos en una posición par{
			Crear una variable number que contenga el número que hay en la posición actual multiplicado por 2;
			Si number es un número mayor a 10{
				Convertir number a string;
				Crear una variable que contenga el índice 0 transformado a tipo "number";
				Crear una variable que contenga el índice 1 transformado a tipo "number";
				Transformar el valor de la posición actual en la suma de de las variables recién creadas;
			}Si number no es mayor a 10{
				Transformar el valor de la posición actual al number actual;
			}
		}
	}
	Iterar en cada índice de nuestro arreglo con los cambios ya hechos{
		Sumarle a nuestra suma global el valor contenido en el índice actual;
	}
	Si el residuo de la suma global es igual a 0{
		el número de tarjeta es válido y retarna una alerta de felicitaciones; 
	}
	Si el residuo de la suma global no es igual a 0{
		el número de tarjeta es inválido y retorna una alerta de lo sentimos;
	}
}

