
let list = document.getElementById("list"); // получим id
let newLi = document.createElement("li");// создадим тег
newLi.innerHTML = "ddd!";
list.appendChild(newLi);

list.setAttribute("title", "My title"); // добавим атрибут.

var class_value = list.getAttribute("My");

//--------------------------------------------------------
var elem = document.querySelector("#list");
// Выведем классы
console.log(elem.classList); // DOMTokenList ["example", "for", "you"]
// Добавим классы
elem.classList.add("ok", "understand");
console.log(elem.classList);                              // DOMTokenList ["example", "for", "you", "ok", "understand"]
// Переключим классы
elem.classList.toggle("you");
elem.classList.toggle("he");
console.log(elem.classList);                              // DOMTokenList ["example", "for", "ok", "understand", "he"]
// Проверим класс
console.log(elem.classList.contains("example")); // true
console.log(elem.classList.contains("lol"));           // false
// И удалим классы
elem.classList.remove("example", "for", "understand", "he");
console.log(elem.classList);                               // DOMTokenList ["ok"]

const arr = [];
arr.push('zero');
arr.push('one',2);
let arrAll;
for (var i = 0; i < arr.length; i++) {
    arrAll += arr[i]+ "<br>";
}
document.write(arrAll);