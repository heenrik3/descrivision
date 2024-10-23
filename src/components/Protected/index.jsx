import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../store/Auth/context'

function Protected({ data }) {
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	useEffect(() => {
		if (!isAuth) navigate('/login')
	}, [isAuth])

	if (!isAuth) return null

	return data
}

export default Protected
