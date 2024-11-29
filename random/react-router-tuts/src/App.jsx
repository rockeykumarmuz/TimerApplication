import './App.css'
import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import NewPost from './NewPost'
import PostPage from './PostPage'
import Missing from './Missing'
import Footer from './Footer'

function App() {
	return (
		<div className='App'>
			<Header />
			<Nav />
			<Home />
			<NewPost />
			<PostPage />
			<About />
			<Missing />
			<Footer />
		</div>
	)
}

export default App
