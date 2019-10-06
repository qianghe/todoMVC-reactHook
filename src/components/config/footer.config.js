export const STATUS_UNDO_ITEMS = 0
export const STATUS_DONE_ITEMS = 1
export const STATUS_ALL_ITEMS = 2

const statusSet = [{
	text: 'all',
	status: STATUS_ALL_ITEMS
}, {
	text: 'active',
	status: STATUS_UNDO_ITEMS
}, {
	text: 'completed',
	status: STATUS_DONE_ITEMS
}]

export default statusSet