
import '../styles/home.css'
import heroBanner from '../assets/homePage/hero-banner-back.webp'

function Home () {

	return (<div id='home'>
		<div className='hero-section'>
            <div className='container'>
                <div className='hero-wrapper'>
                	<img src={heroBanner} alt='Hero Banner' />
                	<div className='heading'>
                    	<h3>Reliable Filtration & Fitting Solutions for Every Industry</h3>
                    	<p>Precision-engineered pipeline filters, valve housings, and flange fittings—designed for durability and efficiency in industrial applications.</p>
                    </div>
                </div>
            </div>
		</div>
		<div className='about-us'>
			<div className='container'>
				<div className='about-us-wrapper'>
				</div>
			</div>
		</div>
	</div>)
}

export default Home
