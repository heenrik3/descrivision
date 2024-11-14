import { useEffect, useRef, useState } from 'react'
import { APP_NAME, TYPE_REGEX } from '../../../config'
import toast from 'react-hot-toast'
import plus from '/add.svg'
import search from '/search.svg'
import brain from '/psychology.svg'
import frameimage from '/imagesmode.svg'

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
		const file = e.target.files[0]

		if (!TYPE_REGEX.test(file.type)) return

		setImage(file)
		setDescription('')
	}

	function describeImage() {
		setIsloading(true)
		setDescription('')

		const id = toast.loading('Enviando...')

		const formData = new FormData()
		formData.append('file', image)

		const xhr = new XMLHttpRequest()
		xhr.open('POST', import.meta.env.VITE_API, true)

		let received = ''

		xhr.onprogress = e => {
			// setIsloading(false)
			// const chunk = xhr.responseText.substring(received.length)
			// setDescription(current => current + chunk)
			// received = xhr.responseText
		}

		xhr.onreadystatechange = e => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				const responseText = xhr.responseText // Aqui está a resposta como string
				setIsloading(false)
				setDescription(responseText)
			}
		}

		xhr.onload = e => {
			if (xhr.status === 200) {
				toast.success('Análise concluída.', { id })
			} else toast.error('Erro ao analisar imagem!', { id })
		}

		xhr.onerror = e => {
			toast.error('Erro ao analisar imagem!', { id })
		}

		xhr.send(formData)
	}

	let pictureElement, descriptionElement

	if (image) {
		pictureElement = (
			<>
				<picture>
					{isloading && <div className='skeleton'>&nbsp;</div>}
					<img
						className={`image ${isloading ? 'loading' : ''}`}
						src={URL.createObjectURL(image)}
					/>
				</picture>
				<button
					onClick={describeImage}
					className={`btn ${isloading ? 'active' : ''}`}
					disabled={!image || isloading}
				>
					<img src={search} alt='' />
					{isloading ? 'Analisando...' : 'Analisar'}
				</button>
			</>
		)
	} else {
		pictureElement = (
			<span>
				<img src={frameimage} alt='' />
				Escolha uma imagem para começar 😉
			</span>
		)
	}

	if (isloading) descriptionElement = <h3>Carregando...</h3>
	else if (description && image) descriptionElement = <h3>{description}</h3>
	else descriptionElement = <span></span> //!description && !image

	return (
		<>
			<header className='header'>
				<div className='logo'>
					<picture>
						<img src={brain} alt='' />
					</picture>
					<div>
						<h2>{APP_NAME}</h2>
						<span>Imagens em texto</span>
					</div>
				</div>

				<button className='btn' onClick={onPickImage}>
					<img src={plus} alt='' />
					Escolher imagem
				</button>
			</header>

			<main>
				<section>
					<div className='image__card'>{pictureElement}</div>
					{description && (
						<div className='description__card'>
							{descriptionElement}
						</div>
					)}
				</section>
			</main>
		</>
	)
}

export default Home
