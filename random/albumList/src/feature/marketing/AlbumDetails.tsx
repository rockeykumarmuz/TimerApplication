import { useParams } from 'react-router-dom'
import { instance } from '../../api/axios'
import { useEffect, useState } from 'react'

type Photo = {
	albumId: number
	id: number
	title: string
	url: string
	thumbnailUrl: string
}

const Photo = () => {
	const [photos, setPhotos] = useState<Photo[]>()
	const { id } = useParams()

	const handleAlbumDetailShow = async () => {
		try {
			const response = await instance.get('/photos')
			const allAlbumPhotos = response.data as Photo[]
			const filtererdPhotos = allAlbumPhotos.filter(photo => photo.albumId === Number(id))
			setPhotos(filtererdPhotos)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		handleAlbumDetailShow()
	}, [id])

	return (
		<div className='image-wrapper'>
			{photos?.map((ele, idx) => {
				return (
					<div key={idx} className='image-container'>
						<img src={ele.url} alt='thumbnail image' />
					</div>
				)
			})}
		</div>
	)
}

export default Photo
