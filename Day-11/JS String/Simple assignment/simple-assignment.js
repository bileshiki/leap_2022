console.log("Exercise simple assignment");

// 1
let firstName = "Bilguun";
let lastName = "Erdenekhuu";


if (firstName.length > lastName.length) {
    console.log("Ner ni uert baina")

} else {
    console.log("Owog ni urt baina")
}

// 2
let a = "TOM VSEG";
console.log(a.toLocaleLowerCase());

// 3
let b = "tom useg";
console.log(b.toLocaleUpperCase());

//4
let pine = "Pinecone academy";
let leap = "leap хөтөлбөрт  тавтай морилго уу?"
let full = pine.concat(" ", leap);
console.log(full);

//5
let firstName2 = "Bilguun";
let lastName2 = "Erdenekhuu";
let age = "27"
let country = "Mongol";
let city = "Ulaanbaatar";
let job = "suraltsdag";

let uguulber = `Bi ${lastName2} owogtoi ${firstName2} ${age} nastai ${country} ${city} ${job} `;
console.log(uguulber);

//6
let a2 = "1 2 3 4 5";
let b2 = "2 3 4 5 1";
let c2 = "3 4 5 1 2";
let d2 = "4 5 1 2 3";
let e2 = "5 1 2 3 4";

let f2 = `${a2}\n${b2}\n${c2}\n${d2}\n${e2}`;

console.log(f2);