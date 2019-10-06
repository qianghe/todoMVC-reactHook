import { useState } from 'react'

function useTodos() {
  const [todos, setTodos] = useState([{
      id: 1001,
      text: 'see a book',
      status: 0
  }]);
  const addTodo = text => {
    const id = todos.length ? todos[todos.length - 1].id : 1;
    todos.splice(todos.length, 1, {
      id: id + 1,
      text,
      status: 0
    });
    setTodos([...todos]);
  };
  const delTodo = id => {
    const delIndex = todos.findIndex(({ id: todoId }) => id === todoId);
    if (delIndex > -1) {
      todos.splice(delIndex, 1);
      setTodos([...todos]);
    }
  };
  const editTodo = (id, newText) => {
    const editIndex = todos.findIndex(({ id: todoId }) => id === todoId);
    if (editIndex > -1) {
      todos.splice(editIndex, 1, {
        ...todos[editIndex],
        text: newText
      });
      setTodos([...todos]);
    }
  };
  const toggleTodo = (id) => {
    const toggleIndex = todos.findIndex(({ id: todoId }) => id === todoId);
    if (toggleIndex > -1) {
        const todo = todos[toggleIndex]
        todos.splice(toggleIndex, 1, {
          ...todo,
          status: (parseInt(todo.status) + 1) % 2
        });
        setTodos([...todos]);
      }
  }
  const toggleAll = status => {
    todos.forEach(todo => todo.status = status)
    setTodos([...todos])
  }
  return {
    add: addTodo,
    del: delTodo,
    edit: editTodo,
    toggle: toggleTodo,
    toggleAll,
    todos,
  };
}

export default useTodos;
