//usando interface é possível adicionar mais propriedades em uma interface 'reabrindo'
interface User {
    name: string;
    age: number;
}
interface User {
    email: string;
}
const user: User = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
}

//Usando interface também é possível usar o extends pegando as props de outra interface
interface Admin extends User {
    role: string;
    
}
const user2: Admin = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
    role: 'Developer'
}

// A principal diferença entre Type e Interface são essas duas funções que são possíveis usando Interface








export {}