import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Protected from '../components/Protected'
import Notfound from '../pages/NotFound'

function Router() {
	const root = <Layout />

	const home = {
		path: '/',
		element: <Protected data={<Home />} />,
	}

	const login = {
		path: '/login',
		element: <Login />,
	}

	const notfound = {
		path: '*',
		element: <Notfound />,
	}

	const routes = [
		{
			element: root,
			children: [home, login, notfound],
		},
	]

	const router = createBrowserRouter(routes)

	return <RouterProvider router={router} />
}

export default Router
