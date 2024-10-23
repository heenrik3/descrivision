import { APP } from '../../../config'
import { useAuth } from '../../store/Auth/context'

function Header() {
	const { isAuth, logout, user } = useAuth()

	return (
		<header className='header'>
			<div className='logo'>
				<h2>{APP}</h2>
			</div>

			{isAuth && (
				<div className='user'>
					<p>{'Olá ' + user.name}</p>
					<button className='btn' onClick={logout}>
						Sair
					</button>
				</div>
			)}
		</header>
	)
}

export default Header
