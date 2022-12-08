let person = [{
    firstName: "Bilguun",
    "last name": "Erdenekhuu",
    age: 20,
    eyecolor: "black",
    phone: [9, 2, 2, 2],
    address : [
        {
        country: "Mongolia",
        city: "UB",
        district: "BZD",
        },
        {
            country: "Mongolia",
        city: "UB",
        district: "SKD",
        },
];
    getPersonInfo: function () {
        console.log(" " + this.firstName + "\n" + this["last name"] + "\n" + this.address.city
        );
    },
};
console.log(person);

console.log(person.firstName);
console.log(person["last name"]);
console.log(person["age"]);
console.log(person["eyecolor"]);
console.log(person.phone);
console.log(person.address.country);

person.getPersonInfo();

for (let i = 0; i <= person.address.length - 1; i++) {
    console.log(person.address[i].country);
}]