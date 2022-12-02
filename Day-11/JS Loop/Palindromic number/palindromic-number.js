// Ugugdsun toog urwuugaar ni haruul

console.log("Exercise palindromic number");

let num =  prompt("Ta garaas too oruulna uu.")
    temp = 0,
    last = 0,
    rem = 0;
    temp = num;

    while(num > 0) {
        rem = num % 10;
        num = Math.floor(num / 10);
        last = last * 10 + rem;
    } 

    if(temp == last) {
        console.log("Palindrome number")
    } else {
        console.log("Not Palindrome number")
    }
    console.log(last);