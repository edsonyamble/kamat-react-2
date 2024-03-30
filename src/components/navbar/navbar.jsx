import React from 'react'
import Nav from './navbar.module.css'
const Navbar = () => {
	return (
		<nav className={Nav.nav} >
			<div className={`${Nav.item}`}>
				<a href='#s'>Profile</a>
			</div>
			<div className={`${Nav['item']}`}>
				<a href='#s'>Messages</a>
			</div>
			<div className={Nav.item}>
				<a href='#s'>News</a>
			</div>
			<div className={Nav.item}>
				<a href='#s'>Musics</a>
			</div>
			<div className={Nav.item}>
				<a href='#s'>Settings</a>
			</div>
		</nav>
	)
}
export default Navbar
