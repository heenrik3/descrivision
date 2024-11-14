import { APP } from '../../../config'
import { useAuth } from '../../store/Auth/context'
import brain from '/psychology.svg'

function Header() {
	const { isAuth, logout, user } = useAuth()

	return (
		<header className='header'>
			<div className='logo'>
				<picture>
					<img src={brain} alt='' />
				</picture>
				<div>
					<h2>{APP}</h2>
					<span>Imagens em texto</span>
				</div>
			</div>

			<button className='btn'>Escolher imagem</button>
		</header>
	)
}

export default Header

// {isAuth && (
// 	<div className='user'>
// 		<p>{'Olá ' + user.name}</p>
// 		<button className='btn' onClick={logout}>
// 			Sair
// 		</button>
// 	</div>
// )}
