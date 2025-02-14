import './styles/products.css'

import flange1Img from '../assets/products/flange1.webp'
import flange2Img from '../assets/products/flange2.webp'
import flange3Img from '../assets/products/flange3.webp'
import valve1Img from '../assets/products/valve1.webp'
import valve2Img from '../assets/products/valve2.webp'
import valve3Img from '../assets/products/valve3.webp'

const Products = () => {

	return (<div id='products'>
		<section className='hero-banner'>
			<div className='blur-back-dark'>
				<div className='container'>
					<h2>Our Products</h2>
				</div>
			</div>
		</section>
		<section className='product-section'>
			<div className='container'>
				<section className='flanges-section'>
					<h3 className='section-heading'>Fitting Flanges</h3>
					<div className='product-list'>
						<div className='product-card'>
							<img src={flange1Img} alt="Flange" className='product-image' />
							<h4>Weld Neck Flange</h4>
							<p><b>Size:</b> 1/2” to 24”</p>
						</div>
						<div className='product-card'>
							<img src={flange2Img} alt="Flange" className='product-image' />
							<h4>Threaded Flange</h4>
							<p><b>Size:</b> 1/2” to 6”</p>
						</div>
						<div className='product-card'>
							<img src={flange3Img} alt="Flange" className='product-image' />
							<h4>Socket weld Flange</h4>
							<p><b>Size:</b> 1/2” to 12”</p>
						</div>
					</div>
				</section>
				<section className='valve-section'>
					<h3 className='section-heading'>Industrial Valve</h3>
					<div className='product-list'>
						<div className='product-card'>
							<img src={valve1Img} alt="Valve" className='product-image' />
							<h4>Casted ball valve</h4>
							<p><b>Material:</b> WCB, CF8, CF8M</p>
						</div>
						<div className='product-card'>
							<img src={valve2Img} alt="Valve" className='product-image' />
							<h4>Gate Valve</h4>
							<p><b>Material:</b> WCB, CF8, CF8M, CF3, CF3M</p>
						</div>
						<div className='product-card'>
							<img src={valve3Img} alt="Valve" className='product-image' />
							<h4>Globe Valve</h4>
							<p><b>Material:</b> WCB, CF8, CF8M, CF3, CF3M</p>
						</div>
					</div>
				</section>
			</div>
		</section>
	</div>)
}

export default Products
