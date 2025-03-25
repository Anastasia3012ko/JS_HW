//1

const block = document.createElement('div');
block.setAttribute('style','background-color: blue; width: 40%; height: 30vh; transition: 0.8s ease; margin:10px');
block.addEventListener('mouseover', (e) => block.style.background = 'red')
block.addEventListener('mouseout', (e) => block.style.background = 'blue')

//2

const blockTwo = document.createElement('div');
const button = document.createElement('button')
blockTwo.setAttribute('style','background-color: aqua; width: 40%; height: 30vh; transition: 0.8s ease; margin:10px');
button.setAttribute('style','margin:10px; padding:20px; width:40%; border:none;border-radius: 30px; background-color:pink')
button.innerText = 'Click';
document.body.append(block,blockTwo, button);
button.addEventListener('click', (e) => blockTwo.style.background = randomColor())

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

