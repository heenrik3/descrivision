import { APP } from '../../../config'

function Footer() {
	return (
		<footer>
			<span aria-label=''>
				{APP}® {new Date().getFullYear()}
			</span>
		</footer>
	)
}

export default Footer
