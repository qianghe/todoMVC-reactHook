import React from 'react'

function Footer(props) {
    const { todos } = props
    const leftCount = todos.filter(todo => todo.status === 0).length || 0
    return (
        <div className="todo-footer">
            <div>{leftCount} is Left</div>
        </div>
    )
}

export default Footer