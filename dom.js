let headerTitle = document.getElementById("header-title")
let mainHeader = document.getElementById("main-header")
let addItem = document.getElementById("add-item")

headerTitle.innerHTML = "<h3>Hello</h3>"

mainHeader.style.borderBottom = "solid 3px #000"

addItem.style.fontWeight= "bold"
addItem.style.color = "green"

let items = document.getElementsByClassName("list-group-item")
items[2].style.backgroundColor = "green"

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = "bold"
}