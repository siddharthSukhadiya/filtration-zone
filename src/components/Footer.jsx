import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles/footer.css'
import companyLogo from '../assets/companyLogoWhite.png'

import { MdCall, MdEmail } from 'react-icons/md';

const Footer = () => {

	return (<footer>
		<div className='container'>
		 	<div className='footer-wraper'>
		 		<div className='company'>
		 			<img src={companyLogo} alt='company-logo' />
		 			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
		 		</div>
		 		<div className='product'>
		 			<p className='title'>Product Range</p>
		 			<ul>
		 				<li><NavLink to='/'>Pipeline Filters</NavLink></li>
		 				<li><NavLink to='/'>Valve Housings</NavLink></li>
		 				<li><NavLink to='/'>Flange Fittings</NavLink></li>
		 			</ul>
		 		</div>
		 		<div className='links'>
		 			<p className='title'>Main Menu</p>
		 			<ul>
		 				<li><NavLink to='/'>Home</NavLink></li>
		 				<li><NavLink to='/products'>Products</NavLink></li>
		 				<li><NavLink to='/about'>About</NavLink></li>
		 				<li><NavLink to='/contact-us'>Contact Us</NavLink></li>
		 			</ul>
		 		</div>
		 		<div className='contact'>
		 			<p className='title'>Contact Us</p>
		 			<ul>
		 				<li><MdCall style={{ marginBottom: '-2px' }}/> <span> +91 96385 27410 </span></li>
		 				<li><MdEmail style={{ marginBottom: '-2px' }}/> filtration-zone@gmail.com</li>
		 			</ul>
		 		</div>
		 	</div>
		 </div>
	</footer>)
}

export default Footer
