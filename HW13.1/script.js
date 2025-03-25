const note = document.querySelector('.note')
const lastNote = document.querySelector('.lastNote')
const form = document.querySelector('form')
const notEntered = document.createElement('p')
notEntered.textContent = 'Note not entered!'
notEntered.setAttribute('style','color: red; font-weight:bolder; font-style:italic')

document.querySelector('.btn').addEventListener('click', e => {
    e.preventDefault()
    if(note.value !== ''){
        const notes = JSON.parse(localStorage.getItem('notes')) || []
        notes.push(note.value.trim())
        localStorage.setItem('notes', JSON.stringify(notes))
        lastNote.textContent = note.value
    }else { 
        form.append(notEntered)
    }  
    note.value = ''
})
form.addEventListener('input', () => {
   form.removeChild(notEntered)
})

document.addEventListener('DOMContentLoaded',() =>{
    const last = JSON.parse(localStorage.getItem('notes'))
    lastNote.textContent = last[last.length-1]
})

