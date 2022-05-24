const navLink = document.getElementById('nav');
navLink.href="http://yearup.org"
navLink.textContent = 'About YearUp'

//getElementById
const demoId = document.getElementById('demo');
demoId.innerHTML = "Got id";
demoId.style.border = '1px solid red';


//getElementsByClassName
const demoClass = document.getElementsByClassName('demos');
// demoClass[0].style.border = '2px dotted green'; // individual target

for(let x = 0; x < demoClass.length; x ++){
    demoClass[x].style.border = '2px dotted green'; 
}


// getElementsByTagName
const demoTags = document.getElementsByTagName('p');
for(let x = 0; x < demoTags.length; x ++){
    demoTags[x].textContent = 'chnaged all paragraph tags'; 
}

//querySelector
const mySelector = document.querySelector('#demo-query');
mySelector.style.backgroundColor = 'yellow';

//QuearySelectorAll
const qSAll = document.querySelectorAll('.demo-query-all');
for(let x = 0; x < qSAll.length; x ++){
    qSAll[x].style.backgroundColor = 'purple'; 
}


//global scope
//difiference between var , let and const
// var is function scoped - meaning they recognize functions as having a separate scope. This locally-scoped variable is therefore not accessible from the global scope.
//The new keywords let and const, however, are block-scoped. 
// This means that a new, local scope is created from any kind of block, including function blocks, if statements, and for and while loops.
// https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript

var animal = "human";
//function scopedToThisFunc(){
    if(true){
        var animal = "Monkey"; //  the local variable is function-scoped when we use var but block scoped when we use let and const.
        console.log(animal);
    }
//}

//scopedToThisFunc();
console.log(animal);




const changeText = () => {
    const p = document.querySelector('p');
    p.innerHTML = "it worked";
}

const button =  document.querySelector('button');
button.addEventListener('click', changeText);

// document.body.style.backgroundColor = 'pink';

