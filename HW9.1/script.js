const list = document.querySelector('.list');
const counter = list.querySelectorAll('.city').length;
console.log('длина списка: ' + counter)
if(counter == 4){
    let add = document.createElement('li');
    add.textContent = 'replaced Moskau by St.petersburg';
    list.replaceChild(add,list.lastElementChild)
}


const text = document.querySelector('.text');
 
let cloneTwo = text.cloneNode(true)
document.body.append(cloneTwo)
    
const clone =  text.innerHTML
document.body.append(clone)    
    console.log(clone)

