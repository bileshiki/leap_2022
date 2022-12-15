let mainEle = document.getElementById("main");

let sectionDiv1 = document.getElementById("section1");
let sectionDiv2 = document.getElementById("section2");

let title = document.createElement("h1");

title.style.color = "orange";
title.style.textAlign = "center";
title.innerHTML = "Todo List App";

sectionDiv1.appendChild(title);

let subDiv = document.createElement("div");
subDiv.id = "addTask";
subDiv.style.display = "flex";

let input = document.createElement("input");

input.id = "inputTask";
input.style.borderBottom = "1px solid orange";
input.style.border = "none"
input.style.backgroundColor = "white";
input.placeholder = "Та таскаа оруулна уу.";
input.style.width = "30rem";

let btn = document.createElement("button");

btn.style.padding = "15px";
btn.style.backgroundColor = "orange";
btn.style.color = "white";
btn.innerHTML = "Нэмэх";
btn.style.border = "none"

// btn click



subDiv.appendChild(input);
subDiv.appendChild(btn);

sectionDiv1.appendChild(subDiv);

let listTitle = document.createElement("h1");

listTitle.style.color = "orange";
listTitle.style.textAlign = "center";
listTitle.innerHTML = "List";

let subDiv2 = document.createElement("div");

subDiv2.id = "tasks";

sectionDiv2.appendChild(listTitle);
sectionDiv2.appendChild(subDiv2);

// fnAddTask

function fnAddTask () {
    let aDiv = document.createElement("div");
    aDiv.style.display = "flex";
    aDiv.style.justifyContent = "space-between";

}