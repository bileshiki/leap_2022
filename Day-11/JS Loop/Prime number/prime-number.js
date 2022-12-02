// n < 100 тоо promt оор оруулна. n тоог анхны тоо эсэхийг шалгана.
// Example1: input: 1, output: true
// Example1: input: 6, output: false

// Example1: input: 11, output: true
// https://mn.wikipedia.org/wiki/%D0%90%D0%BD%D1%85%D0%BD%D1%8B_%D1%82%D0%BE%D0%BE

console.log("Exercise find prime number");

let num = prompt("Ta duriin toogoo oruulna uu")
    isPrime = true;

    if(num <= 1) {
        console.log("1 is neither prime nor composite number.");

    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`${num} is a prime number`);
        } else {
            console.log(`${num} is a not prime number`);
        }
}

else {
    console.log("The number is not a prime number.");
}
    