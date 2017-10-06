
// El siguiente bucle no se detendrá hasta que se ingrese una respuesta válida.
do{
	var answer = prompt("Ingrese el número de su tarjeta");
	if(answer !== "" && answer !== " "){
		isValidCard(answer);
	}else{
		alert("Ingrese un número válido, por favor.");
	}
} while (answer === "" || answer === " ");
/* La siguiente función utiliza el algoritmo de Luhn para determinar si el número
de una tarjeta es válido o no. */
function isValidCard(numberOfCreditCard){
	var myArray = [];  
	var size = numberOfCreditCard.length; 
	var lastPosition = size - 1;
	var globalSum = 0;
	for(var i = lastPosition ; i >= 0 ; i--){ 
		myArray.push(parseInt(numberOfCreditCard[i])); 
	}
	for(var j = 1 ; j <= myArray.length ; j++){ 
		if((j % 2) === 0){  
			var number = myArray[j-1] * 2; 
			if (number >= 10){ 
				number = number.toString();
				var digitOne = parseInt(number[0]); // 0 y 1 porque es imposible
				var digitTwo = parseInt(number[1]); // que number sera un número
				myArray[j-1] = digitOne + digitTwo; // de más dígitos que esos
			}else{ 
			  myArray[j-1] = number;
			}
		}
	}
	for(var k = 0 ; k < myArray.length ; k++){
		globalSum = globalSum + myArray[k];
	}
	if (globalSum % 10 === 0){
		return alert("¡Felicitaciones! El número de su tarjeta es válido.");
	}
	else if(globalSum % 10 !== 0){
		alert("Lo sentimos, el número de tu tarjeta no es válido.");
	}
}
