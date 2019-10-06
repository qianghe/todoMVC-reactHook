import React from 'react';
import TodoHeader from "./components/header";
import TodoContent from "./components/content";
import TotoFooter from './components/footer'
import { STATUS_ALL_ITEMS } from './components/config/footer.config'
import useTodos from './hooks/todos'
import useStatus from './hooks/status'
import './App.scss'

function App() {
  const {
    add: addTodo,
    toggle: toggleTodo,
    del: delTodo,
    toggleAll,
    todos
  } = useTodos();
  const {
    status: activeStatus,
    toggle: toggleStatus
  } = useStatus()

  const filterTodos = activeStatus === STATUS_ALL_ITEMS ? todos : todos.filter(todo => todo.status === activeStatus)

  return (
    <div className="todo">
      <h1>TODO MVC use react hook</h1>
      <div className="todo-container">
        <TodoHeader add={addTodo} toggle={toggleAll} />
        <TodoContent todos={filterTodos} toggle={toggleTodo} />
        <TotoFooter
          todos={todos}
          activeStatus={activeStatus}
          toggle={toggleStatus}
          remove={delTodo}
        />
      </div>
    </div>
  );
}


export default App
