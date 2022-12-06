// 1. Нийт төлбөр ийг олдог 1 function.
let n = parseInt(prompt("Enter your meal bill please"));

function billSum(n) {
    if (n >= 5000  && n <= 30000) {
        return n * 1.15
    } else {
        return n * 1.2
    }
}
console.log("Total bill ", billSum(n));

// 2. Зөвхөн нэмэгдэл төлбөрийг олдог 1 function.
function addBill(n) {
    if (5000 <= n && n <= 30000) {
        return n * 0.15
    } else {
        return n * 0.2
    }
}
console.log("Added bill is ", addBill(n));

// 3. Нийт төлбөрийн дундаж - ийг олдог 1 function.
let bills = [3000, 27500, 100000]
let average = 0;
for (i = 0; i < bills.length; i++) {
    average += billSum(bills[i]) //billSum function oruulj irsneer tutaih bills deh toog 1.15 1.20 urjuulne gsen urga oruulsan.
}
console.log("Average is ", average/bills.length); // tuhain 3 toonii niit 1.15 1.2 urjiilsen niilberiig niit bilss urt buyu 3t huwaaj bn.
