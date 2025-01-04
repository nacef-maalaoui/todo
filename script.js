

function add(){
    let todo = document.getElementById('todo').value
    let items = document.getElementById('items')
    let li = document.createElement('li')
    li.textContent=todo
    items.appendChild(li)
}