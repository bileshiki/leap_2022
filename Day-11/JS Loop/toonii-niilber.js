// 1
let a = prompt("ta toogoo oruulna uu");
let count = 0;
let result = "";
let count1 = 1;

if(a.length < 4 && a.length >= 1) {
    while(count1 <= a) {
        count = count + count1
        result += count + " ";
    }
    console.log(result);
} else {
    alert("3 orontoi too bichne uu")
}