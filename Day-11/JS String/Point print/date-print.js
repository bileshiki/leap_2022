// 1-r dasgal
console.log("Exercise date print");

let year = prompt("Enter year!");
let month = prompt("Enter month!");
let month2;
let day = prompt("Enter day!");
let day2;

// Year
if (year.length == 4 && year >= 2000 && year <= 2022) {
     
} else {
    alert("Enter correct year")
}

// Month
if (month.length == 2 && month >= 1 && month <= 12) {
    month2=month
} else if (month.length == 1 && month >= 1 && month <= 12) {
    month2 = "0" + month
} else {
    alert("Invalid month number");
}

// Day

if (day.length == 2 && day <=31 && day >= 1) {
    day2 = day
} else if (day.length == 1 && day <= 31 && day >= 1) {
    day2 = "0" + day
} else {
    alert("Invalid day number");
}

console.log(year + "-" + month2 + "-" + day2);

// 2-r dasgal
console.log("Exercise phone number");

let phoneNumber = prompt("Ta dugaaraa oruulna uu");
let phoneNumber2 = phoneNumber.substring(0, 2);

if (phoneNumber.length == 8) {
    if(phoneNumber2 == 99 || phoneNumber2 == 95 || phoneNumber2 == 85 || phoneNumber2 == 94) {
        console.log(phoneNumber2 + " Mobicom");
    } else if (phoneNumber2 == 80 || phoneNumber2 == 86 || phoneNumber2 == 88 || phoneNumber2 == 89) {
        console.log(phoneNumber2 + " Unitel");
    } else if (phoneNumber2 == 90 || phoneNumber2 == 91 || phoneNumber2 == 96) {
        console.log(phoneNumber2 + " Skytel");
    } else if (phoneNumber == 83 || phoneNumber2 == 93 || phoneNumber2 == 97 || phoneNumber2 == 98) {
        console.log(phoneNumber2 + " G-Mobile");
    } else {
        alert("Tanii ehnii 2 oron buruu baina");
    }
    } else {
        alert("Ta dugaaraa zuw oruulna uu")
    }

