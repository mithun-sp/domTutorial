// let headerTitle = document.getElementById("header-title")
// let mainHeader = document.getElementById("main-header")
// let addItem = document.getElementById("add-item")

// headerTitle.innerHTML = "<h3>Hello</h3>"

// mainHeader.style.borderBottom = "solid 3px #000"

// addItem.style.fontWeight= "bold"
// addItem.style.color = "green"

// let items = document.getElementsByClassName("list-group-item")
// items[2].style.backgroundColor = "green"

// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight = "bold"
// }

// let li = document.getElementsByTagName("li")
// li[4].innerText = "Hello 5"

// //Query Selector
// let secondItem = document.querySelector(".list-group-item:nth-child(2)")
// secondItem.style.backgroundColor = "green"

// let thirdItem = document.querySelector(".list-group-item:nth-child(3)")
// thirdItem.style.display = "none"

// //Query Selectore All
// let titles = document.querySelectorAll(".title")
// console.log(titles)

// let odd = document.querySelectorAll(".li:nth-child(odd)")
// let even = document.querySelectorAll(".li:nth-child(even)")

// TRAVERSING THE DOM //

let itemList = document.querySelector("#items")
//parentNode
itemList.parentElement.style.backgroundColor = "#f4f4f4"

itemList.lastElementChild.textContent = "Hello World"
console.log(itemList.lastChild)

console.log(itemList.nextSibling)

itemList.previousElementSibling.style.color = "green"

let newDiv = document.createElement("div")

newDiv.className = "hello"
newDiv.id = "hello"

newDiv.setAttribute("title", "Hello Div")

let newDivText = document.createTextNode("Hello World")

newDiv.appendChild(newDivText)

let container = document.querySelector("header .container")
let h1 = document.querySelector("header h1")

container.insertBefore(newDiv,h1)

