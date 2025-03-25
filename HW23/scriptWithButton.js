const list = document.querySelector('.list')
const addButton = document.querySelector('.btn')
const europeanCountries = [
    'Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus', 'Belgium', 'Bosnia and Herzegovina',
    'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia',
    'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Kazakhstan', 'Kosovo', 'Latvia', 'Liechtenstein',
    'Lithuania', 'Luxembourg', 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'North Macedonia',
    'Norway', 'Poland', 'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia', 'Slovenia', 'Spain',
    'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Vatican City'
];
let index = 0

addButton.addEventListener('click', ()=> getElement(europeanCountries))

function getElement(array) {
    
    if (index < array.length) {
        const li =  document.createElement('li')
        const text = document.createElement('p')
        const del = document.createElement('button')
        li.classList.add('li')
        li.style.backgroundColor = getRandomColor(180,45,235,170,230,158)
        text.classList.add('text')
        del.classList.add('button')
        text.textContent = array[index]
        del.textContent = 'delete'
        li.append(text,del)
        list.appendChild(li)
        index++ 
        
        del.addEventListener ('click', ()=> {
            if(li.parentNode === list){
                list.removeChild(li)
            }
           
        })

        
    }else alert('All possible elements have already been added!')
    
}

function getRandomColor(minR,maxR,minG,maxG,minB,maxB) {
    const r = Math.floor(Math.random() * (maxR - minR +1)) + minR
    const g = Math.floor(Math.random() * (maxG - minG +1)) + minG
    const b = Math.floor(Math.random() * (maxB - minB +1)) + minB
    return `rgb(${r},${g},${b})`
}