// 1. Prompt - оор 1 тоо авна.
// 2. Prompt - оор авсан тоог хэдэн оронтойг хэвлэж гарга.
// example: input = 1234567; digit: = 7;
console.log("Exercise number digits");

let num = prompt("Ta duriin too oruulna uu");
let count = 0;

while (num !== 0) {
 count = count +1   
 num = Math.floor(num / 10)
}

console.log(count);
