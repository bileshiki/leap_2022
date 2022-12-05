// Arrey - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google,
//  Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу. 

// console.log() ашиглан array хэвлэх
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies);

// Array дахь компаниудын length хэвлэх
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].length);
    
}

// Эхний компани, дунд болон сүүлчийн компанийг хэвлэх
// let i = 0; 
// while (i < itCompanies.leng) {
//     console.log(itCompanies[i][0]);
// }
// console.log(itCompanies[itCompanies.length - 1], "First element");
// for(let i = 1; i < itCompanies.length; i++) {
//     for(let j = -1; j < itCompanies.length -1; j++) {
//         itCompanies = i == j;
//         console.log(itCompanies[i] [j]);
//     }
//             console.log(itCompanies[i] [j]);
//         }
//         console.log(itCompanies);

// Компани бүрийг хэвлэх
let i = 0 
let j = "";
while (i < itCompanies.length) {
    j += itCompanies[i] + " ";
    i++;
}
console.log(j);
// Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга

// Array - г өгүүлбэр болгон хэвлэ: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon 
// зэрэг мэдээллийн технологийн томоохон компаниуд.
let uguulber = `${itCompanies}\nзэрэг мэдээллийн технологийн томоохон компаниуд.`;
console.log(uguulber);
