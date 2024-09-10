//  function test(){
//     console.log(arguments);
// }
// let a = "vansh"
// test(6,a)

// (function(){                    IIFE() EX- ANONYMOUS FUNCTION
//     console.log("hello")
// })()

// arrow func --------------->

// function higher(operationfn , a , b){  //higher order
//     return a(operationfn,b)
// }

// function add(a,b){
//     return a+b
// }

// let result = higher(2 , add,3)

// console.log(result)

function Greet(){
    return function(){
        // console.log(a)
        // console.log(b)
        console.log(arguments)
        
        console.log("hello")
    }
}

let greet = Greet()

// console.log(typeof greet)

 greet(1,"vansh")

