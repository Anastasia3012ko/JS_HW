const form = document.querySelector('.inputForm')
const enter = document.querySelector('.enter')
const error = document.querySelector('.error')

form.addEventListener('submit', (e) => {
    (e).preventDefault();
    if(document.querySelector('.login').value.toLowerCase() === 'anastasia' && document.querySelector('.password').value === 'kolobova') {
        enter.style.display = 'block';
      } else  error.style.display = 'block'
    form.reset()
})

form.addEventListener('input',(e) => {
  enter.style.display = 'none';
  error.style.display = 'none';
})