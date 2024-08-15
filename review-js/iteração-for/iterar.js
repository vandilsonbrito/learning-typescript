//1. O loop for...of é usado para iterar sobre elementos de coleções iteráveis como arrays, strings, mapas, conjuntos, etc. É mais simples que o for para trabalhar com arrays e outros iteráveis.
let array = [1, 2, 3, 4];
for (const value of array) {
  console.log(value); // 1, 2, 3, 4
}
//iterável: Pode ser um array, string, mapa, conjunto, ou qualquer objeto que tenha um iterador.

//2. O loop for...in é usado para iterar sobre as propriedades enumeráveis de um objeto. Não é recomendado para arrays, pois a ordem das propriedades pode não ser garantida.
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]); // a 1, b 2, c 3
}
//Objeto: O objeto cujas propriedades serão iteradas.


//3. Array.prototype.forEach()
//O método forEach executa uma função para cada elemento do array. É útil para operações que não precisam interromper o loop.
array = [1, 2, 3];
array.forEach((value, index) => {
  console.log(index, value); // 0 1, 1 2, 2 3
});


//Comparação e Uso
//for: Flexível e pode ser usado em qualquer situação onde você precisa de um controle preciso sobre a iteração.
//for...of: Ideal para iterar sobre coleções iteráveis, como arrays, strings, e outros objetos iteráveis.
//for...in: Usado para iterar sobre as propriedades de um objeto. Não é recomendado para arrays, pois a ordem dos elementos não é garantida.
//forEach: Um método conveniente para iterar sobre arrays e aplicar uma função a cada elemento.
