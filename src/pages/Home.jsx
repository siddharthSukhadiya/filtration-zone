import { NavLink } from 'react-router-dom'

import './styles/home.css'
import heroBannerImg from '../assets/homePage/hero-banner-back.webp'
import aboutUsImg from '../assets/homePage/about-us.png'
import teeStrainers from '../assets/homePage/tee-strainers.webp'
import filtersImg from '../assets/homePage/filters.webp'
import filterHousingImg from '../assets/homePage/filter-housing.webp'

const Home = () => {

	return (<div id='home'>
		<div className='hero-section'>
			<div className='container'>
				<div className='hero-wrapper'>
					<img src={heroBannerImg} alt='Hero Banner' />
					<div className='text'>
						<h3 className='title'>Reliable Filtration & Fitting Solutions for Every Industry</h3>
						<p className='description'>Precision-engineered pipeline filters, valve housings, and flange fittings-designed for durability and efficiency in industrial applications.</p>
					</div>
				</div>
			</div>
		</div>
		<div className='about-us'>
			<div className='container'>
				<div className='about-us-wrapper'>
					<img src={aboutUsImg} alt='About us' />
					<div className='text'>
						<h3 className='title'>Leading Work That Saves Everyone's Life</h3>
						<span className='line'></span>
						<p className='sub-title'>Manufacturers of Stainer, Duplex Strainer, Basket Strainer, Y Type Strainer, Self Cleaning Filter</p>
						<p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was in the 1960s with the release of sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like PageMaker including versions of Lorem Ipsum.</p>
					</div>
				</div>
			</div>
		</div>
		<div className='products'>
			<div className='container'>
				<div className='products-wrapper'>
					<div className='heading'>
						<h4>Our Products</h4>
					</div>
					<div className='list'>
						<div className='item'>
							<NavLink to='/pipeline'>
								<img src={filtersImg} alt='Pipeline Strainers & Filters' />
								<p>Pipeline Strainers & Filters</p>
							</NavLink>
						</div>
						<div className='item'>
							<NavLink to='/filter'>
								<img src={filterHousingImg} alt='Filter Housings' />
								<p>Filter Housings</p>
							</NavLink>
						</div>
						<div className='item'>
							<NavLink to='/valve'>
								<img src={teeStrainers} alt='Industrial Valve' />
								<p>Industrial Valve</p>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>)
}

export default Home
