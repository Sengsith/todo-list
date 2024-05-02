const todosHandler = (() => {
  const todos = [];

  const getTodos = () => todos;

  const addTodo = (todo) => todos.push(todo);

  const removeTodo = (index) => todos.splice(index, 1);

  return { getTodos, addTodo, removeTodo };
})();

export default todosHandler;

// Create a project factory
// what if we just change todosHandler into projectFactory
// project name
// still has todos array
// still give todos
// still add todo
// still remove todo
