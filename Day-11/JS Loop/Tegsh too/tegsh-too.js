// while loop ашиглан 0-100 хүртэлх тооны бүх тэгш тоог олох.
console.log("Exercise tegsh toog oloh");
let count = 0;
let result = "";

while (count <= 100) {
    if (count % 2 == 0) {
        result += count + " ";
    }
    count ++;
}

console.log(result);