// 1
// 1. Prompt - оор 1 тоо авна.
// 2. 1 ээс promp оор авсан тоо хүртэлх нийлбэрийг ол.
// example: input = 10 
// 1+2+3+4+5+6+7+8+9+10 = 55;

let a = prompt("ta toogoo oruulna uu");
let count = 0;
let result = "";
let count1 = 1;

if(a.length < 6 && a.length >= 4) {
    while(count1 <= a) {
        count = count + count1;
        result += count + " ";
        count1 = count1 + 1;
    }
    console.log(result);
} else {
    alert("5 orontoi too bichne uu")
}
