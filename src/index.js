import "./index.css";

import todoFactory from "./todo/todo";

const intializeHome = (() => {
  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "Todo bozo";

  const testTodo = todoFactory("Test");
  console.log(`Name: ${testTodo.getTaskName()}, Completed: ${testTodo.isCompleted()}`);

  content.appendChild(heading);
})();
