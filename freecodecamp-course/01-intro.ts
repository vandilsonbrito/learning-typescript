// TypeScript is a Developer Language, it helps to build safety JS applications, in the end, everything is JS.

//Variables
const num:number = 5;
const str: string = 'Hello';
const bool: boolean = false;
const arr: string[] = ['a', 'b', 'c', 'd'];

//Use interface quando você deseja definir a estrutura de um objeto. Interfaces são extensíveis, ou seja, você pode usar a palavra-chave extends para criar novas interfaces com base em outras.
interface User{
    name: string,
    age: number,
    isAdmin: boolean
}

let user: User = {name: "Vandilson", age: 10, isAdmin: false};

//Use type quando você precisa de um tipo primitivo, uma união de tipos, ou quando deseja criar um alias para um tipo mais complexo. type também pode ser usado para definir objetos, mas não é extensível como interface.
type UserID = number | string;

// Functions
function add(value1, value2) {
    return value1 + value2;
}
add('2', 3) // it accepts
function add2(value1: number, value2: number) {
    return value1 + value2 + '2'; // it accepts
} 
add(2, 3) 

//Right Way
function add3(value1: number, value2: number): number {
    // return value1 + value2  + ''; string is not assignable to type number
    return value1 + value2;
}
add(2, 3) 

//The best practice is to declare function return type, even if there is no return value (void)
function add4(value1: number, value2: number): void {
    console.log(value1, value2);
}
// There are some functions that never gonna return something, like handling error func, so the best practice is to declare as never
function handlingError(msg: string): never {
    throw new Error(msg);
}