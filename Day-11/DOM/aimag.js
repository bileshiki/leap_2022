// 1. Хамгийн эхний li элементийг аван утгыг console.log дээр хэвлэх.
let ulEl = document.getElementsByTagName("ul");

console.log(ulEl);
console.log(ulEl[0].firstElementChild);

// 2.Хамгийн сүүлийн li элементийг аван утгыг console.log дээр хэвлэх.
console.log(ulEl[0].lastElementChild);

// 3. Сүхбаатар аймгийг элементийн id-аар аван console.log дээр хэвлэх
console.log(document.getElementById("aimag-315"));

// 3. Тухайн жагсаалтын элементүүдэд загвар оруулах (текстийн фонт, хэмжээ, текстийн өнгө, хүрээ, padding, margin).
console.log(document.getElementById("aimag-101").style.color = "green");
console.log(document.getElementById("aimag-101").style.border = "1px solid green");
console.log(document.getElementById("aimag-101").style.padding = "20px");
console.log(document.getElementById("aimag-101").style.margin = "10px");
console.log(document.getElementById("aimag-101").style.borderRadius = "20px");
console.log(document.getElementById("aimag-101").style.fontSize = "24px");

// 4. Аймгуудыг бүс, бүсээр ялган өөр, өөр background color  өгөх  
// (1 - Хангайн бүс, 2 - Баруун бүс, 3 - Зүүн бүс, 4 - Төвийн бүс, 5 - Улаанбаатар )
//  Жишээ нь id = aimag-321 ийм байгаа 3 нь бүсийн дугаар, 21 нь аймгийн дугаар юм.
