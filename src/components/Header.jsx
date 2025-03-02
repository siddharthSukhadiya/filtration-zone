import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import companyLogo from '../assets/companyLogo.png'
import './styles/header.css'
import { IoMenu } from 'react-icons/io5';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)

	const toggleDropdown = () => {
		setShowMenu((prev) => !prev);
	};

	return (<header>
		<div className='logo'>
			<NavLink to='/'>
				<img src={companyLogo} alt='Logo' />
			</NavLink>
		</div>
		<nav>
			<ul className='nav-links'>
				<li><NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : ''} >Home</NavLink></li>
				<li><NavLink to='/products' className={({ isActive }) => isActive ? 'active-link' : ''} >Products</NavLink></li>
				<li><NavLink to='/about' className={({ isActive }) => isActive ? 'active-link' : ''} >About</NavLink></li>
				<li><NavLink to='/contact-us' className='contact-us' >Contact Us</NavLink></li>
			</ul>
		</nav>
		<div className='menu-icon' onClick={toggleDropdown}>
			<IoMenu />
		</div>
		<ul className='dropdown-menu' style={showMenu ? { display: 'block' } : { display: 'none' }}>
			<li><NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : ''} onClick={toggleDropdown} >Home</NavLink></li>
			<li><NavLink to='/products' className={({ isActive }) => isActive ? 'active-link' : ''} onClick={toggleDropdown} >Products</NavLink></li>
			<li><NavLink to='/about' className={({ isActive }) => isActive ? 'active-link' : ''} onClick={toggleDropdown} >About</NavLink></li>
			<li><NavLink to='/contact-us' className={({ isActive }) => isActive ? 'active-link' : ''} onClick={toggleDropdown} >Contact Us</NavLink></li>
		</ul>
	</header>)
}

export default Header
