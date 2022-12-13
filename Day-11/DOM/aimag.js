// 1. Хамгийн эхний li элементийг аван утгыг console.log дээр хэвлэх.
function myFunction() {
    let firstLi = Document.querySelecterAll("li")[1];
    let list = [];
    for (let i = 0; i < firstLi.children.length; i++) {
        let element = firstLi.children[i];
        if(element.tagName === "LI")
        list.push(element);
    }
    return list;
}
myFunction();