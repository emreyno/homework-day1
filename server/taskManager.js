const { v4: uuidv4 } = require('uuid');

let todos = []

module.exports = {
  getTodos: () => {
    return todos;
  },
  addTodos: (todo) => {
    const newTodo = {
      ...todo,
      id: uuidv4(),
      completed: false
    }
    todos = [ newTodo, ...todos ]
    return newTodo;
  },
  completeTodo: (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    todos[index].completed = true
    return todos;
  },
  removeTodo: (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);
    return todos;
  },
  clearTodos: () =>{
    todos = []
    return todos;
  }
}