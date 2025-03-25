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

addButton.style.display = 'none'

function getElement(array) {
    
    array.forEach(item => {
        const li =  document.createElement('li')
        const text = document.createElement('p')
        const del = document.createElement('button')
        li.classList.add('li')
        li.style.backgroundColor = getRandomColor(238,173,241,178,218,212)
        text.classList.add('text')
        del.classList.add('button')
        text.textContent = item
        del.textContent = 'delete'
        li.append(text,del)
        list.appendChild(li)
        del.addEventListener ('click', ()=> {
            if(li.parentNode === list){
                list.removeChild(li)
            }
        })
    })
    
}
getElement(europeanCountries)

function getRandomColor(minR,maxR,minG,maxG,minB,maxB) {
    const r = Math.floor(Math.random() * (maxR - minR +1)) + minR
    const g = Math.floor(Math.random() * (maxG - minG +1)) + minG
    const b = Math.floor(Math.random() * (maxB - minB +1)) + minB
    return `rgb(${r},${g},${b})`
}



