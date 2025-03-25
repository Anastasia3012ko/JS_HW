const block = document.createElement('div')
block.setAttribute('style','padding: 20px; width: 30%')
const header = document.createElement('h1')
header.textContent = '!!!!!!Javascript!!!!!'
header.classList.add('heading')
document.querySelector('body').append(block)
const text = document.createElement('p')
text.textContent = 'frontend development'
block.append(header,text)
