let input = document.getElementById('input')
let button = document.getElementById('btn')
let result = document.getElementById('result')
let total = document.getElementById('total')
let count = 0


button.addEventListener('click', () => {
  if (input.value === '') return
  createDeleteButton(input.value)
  input.value = ''
  updateTotal()
})


function createDeleteButton(value) {
  console.log(value)


  const btn = document.createElement('button')
  const deleteButton = document.createElement('button')
  const li = document.createElement('li')

  li.className = 'li'
  li.textContent = value

  btn.className = 'btn'
  btn.textContent = 'done'
  li.append(btn)

  deleteButton.textContent = 'delete'
  li.append(deleteButton)

  btn.addEventListener('click', () => {
    li.classList.toggle('done')
  })

  deleteButton.addEventListener('click', () => {
    result.removeChild(li)
    count--
    updateTotal()
  })
  count++
  updateTotal()
  result.appendChild(li)
}


fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(todos => {
    todos.slice(0, 11).forEach(todo => {
      createDeleteButton(todo.title)
    });
  })

function updateTotal() {
  total.textContent = `${count}`
}