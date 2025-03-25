const div = document.createElement('div')
div.setAttribute('style','width: 30%; height: 300px; background-color:blue; border-radius:30px')
document.querySelector('body').append(div)



 function changeColors(element,times){
    const colors = ['#ff0000', '#00ff00', '#0000ff']
    let count = 0
    const interval = setInterval(()=> {
    const randomColor = randomIndex = Math.floor(Math.random() * colors.length)    
    element.style.backgroundColor = colors[randomColor]
    count ++  
if (count > times) {
    clearInterval(interval)
    alert('Change of color stopped!!!')
}

    },1000)
}
changeColors(div,10)