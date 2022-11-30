// 1-r dasgal

let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; //true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false

console.log(i, iii, ii, iv, v, vi, vii, iix, ix, x, xi);

// 2-r dasgal

let one = 4 > 3 && 10 < 12; //true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; //true
let five = !(4 > 3); //false
let six = !(4 < 3); //true
let eight = !(4 > 3 && 10 < 12); //false
let nine = !(4 > 3 && 10 > 12); //true
let ten = !(4 === "4"); //true

console.log(one, two, three, four, five, six, eight, nine, ten);

// 3-r dasgal

let myAge = prompt("оруулна уу");
let yourAge = prompt("Насаа оруулна уу");

if (myAge >= yourAge) {
    console.log("Би");
} else {
    console.log("Та");
}

// 4-r dasgal

let monday = "Monday";
let tuesday = "Tuesday";
let wednesday = "Wednesday";
let saturday = "Saturday";
let today = "Wednesday"

if (monday==today) {
    console.log("unuudur 1 deh udur")
}  
else if (tuesday==today) {
    console.log("unuudur 2 doh udur")
}
else if (wednesday==today) {
    console.log("unuudur ajliin udur");
}
else if (saturday==today) {
    console.log("unuudur amraltiin udur");
}

// 5-r dasgal

let hours = 40;
let ratePerHour = 28;
let enterHours = prompt("Та ажилласан цагаа оруулна уу");
let salary = enterHours * ratePerHour;

if (enterHours <= hours) {
    console.log("Таны ажилласан цаг " + enterHours, "Таны бодогдсон цалин " + salary);
}