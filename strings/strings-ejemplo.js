// '',
let myString = `Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. 
Ut placet, inquit, etsi enim illud erat aptius, 
aequum cuique concedere. 
Hosne igitur laudas et hanc eorum, 
inquam, sententiam sequi nos censes oportere? 
In motu et in statu corporis nihil inest, 
quod animadvertendum esse ipsa natura iudicet?`;

let text = `Hola ${myString}`; // template string

// métodos con strings
const position = myString.search("enim");
console.log(position);

myString.substring(0, 10); // indice start, end
myString.substr(1, 25); // start -> length
myString.replace('hanc', 'hola'); // remplaza elemento buscado por nuev
myString.includes('ipsa'); // verifica si existe el elemento buscado
myString.split(','); // retorna un arreglo de elementos dado un patron


