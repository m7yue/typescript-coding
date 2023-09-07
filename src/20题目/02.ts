// function f(a: string | number, b: string | number) {
//     if (typeof a === 'string') {
//       return a + ':' + b; // no error but b can be number!
//     } else {
//       return a + b; // error as b can be number | string
//     }
//   }
  
//   f(2, 3); // Ok
//   f(1, 'a'); // Error
//   f('a', 2); // Error
//   f('a', 'b') // Ok


function isString(n: any): n is string {
    return typeof n === 'string'
}

type T = string | number

function f1(a: T, b: T) {
    // if (typeof a === 'string') {
    //     return `${a} : ${b}`
    // }
    if (isString(a)) {
        return `${a} : ${b}`
    }
    else {
        return ++a
        // return a + b
    }
}
f1(1, 2)
  