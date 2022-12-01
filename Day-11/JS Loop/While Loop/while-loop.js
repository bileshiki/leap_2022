// 1. 10 хүртэлх натурал тоог хэвлэх программ бич
let count = 0;
let result = "";

while (count <= 10) {
   result += count + " ";
   count ++
}

console.log(result);

// 2. 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич
let count1 = 0;
let result1 = "";

while (count1 <=10) {
    if (count1 % 2 == 1) {
        result1 += count1 + " ";
    }
    count1 ++;
}

console.log(result1);

// 3. 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич
let count2 = 0;
let result2 = "";

while (count2 <= 10) {
    if (count2 % 2 == 0) {
        result2 += count2 + " ";
    }
    count2 ++;
}

console.log(result2);

// 4. 100 хүртэлх натурал тооны нийлбэрийг олох программ бич
let count3 = 0;
let result3 = "";

while (count3 <= 100) {
    result3 += count3 + " ";
    count3 ++;
}

console.log(result3);

// 5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич
let i = prompt("ta toogoo oruulna uu");
let count4 = 0;
let result4 = "";
let count5 = 1;

if(i.length < 4 && i.length > 1) {
    while(count5 <= i) {
        count4 = count4 + count5;
        result4 += count4 + " ";
        count5 = count5 + 1;
    }
    console.log(result4);
} else {
    alert("3 orontoi too bichne uu");
}

// 6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич