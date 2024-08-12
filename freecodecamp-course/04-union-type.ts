type User = {
    name: string;
    id: number;
}
type Admin = {
    username: string;
    id: number;
}

let van: User | Admin = { name: 'hitesh', id: 334 }

van = {username: 'vn', id: 334}

//array 
const data: number[] = [1,2,3];
const data2:string[] = ['a', 'b', 'c'];
const data3: (number | string)[] = [1,2,3,'a'];

let seatAllotment: 'aisle' | 'middle' | 'window';
seatAllotment = "aisle";
//seatAllotment = 'crew'; Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"


















export {

}