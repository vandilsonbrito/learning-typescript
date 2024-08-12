const user = {
    name: 'Van',
    id: 1,
    isPaid: false
}

function createUser({name: string, isPaid: boolean}) {}
createUser({ name: 'Vandilson', isPaid: false }) //it's total fine, but if I do like:
let newUser = { name: 'Van', isPaid: false, email: 'van@email.com' }
createUser(newUser) // TS don't give me an error, even though createUser don't expect email prop

// Type Aliases
 type User = {
    readonly id: string 
    name: string,
    isPaid: boolean, 
    email: string,
    creadCardDetails?: number //optional
 }
 /* function createUser2(user: User): User {
    return user;
 }
createUser2({ name: 'Vandilson', email: 'vandilson@email.com', isPaid: true });
 */

let myUser: User = {
    id: '1599',
    name: 'Van',
    isPaid: false,
    email: 'van@email.com',
    //creadCardDetails is optional
}
myUser.email = 'vandilson@email.com';
//myUser.id = '454' Cannot assign to 'id' because it is a read-only property

type cardDate = {
    carddate: string
}
type cardCVV = {
    cardcvv: string
}
type cardDetails = cardDate & cardCVV & { //is possible to mix types
    cardNumber: string
}








export {}