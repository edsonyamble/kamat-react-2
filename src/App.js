import React from 'react'
import './App.css'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Profile from './components/contento/profile'
function App() {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<Profile />
		</div>
	)
}

export default App
