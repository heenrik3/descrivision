import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from '../Footer'
import '../../style/main.sass'

function Layout() {
	const [height, setHeight] = useState(`${window.innerHeight}px`)

	useEffect(() => {
		const onResize = () => setHeight(`${window.innerHeight}px`)

		window.addEventListener('resize', onResize)

		return () => {
			window.removeEventListener('resize', onResize)
		}
	}, [height])

	return (
		<div className='app' style={{ height }}>
			<Outlet />
			<Footer />
			<Toaster />
		</div>
	)
}

export default Layout
