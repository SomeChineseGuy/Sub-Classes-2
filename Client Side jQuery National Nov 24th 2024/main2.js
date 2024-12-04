console.log(myName)
const newName = 'Sarah'


const box = document.getElementById('box')
console.log(box)

// javascript in the front end can basic CRUD HTML  and CSS

box.addEventListener('click', () => {
  const newTag = document.createElement('p');
  box.appendChild(newTag)
})