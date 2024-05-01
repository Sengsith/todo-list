const todosHandler = (() => {
  const todos = [];

  const getTodos = () => todos;

  const addTodo = (todo) => todos.push(todo);

  return { getTodos, addTodo };
})();

export default todosHandler;
