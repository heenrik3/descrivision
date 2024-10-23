import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../store/Auth/context'

function Login() {
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	useEffect(() => {
		if (isAuth) navigate('/')
	}, [isAuth])

	return (
		<div>
			<form className='login__form'>form</form>
		</div>
	)
}

export default Login
