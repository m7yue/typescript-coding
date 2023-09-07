type User = {
    id: number;
    kind: string;
  };
  
// function makeCustomer<T extends User>(u: T): T {
//     // Error（TS 编译器版本：v4.4.2）
//     // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
//     // '{ id: number; kind: string; }' is assignable to the constraint of type 'T', 
//     // but 'T' could be instantiated with a different subtype of constraint 'User'.
//     return {
//         id: u.id,
//         kind: 'customer',
//     }
// }


// function makeCustomer<T extends User>(u: T) {
//     return {
//         id: u.id,
//         kind: 'customer'
//     }
// }


type SubUser = {
    id: number;
    kind: string;
    other: string;
}

type O = SubUser extends User ? 1 : 2 // 1

let user: User = {
    id: 1,
    kind: 'customer'
}

let subUser: SubUser = {
    id: 1,
    kind: 'customer',
    other: 'ccc'
}

// user = subUser // ok
// subUser = user // error

function makeCustomer<T extends User>(u: T): T {
    return {
        ...u,
        id: u.id,
        kind: 'customer'
    }
}