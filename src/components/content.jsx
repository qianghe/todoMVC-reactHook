import React from "react";

function Content(props) {
  const { todos, toggle: toggleStatus } = props
  return (
    <ul className="todo-content">
      {todos.map(({ id, text, status }) => (
        <li
          key={id}
          className={[
            status === 0 ? 'todo-item--undo' : '',
            status === 1 ? 'todo-item--done' : ''
          ].join(' ')}
          onClick={() => toggleStatus(id)}
        >
          {text}
        </li>
      ))}
    </ul>
  );
}

export default Content;
