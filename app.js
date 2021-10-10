const addTodo = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input');


//task template
const createTodo = todo => {
    const newTodo =
    `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    todoList.innerHTML += newTodo;
};


//to create new tasks
addTodo.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addTodo.add.value;
    createTodo(todo);

});
