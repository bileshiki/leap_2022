// To Do List title
let container = document.getElementById("container")
let listHead = document.getElementById("listHead")
let listBody = document.getElementById("listBody")
let headTitle = document.createElement("h1")
headTitle.innerHTML = "Todo List App"
listHead.appendChild(headTitle)

// TIME
// function currentTime() {
//     let date = new Date();
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();
//     let session = "PM";

//     if (hh == 0) {
//         hh = 12;
//     }


//     if (hh > 12) {
//     hh = hh - 12;
//     session = "AM"
//     }
//     hh = (hh < 10) ? "0" + hh : hh;
//     mm = (mm < 10) ? "0" + mm : mm;
//     ss = (ss < 10) ? "0" + ss : ss;

//     let time = hh + ":" + mm + ":" + ss + " " + session;

//     document.getElementById("listHead").innerText = time;

//     let t = setTimeout(function () {
//         currentTime() }, 1000);
//     }

//     currentTime();

// INPUT
let input = document.createElement("input")
listHead.appendChild(input);

let btn = document.createElement("button")
btn.innerHTML = "Нэмэх"
listHead.appendChild(btn);
btn.addEventListener("click", plus)
function plus() {
    let value = document.getElementsByTagName("input")[0].value
    console.log(value);
   
}

// LIST title
let list = document.getElementById("listBody")
let listTit = document.createElement("h1")
listTit.innerHTML = "Жагсаалт <hr>" 

function plus() {
    let value = document.getElementsByTagName("input")[0].value
    console.log(value);
    document.getElementById("listBody").innerHTML = value;
}

// listP.innerText = document.getElementsByTagName("input").value
list.appendChild(listTit)
// list.appendChild(listP)

// LIST checklist
// let li = document.getElementsByTagName("input").value
// document.getElemen("p").innerHTML = li
