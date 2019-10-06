import {
	useState
} from 'react'
import { STATUS_ALL_ITEMS } from '../components/config/footer.config'

function useStatus() {
	const [activeStatus, setStatus] = useState(STATUS_ALL_ITEMS)
	const toggle = status => {
		if (status === activeStatus) return
		setStatus(Number(status))
	}
	return {
		status: activeStatus,
		toggle
	}
}

export default useStatus