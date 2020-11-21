// 1. dado un array de numeros naturales,
// retornar un arreglo de la raíz cuadrada de los pares
let arr = [1, 2, 3, 4, 5, 6, 8, 74, 7];
function getSquare(array) {
  let resultArray = [];
  for (const el of array) {
    if (el % 2 === 0) resultArray.push(Math.sqrt(el));
  }

  return resultArray;
}
console.log(getSquare(arr));
// 2. dado un array de numeros naturales,
// retornar un arreglo de la potencia de los impares

// 3. dada una lista de objetos par {nombre: "Lisa Simpson", edad: 11}
// obtener una lista de las personas menores de edad,
