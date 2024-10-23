import { useNavigate } from 'react-router-dom'

function Notfound() {
	const navigate = useNavigate()

	navigate('/')
}

export default Notfound
