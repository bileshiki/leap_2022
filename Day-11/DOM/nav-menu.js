function myFunction() {
    let menus = [{id: 1, name: "Home", href: "https://google.com/"},
                 {id: 2, name: "Contact", href: "https://gogo.mn/"},
                 {id: 3, name: "News", href: "https://gogo.mn/i/3"},
                 {id: 4, name: "Watch", href: "https://gogo.mn/media"}]
                 console.log(menus);
    let ulEl = document.createElement("ul")
    console.log(ulEl);
    let mainEl = document.getElementById("navMenu")
    console.log(mainEl);
    for (let i = 0; i < menus.length; i++) {
        let liEl = document.createElement("li");
        console.log(liEl);
        let aEl = document.createElement("a");
        console.log(aEl);
        aEl.innerHTML = menus[i].name;
        aEl.href = menus[i].href;
        liEl.appendChild(aEl);
        ulEl.appendChild(liEl);
    }
    mainEl.appendChild(ulEl)
}
myFunction();