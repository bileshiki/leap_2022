// 1. Ангийнхаа сурагчидын дата үүсгэ. (name: "Гончигсумлай", birthOfYear: 1999, hobby: "морь", single: false)
function myFunction() {
    let students = [
    {   name:   "Gonchigsumlai", 
        birthYear : 1999,
        hobby : "Horse",
        single : false
    },
    {   name: "Taaldaa",
        birthYear : 2000,
        hobby : "sleep",
        single : true
    },
    {   name: "Darga",
        birthYear : 2004,
        hobby : "sing",
        single : false
    },
    {   name: "Huslen",
        birthYear : 2002,
        hobby : "soccer",
        single : false
    },
    {   name:  "Orgil", 
        birthYear : 2002,
        hobby : "sleep",
        single : false
    },
    {   name: "Amaraa2",
        birthYear : 2005,
        hobby : "watching anime",
        single : true
    },
    {   name: "Manlai",
        birthYear : 1999,
        hobby : "playing ukulele",
        single : true
    },
    {   name: "Byamba",
        birthYear : 1990,
        hobby : "accounting",
        single : false
    },
    {   name: "Taami",
        birthYear : 1999,
        hobby : "playing dota",
        single : false
    },
    {   name: "Ganzoo",
        birthYear : 2004,
        hobby : "watching anime",
        single : true
    },
    {   name: "Daria",
        birthYear : 2004,
        hobby : "reading",
        single : true
    },
    {   name: "jack",
        birthYear : 1999,
        hobby : "chase",
        single : false
    },
    {   name: "bebe",
        birthYear : 2004,
        hobby : "sportmen ",
        single : true 
    },
    {   name: "Amaraa1",
        birthYear : 1994,
        hobby : "making money",
        single : false
    },
    {   name: "Dulguun",
        birthYear : 1997,
        hobby : "singing ",
        single : false
    },
    {   name: "Naadoo",
        birthYear : 1997,
        hobby : "reading book",
        single : true 
    },
    {   name: "Bilguun",
        birthYear : 1995,
        hobby : "taking pic",
        single : false
    },
    {   name: "Muugii",
        birthYear : 1997,
        hobby : "soccer",
        single : true
    },
    {   name: "Oochka",
        birthYear : 1997,
        hobby : "sleeping",
        single : false
    },
    {   name: "Taivanaa",
        birthYear : 2003,
        hobby : "drawing",
        single : true
    },
    {   name: "Niko",
        birthYear : 1993,
        hobby : "playing com game",
        single : false
    },
];
    console.log(students); 

// 2. Сурагчидаас 20 - оос дээш насны сурагчидыг буцаах function бичэх.
console.log("\n" + "20-оос дээш насны сурагчид" + "\n" + "\n");
function ageUp() {
    for (let i = 0; i <= students.length -1; i++) {
        if (students[i].birthYear <= 2000) {
         let age = 2022 - students[i].birthYear;
         console.log(students[i].name + " " + age + "настай");
        }
     };
}
ageUp();


// 3. Сурагчийн насыг бодож олох function бичэх.
console.log("\n" + "Бүх сурагчдын нас" + "\n" + "\n");
function ageUpp() {
    for (let i = 0; i <= students.length -1; i++) {
        if (students[i].birthYear <= 2022) {
         let age = 2022 - students[i].birthYear;
         console.log(students[i].name + " " + age + "настай");
        };
     };
};
ageUpp();


// 4. Сурагчидын ганц бие хүмүүсийг буцаах function бичэх.
console.log("\n" + "Ганц бие хүмүүс" + "\n" + "\n");
function relationship() {
    for (let i = 0; i <= students.length -1; i++) {
        if (students[i].single == true) { 
            console.log(students[i].name);
        };
    };
};
relationship();
}
myFunction();