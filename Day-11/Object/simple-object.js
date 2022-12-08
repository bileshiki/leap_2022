let Dog = {
    breeds: "Golden Retriever",
    nickName: "Bruno",
    color: "Cream",
    age: 7,
    feature: "Cute",
    getPrint: function () {
        console.log(this.nickName + "\n" + this.color + "\n" + this.age +"\n" + this.feature);
    }
}
console.log(Dog);

Dog.getPrint();
