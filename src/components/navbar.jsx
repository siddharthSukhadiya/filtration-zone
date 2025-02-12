import React from 'react'
import { NavLink } from 'react-router-dom'

import companyLogo from '../assets/companyLogo.png'
import './styles/navbar.css'

const Header = () => {

	return (<header>
		<div className='logo'>
			<NavLink to='/'>
				<img src={companyLogo} alt='Logo' />
			</NavLink>
		</div>
		<nav>
			<ul className='desktop-menu'>
				<li><NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : ''} >Home</NavLink></li>
				<li><NavLink to='/products' className={({ isActive }) => isActive ? 'active-link' : ''} >Products</NavLink></li>
				<li><NavLink to='/about' className={({ isActive }) => isActive ? 'active-link' : ''} >About</NavLink></li>
				<li><NavLink to='/contact-us' className='contact-us' >Contact Us</NavLink></li>
			</ul>
		</nav>
	</header>)
}

export default Header
