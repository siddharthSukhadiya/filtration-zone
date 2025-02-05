
import '../styles/home.css'
import heroBannerImg from '../assets/homePage/hero-banner-back.webp'
import aboutUsImg from '../assets/homePage/about-us.png'

function Home () {

	return (<div id='home'>
		<div className='hero-section'>
            <div className='container'>
                <div className='hero-wrapper'>
                	<img src={heroBannerImg} alt='Hero Banner' />
                	<div className='text'>
                    	<h3 className='title'>Reliable Filtration & Fitting Solutions for Every Industry</h3>
                    	<p className='description'>Precision-engineered pipeline filters, valve housings, and flange fittings—designed for durability and efficiency in industrial applications.</p>
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
					    <p className='description'>Manufacturers of Staainer, Duplex Strainer, Basket Strainer, Y Type Strainer, Self Cleaning Filter</p>
					</div>
				</div>
			</div>
		</div>
	</div>)
}

export default Home
