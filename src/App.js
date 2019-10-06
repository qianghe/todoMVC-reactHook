import React from 'react';
import TodoHeader from "./components/header";
import TodoContent from "./components/content";
import TotoFooter from './components/footer'
import useTodos from './components/todos'
import './App.css'

function App() {
  const {
    add: addTodo,
    toggle: toggleTodo,
    todos
  } = useTodos();
  return (
    <div className="todo">
      <h1>TODO MVC use react hook</h1>
      <TodoHeader add={addTodo} />
      <TodoContent todos={todos} toggle={toggleTodo} />
      <TotoFooter todos={todos} />
    </div>
  );
}


export default App
