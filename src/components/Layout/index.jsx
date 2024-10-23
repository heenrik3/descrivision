import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import '../../style/main.sass'
import Footer from '../Footer'

function Layout() {
	const [height, setHeight] = useState(`${window.innerHeight}px`)

	useEffect(() => {
		const onResize = () => {
			setHeight(`${window.innerHeight}px`)
		}

		window.addEventListener('resize', onResize)

		return () => {
			window.removeEventListener('resize', onResize)
		}
	}, [height])

	return (
		<div className='app' style={{ height }}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
