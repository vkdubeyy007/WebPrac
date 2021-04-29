// 1. ways to print in java Script  
// document.write("hello world in doc")
// console.log("hello world")
//  alert("me")

// 2. javascript.console.API
// console.log("hello world",4+6,"another log");
// console.warn("this is warning");
// console.error("this is an error");

// 3. javascript container 
// what are variable - container store values

var number1 = 34;
var number2 = 56;
//  console.log(number1 + number2);

//  4. data types in javascript

// numbers
var num1 = 455;
var num2 = 56.76;

// string
var str1 = "this is a string"
var str2 = 'this is also a string'

//  objects
var marks = {
       ravi: 34,
       shubham: 56,
       harry: 99.99
}

// console.log(marks);

// booleans
var a = true;
var b = false;
// console.log(a,b);

// undefined
var und = undefined;
var und;
// console.log(und);

// null
var n = null;
// console.log(n);

// at a very high level, there are two types of data types in 
// javascript:
// 1. primitive data types: undefined, null, number, string, boolean, symbol.
// 2. reference data types: arrays & objects

// arrays
var arr = [1, 2, 3, "vaibhav", 4, 5]
// console.log(arr);      
// console.log(arr[0]);    to target the element in array 
// console.log(arr[1]);    the counting of element in array starts from 0 
// console.log(arr[4]);    0 is the starting index num

// operators in javascript :
// arithmetic operators
var a = 12;
var b = 13;
// console.log("the value of a + b is", a+b)
// console.log("the value of a - b is", a-b)
// console.log("the value of a / b is", a/b)
// console.log("the value of a * b is", a*b)


// assignment operators
var c = b;
c += 2;
c *= 2;
c /= 2;
// console.log("c =",c);


// comparison operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);


// logical operators: AND
/*
console.log(true&&true);
console.log(true&&false);
console.log(false&&false);
*/


// logical operators: NOT 
/*
console.log( ! true);
console.log( ! false);
*/


// function in js:
// DRY PRINCIPLE = DO NOT REPEAT YPURSELF !!!
function avg(a, b) {
       c = (a + b) / 2;
       return c;
}

c1 = avg(4, 6);
c2 = avg(15, 30);
// console.log(c1,c2);


// conditionals in javascript :
var age = 41;

// single if statement ------
if (age > 18) {
       // console.log('you can drink rasna water');
}

// if-else statement ---------
if (age > 18) {
       // console.log('you can drink rasna water');
}
else {
       // console.log('you cannot drink rasna water');
}

// if-else ladder======
var age = 31;
if (age > 32) {
       // console.log('you are not a kid');
}
else if (age > 26) {
       // console.log('bache nai rahe');
}
else if (age > 22) {
       // console.log(' yesbache nai rahe');
}
else if (age > 18) {
       // console.log('bache nai rahe');
}
else {
       // console.log('bache rahe');
}
// console.log('end of ladder')

// looping statement :------------
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);

for (var i = 0; i < arr.length; i++) {
       if (i == 2) {
              break;
              continue;
       }
       // console.log(arr[i])
}

arr.forEach(function (element) {
       // connsole.log(element);
})


// const ac = 0; this value will never be overwriden.
// ac++;

let j = 0;
while (j < arr.length) {
       // console.log(arr[j]);
       j++;
}

do {
       // console.log(arr[j]);
       j++;
} while (j < arr.length);

// array methods --------
let myarr = ["fan", "camera",34,null,true ];
// console.log(arr.length);
// myarr.push('vaibhav');
// myarr.pop();
// myarr.shift();
// const newlen = myarr.unshift('vaibhav');
// console.log(newlen);
// console.log(myarr);

// string methods in javascript :---------
let mylovelystring = "vaibhav is a good boy good good vaibhav";
// console.log(mylovelystring.length);
//  console.log(mylovelystring.indexOf ("good"))
//  console.log(mylovelystring.lastIndexOf ("good"));
//  console.log(mylovelystring.slice(1,4));

d = mylovelystring.replace("vaibhav", "rohan");
d = mylovelystring.replace("good", "bad");
//  console.log(d,mylovelystring)

// date method--------
let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getHours());

// DOM manipulation : document-object-model-----------
let elem = document.getElementById("click");
// console.log(elem);
let elemclass = document.getElementsByClassName("container");
// console.log(elemclass);
// elemclass[0].style.background = "yellow"; ===add style by this 
// elemclass[0].classList.add("bg-primary")  =====add class in html doc
// elemclass[0].classList.add("text-sucess")
//  elemclass[0].classlist.remove("text-sucess") ======remove class from html doc
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemclass[0].innerText);
// console.log(elemclass[0].innerHTML);
tn = document.getElementsByTagName('div')
// console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "this is created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "this is created bold";
tn[0].replaceChild(createdElement2,createdElement);
// removeChild(element); ----> removes an element

/* write in console panel 
document.title
document.URL
document.scripts
document.images
document.link
document.forms
document.domain
*/

// selecting using query 
sel = document.querySelector('.container')
// console.log(sel)
sel = document.querySelectorAll('.container')
// console.log(sel)

//------ events in javascript-----
// function clicked(){
//     console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')

// }
// Events in JavaScript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Mouse down when clicked on Container");
// })

// -------making function in two ways: the new way is arrow function::-------
// function summ(a,b){
       // return a+b;
// }

// summ = (a,b)=>{
       // return a+b;
// }

// -------settimeout and setinterval -------
logkaro = ()=>{
       // console.log("i am your log");
}
// setTimeout(logkaro,2000);
// clr=setInterval(logkaro,2000);

// use clearInterval(clr)/clearTimeout(clr) to cancel the setInterval/setTimeout

// ------javascript localStorage------
/*
localStorage.setItem('name','vaibhav')
localStorage
localStorage.getItem('name')
localstorage.removeitem('name')
localstorage.clear();
*/

// // ------JSON in JS------
// Obj = {name: "vaibhav", length:1, a:{this:"that"}}
// jso = JSON.stringify(Obj);
// console.log(jso)
// parsed = JSON.parse(`{"name": "vaibhav", "length":1, "a":{"this":"that"}}`)
// console.log(parsed);

// template literals backticks 
a=34;
// console.log(`this is my ${a}`)














































