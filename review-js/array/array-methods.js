//1. Array.prototype.push()
//Adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array.

let arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // [1, 2, 3, 4, 5]

//2. Array.prototype.pop()
//Remove o último elemento do array e o retorna.

arr = [1, 2, 3, 4];
const lastElement = arr.pop();
console.log(lastElement); // 4
console.log(arr); // [1, 2, 3]

//3. Array.prototype.shift()
//Remove o primeiro elemento do array e o retorna, movendo todos os outros elementos uma posição para o início.

arr = [1, 2, 3, 4];
const firstElement = arr.shift();
console.log(firstElement); // 1
console.log(arr); // [2, 3, 4]

//4. Array.prototype.unshift()
//Adiciona um ou mais elementos ao início do array e retorna o novo comprimento do array.


arr = [1, 2, 3];
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]

//5. Array.prototype.concat()
//Cria um novo array concatenando o array atual com outros arrays e/ou valores.

arr = [1, 2];
arr = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]

//6. Array.prototype.slice()
//Retorna uma cópia rasa de uma parte do array em um novo array objeto selecionado do início até o fim (não inclusivo) especificado por índices.

arr = [1, 2, 3, 4];
const sliced = arr.slice(1, 3);
console.log(sliced); // [2, 3]

//7. Array.prototype.splice()
//Modifica o conteúdo do array removendo, substituindo ou adicionando elementos no local especificado.

arr = [1, 2, 3, 4];
arr.splice(2, 1, 'a', 'b'); // Remove 1 elemento a partir do índice 2 e adiciona 'a' e 'b'
console.log(arr); // [1, 2, 'a', 'b', 4]

//8. Array.prototype.forEach()
//Executa uma função para cada elemento do array.

arr = [1, 2, 3];
arr.forEach(element => console.log(element)); // 1 2 3


//9. Array.prototype.map()
//Cria um novo array com os resultados da execução de uma função em cada elemento do array.

arr = [1, 2, 3];
const doubled = arr.map(x => x * 2);
console.log(doubled); // [2, 4, 6]

//10. Array.prototype.filter()
//Cria um novo array com todos os elementos que passaram no teste da função fornecida.

arr = [1, 2, 3, 4];
const even = arr.filter(x => x % 2 === 0);
console.log(even); // [2, 4]

//11. Array.prototype.reduce()
//Aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzir a um único valor.

arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10

//12. Array.prototype.reduceRight()
//Semelhante ao reduce(), mas aplica a função do final para o início do array.

arr = [1, 2, 3, 4];
const concatenated = arr.reduceRight((acc, val) => acc + val, '');
console.log(concatenated); // '4321'

//3. Array.prototype.some()
//Testa se pelo menos um elemento do array passa no teste da função fornecida.

arr = [1, 2, 3, 4];
const hasEven = arr.some(x => x % 2 === 0);
console.log(hasEven); // true

//14. Array.prototype.every()
//Testa se todos os elementos do array passam no teste da função fornecida.

arr = [2, 4, 6];
const allEven = arr.every(x => x % 2 === 0);
console.log(allEven); // true

//15. Array.prototype.find()
//Retorna o primeiro elemento do array que satisfaz a função de teste fornecida.

arr = [1, 2, 3, 4];
const firstEven = arr.find(x => x % 2 === 0);
console.log(firstEven); // 2

//16. Array.prototype.findIndex()
//Retorna o índice do primeiro elemento do array que satisfaz a função de teste fornecida.

arr = [1, 2, 3, 4];
const index = arr.findIndex(x => x % 2 === 0);
console.log(index); // 1

//17. Array.prototype.includes()
//Determina se um array contém um determinado elemento, retornando true ou false.

arr = [1, 2, 3, 4];
const hasThree = arr.includes(3);
console.log(hasThree); // true

//18. Array.prototype.sort()
//Classifica os elementos do array no local e retorna o array.

arr = [4, 2, 3, 1];
arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 3, 4]

//19. Array.prototype.reverse()
//Inverte a ordem dos elementos do array no local e retorna o array.

arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr); // [4, 3, 2, 1]

//20. Array.prototype.join()
//Une todos os elementos do array em uma string e os retorna.

arr = ['Hello', 'World'];
const str = arr.join(' ');
console.log(str); // 'Hello World'



//1. Array.prototype.flat()
//O método flat() é usado para achatar arrays aninhados. Ele cria um novo array com todos os elementos de sub-array concatenados de forma recursiva até o nível especificado.
arr = [1, 2, [3, 4, [5, 6]]];
let flattened = arr.flat(2);
console.log(flattened); // [1, 2, 3, 4, 5, 6]

//2. Array.prototype.flatMap()
//O método flatMap() primeiro mapeia cada elemento usando uma função de mapeamento e depois achata o resultado em um novo array. É uma combinação de map() seguido por flat() com uma profundidade de 1.
arr = [1, 2, 3, 4];
flattened = arr.flatMap(x => [x, x * 2]);
console.log(flattened); // [1, 2, 2, 4, 3, 6, 4, 8]
//Neste exemplo, flatMap() mapeia cada número para um array com o número e seu dobro e então achata o resultado em um array de uma dimensão.

//3. O Set é uma coleção de valores únicos. Ele é usado para armazenar valores sem duplicatas e mantém a ordem de inserção. Características:
//Não permite valores duplicados.
//Mantém a ordem dos elementos conforme a inserção.
//Os elementos são acessíveis e iteráveis.
//Criar um Set:
const set = new Set([1, 2, 3, 4]);
//Adicionar Valores:
set.add(5);
//Remover Valores:
set.delete(2);
//Verificar Existência:
console.log(set.has(3)); // true
console.log(set.has(2)); // false
//Iterar sobre um Set:
set.forEach(value => console.log(value)); //1 2 3 4

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbers);
console.log([...uniqueNumbers]); // [1, 2, 3, 4, 5]