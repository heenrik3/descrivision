import { APP_NAME } from '../../../config'

function Footer() {
	return (
		<footer>
			<span aria-label=''>
				{APP_NAME}® {new Date().getFullYear()}
			</span>
		</footer>
	)
}

export default Footer
