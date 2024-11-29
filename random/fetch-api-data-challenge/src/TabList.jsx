import { useState } from 'react'
import instance from './axios'

const TabList = () => {
	const [apidata, setApiData] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const handleTabDataFetch = async entity => {
		try {
			const response = await instance.get(entity)
			if (response.status === 200) {
				setApiData(response.data)
				setIsLoading(false)
			}
			return response.data
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<>
			<div class='container'>
				<div class='tab1' onClick={() => handleTabDataFetch('posts')}>
					Posts
				</div>
				<div class='tab2' onClick={() => handleTabDataFetch('users')}>
					Users
				</div>
				<div class='tab3' onClick={() => handleTabDataFetch('comments')}>
					Comments
				</div>
			</div>
			<div>{isLoading && <p style={{ textAlign: 'center', padding: '1rem' }}>Click on any tab to load data.</p>}</div>
			<div>
				<ul>
					{!isLoading &&
						apidata &&
						apidata.map(ele => {
							return (
								<li style={{ padding: '0.8rem' }} key={ele.id}>
									{JSON.stringify(ele)}
								</li>
							)
						})}
				</ul>
			</div>
		</>
	)
}
export default TabList
