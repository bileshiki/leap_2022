// let animal = [{
//     type: "dog",
//     sound: "woof",
//     // dogSound: function (){
//     //     console.log("What does the dog say?" + " " + this.sound);
//     // },
// },
// {
//     type: "cow",
//     sound: "moo",
//     // cowSound: function (){
//     //     console.log("What does the cow say?" + " " + this.sound);
//     // },
// },
// {
//     type: "cat",
//     sound: "meow",
//     // catSound: function (){
//     //     console.log("What does the cat say?" + " " + this.sound);
//     // },
// },
//    function allSounds() {
//         return 
//    }
// ]

function myFunction() {
    let animals = [{
        type: "dog",
        sound: "woof",  
    },
    {
        type: "cow",
        sound: "moo",
    },
    {
        type: "cat",
        sound: "meow",
    }]
    for(let i = 0; i <= animals.length -1; i++) {
        console.log("What does the" + 
        " " + animals[i].type + " " + "say?" + " "+ animals[i].sound);
    }
}
myFunction();