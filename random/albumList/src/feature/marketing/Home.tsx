import { useEffect, useState } from 'react'
import { instance } from '../../api/axios'
import './index.css'
import { useNavigate } from 'react-router-dom'

type Album = {
	userId: number
	id: number
	title: string
}

const Home = () => {
	const [albums, setAlbums] = useState<Album[] | null>(null)
	const navigate = useNavigate()

	const getAlbums = async () => {
		try {
			const response = await instance.get('/albums')
			setAlbums(response.data as Album[])
		} catch (error) {
			console.log(error)
		}
	}

	const handleAlbumClick = (id: number) => {
		navigate(`/album/${id}`)
	} 

	useEffect(() => {
		getAlbums()
	}, [])

	return (
		<div className='wrappper'>
			{!albums && <p>No Albums</p>}
			{albums?.map((ele, idx) => {
				return (
					<div key={idx} className='container' onClick={() => handleAlbumClick(ele.id)}>
						<h4>{ele.title}</h4>
						<h2>{ele.id}</h2>
					</div>
				)
			})}
		</div>
	)
}

export default Home
