import { APP_NAME } from '../config'
import Router from './router'
import AuthProvider from './store/Auth/context'

function App() {
	document.title = APP_NAME

	return (
		<AuthProvider>
			<Router />
		</AuthProvider>
	)
}

export default App
