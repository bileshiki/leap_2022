// n < 100 тоо promt оор оруулна. n тоог анхны тоо эсэхийг шалгана.
// Example1: input: 1, output: true
// Example1: input: 6, output: false

// Example1: input: 11, output: true
// https://mn.wikipedia.org/wiki/%D0%90%D0%BD%D1%85%D0%BD%D1%8B_%D1%82%D0%BE%D0%BE

console.log("Exercise find prime number");

let a = prompt("Ta duriin toogoo oruulna uu");
let primeNumber = Number(a);
let result = "";

while (primeNumber > 0) {
    if (primeNumber % a == 1) {
        result += primeNumber + " ";
    }
    primeNumber ++;
}
console.log(result);