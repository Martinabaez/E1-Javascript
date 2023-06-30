/* ejercicio 1 */

const parImpar = (numero) => {
    if (numero % 2 == 0) {
      console.log("El numero " + numero + " es par");
    } else {
      console.log("El numero " + numero + " es impar");
    }
  };
  
  parImpar(3);
  
  /* Ejercicio 2 */
  
  const mayorIgual = (n1, n2) => {
    if (n1 > n2) {
      console.log("Num 1 = " + n1 + " Es el número mayor");
    }
  
    if (n2 > n1) {
      console.log("Num 2 = " + n2 + " Es el número mayor");
    }
  
    if (n1 == n2) {
      console.log("Los números son iguales");
    }
  };
  
  mayorIgual(20, 30);
  
  /* Ejercicio 3 */
  
  const multiplo5 = (numero) => {
    if (numero % 5 == 0) {
      console.log("El número " + numero + " es multiplo de 5");
    } else {
      console.log("El número " + numero + " no es multiplo de 5");
    }
  };
  
  multiplo5(2);
  
  /* Ejercicio 4 */
  
  const listarNumeros = (numero) => {
    for (let index = 0; index <= numero; index++) {
      console.log(index);
    }
  };
  
  listarNumeros(10);
  
  /* Ejercicio 5 */
  const imprimirXveces = (palabra, veces) => {
    for (let index = 0; index < veces; index++) {
      console.log(palabra);
    }
  };
  
  imprimirXveces("Martina", 10);
  
  /* Ejercicio 6 */
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  
  const arrayPrint = (array) => {
    for (let index = 0; index < array.length; index++) {
      console.log(array[index]);
    }
  };
  
  arrayPrint(meses);
  
  /* Ejercicio 7 */
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const printArr = (numarray) => {
    for (let index = 0; index < numarray.length; index++) {
      if (index == 4) {
        continue;
      }
      console.log(numarray[index]);
    }
  };
  
  printArr(arr)
  
  /* Ejercicio 8 */
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const multiplicarArray = (param, num) => {
    for (let index = 0; index < param.length; index++) {
      console.log(param[index] * num)
    }
  }
  
  multiplicarArray(numeros, 2)