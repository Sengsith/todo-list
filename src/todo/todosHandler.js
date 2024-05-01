const todosHandler = (() => {
  const todos = [];

  const getTodos = () => todos;

  const addTodo = (todo) => todos.push(todo);

  const removeTodo = (index) => todos.splice(index, 1);

  return { getTodos, addTodo, removeTodo };
})();

export default todosHandler;
