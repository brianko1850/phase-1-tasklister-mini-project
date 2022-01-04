document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
     e.preventDefault()
     handleToDo(document.getElementById("new-task-description").value)
     form.reset()
  
    
   })
 });

  function handleToDo(todo) {
    let btn = document.createElement('button')
    let p = document.createElement('p')
    p.textContent = `${todo} `
    btn.textContent = "x"
    btn.addEventListener('click', handleDelete)
    document.querySelector('#tasks').appendChild(p)
    p.appendChild(btn)
  }

  function handleDelete(e) {
    e.target.parentNode.remove()
  }