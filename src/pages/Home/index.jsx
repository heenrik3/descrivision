import { useEffect, useRef, useState } from 'react'
import brain from '/psychology.svg'
import search from '/search.svg'
import { APP } from '../../../config'

function Loader() {
	return (
		<div className='loader'>
			<div></div>
		</div>
	)
}

function Home() {
	const [image, setImage] = useState()
	const [description, setDescription] = useState('')
	const [isloading, setIsloading] = useState(false)

	const input = useRef()

	useEffect(() => {
		const tmp = document.createElement('input')
		tmp.type = 'file'
		tmp.accept = 'image/png, image/jpeg'
		tmp.onchange = onChange

		input.current = tmp
	}, [])

	function onPickImage() {
		input.current.click()
	}

	function onChange(e) {
		setImage(e.target.files[0])
		setDescription('')
	}

	function describeImage() {
		setIsloading(true)
		setDescription('')

		const formData = new FormData()
		formData.append('file', image)

		const xhr = new XMLHttpRequest()
		xhr.open('POST', import.meta.env.VITE_API, true)

		let received = ''

		xhr.onprogress = e => {
			setIsloading(false)

			const chunk = xhr.responseText.substring(received.length)

			setDescription(current => current + chunk)

			received = xhr.responseText
		}

		xhr.onload = function () {
			if (xhr.status === 200) {
			} else {
				setDescription('Erro no upload')
			}
		}

		xhr.send(formData)
	}

	return (
		<main className='home'>
			<section>
				<div className='actions'>
					<button onClick={onPickImage}>
						<img src={search} alt='' />
						<span>Selecionar Imagem</span>
					</button>
					<button
						onClick={describeImage}
						disabled={!image || isloading}
					>
						<img src={brain} alt='' />
						<span>Descrever</span>
					</button>
				</div>
			</section>
			<section>
				<picture>
					{image ? (
						<img src={URL.createObjectURL(image)} />
					) : (
						<span>{APP}</span>
					)}
				</picture>
			</section>
			<section>
				<div className='description'>
					{isloading ? <Loader /> : <span>{description}</span>}
				</div>
			</section>
		</main>
	)
}

export default Home
