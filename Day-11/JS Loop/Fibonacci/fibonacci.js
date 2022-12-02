// // prompt оор n тоо орж ирэхэд тухайн n хүртлэх ширхэг Fibonacci дарааллын тоог хэвлэнэ үү.
// Example 1: input (5) -> 1 1 2 3 5 
// https://en.wikipedia.org/wiki/Fibonacci_number
console.log("Exercise fibonacci");

let num = prompt("Ta duriin too oruulna uu.")
    let n1 = 0, 
    n2 = 1, 
    nextTerm;
    
    console.log("Fibonacci Series:");

    for(let i = 1; i <= num; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }