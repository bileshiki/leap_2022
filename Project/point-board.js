let firstName = document.getElementsByClassName ("firstName");
let lastName = document.getElementsByClassName("lastName");
let gender= document.getElementsByClassName("gender");
let point = document.getElementsByClassName("point");
let sBtn = document.getElementById("btn");
let lists = document.getElementsByClassName("lists");
let fivePoint = document.getElementsByClassName("fivePoint");
let del = document.getElementsByClassName("del");
let arrList = [];

function submitBtn(event) {
    event.preventDefault();
    let gen;
        if (gender.value == "1") {
             gen = "Эрэгтэй";
        } else if (gender.value == "2") {
             gen = "Эмэгтэй";
        }
    let listItem = {firstName: firstName.value,
                    lastName: lastName.value,
                    gender: gen,
                    point: point.value,
                    }
    arrList.push(listItem);
    console.log(arrList);
    reload();
}

sBtn.EventListener("click", submitBtn);
function reload() {
    let row = ""
    for (let i = 0; i < arrList.length; i++) {
        row +=  ` 
        <div>
            <div>
                ${arrList[i].firstName}
                ${arrList[i].lastName}
                ${arrList[i].gender}
                <div class="point">
                ${arrList[i].point}
                </div>
            </div>
            <a class="addPoint"Add 5 point/>
        </div>`
    }  
    lists.innerHTML = row
}