// declaracion
// camelCase ->
// lowerCamelCase -- variables, funciones, instancas
// UpperCamelCase -- Clases, interfaces, typos, Enums
// snake-case
let myArray = [];
let myArray2 = [1, 2, 2, 3, 85, 8, 8];
let myArray3 = ["x", 2, {}, true]; // usemos un solo tipo, 'x' | "x"

let texto = "Hola";
let nombre = "Emanuel";
texto = "Hola " + nombre + "Hola 2";
texto = `Hola ${nombre}`; // template string --> backstick

// lectura
// 1. acceso directo (acceso a un elemento en especifico)
console.log(myArray2[4]);
// 2. todo el arreglo
// 2.1 for
for (let i = 0; i < myArray2.length; i++) {
  console.log(myArray2[i]);
}
// 2.2 for each
// con funcion flecha -> ES6
myArray2.forEach((e) => {
  console.log(e); // elemento o posicion ??
});

myArray2.forEach(
  (e) => console.log(e) // elemento o posicion ??
);

// func normal
myArray2.forEach(function (e) {
  console.log(e);
});
// 2.3 map
myArray2.map((t) => {
  console.log(t);
});

// 2.4 for in
for (let i in myArray2) {
} // trae el indice

// 2.5 for of
for (let e of myArray2) {
} // trae elemento (e) en concreto

// 2.6 while
let contador = 0;
while (contador < myArray2.length) {
  console.log("Algo ...", myArray2.length[contador]);
  contador++;
}
// 2.7 funcion recursiva
function recorrer(indice) {
  if (indice > myArray2.length) return;
  console.log(myArray2[indice]);
  indice += 1; // corregido
  recorrer(indice);
}

recorrer(0);

// insercion en caliente
