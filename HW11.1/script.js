let counter = 0;
document.querySelector('.btn').addEventListener('click', (e) => {
    counter++;
    document.querySelector('span').textContent = counter;
    if(counter%5 === 0) {
        document.querySelector('.block').style.background = randomColor();
        }
    if(counter === 10) {
        document.querySelector('.message').textContent = 'Поздравляем! Вы достигли 10 кликов!';
        }
    return
})
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}