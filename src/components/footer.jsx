import React from 'react'
import statusSet, {
	STATUS_ALL_ITEMS,
	STATUS_UNDO_ITEMS,
	STATUS_DONE_ITEMS
} from './config/footer.config'

function Footer(props) {
	const { todos, activeStatus = STATUS_ALL_ITEMS, toggle } = props
	// 剩余undo的items
	const leftCount = todos.filter(
		todo => todo.status === STATUS_UNDO_ITEMS
	).length || 0
	// 已完成的items
	const completedTodos = todos.filter(todo => todo.status === STATUS_DONE_ITEMS)
	// 移除已完成的items
	const removeCompleted = () => completedTodos.forEach(({ id }) => props.remove(id))
	
	return (
		<div className="todo-footer">
			<span>{leftCount}{leftCount > 1 ? ' items' : ' item'} left</span>
			<ul className="todo-footer-status">
				{
					statusSet.map(({ status, text }, index) => (
						<li
							key={index}
							className={
								[
									'footer-status',
									status === activeStatus ? 'footer-status--active' : ''
								].join(' ')
							}
							onClick={() => toggle(status)}
						>{text}</li>
					))
				}
			</ul>
			{
				completedTodos.length ? (
					<span
						className="clear"
						onClick={removeCompleted}
					>Clear Completed</span>
				) : ''
			}
		</div>
	)
}

export default Footer