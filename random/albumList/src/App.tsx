import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './feature/marketing/Home'
import AlbumDetails from './feature/marketing/AlbumDetails'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='album/:id' element={<AlbumDetails />} />
		</Routes>
	)
}

export default App
