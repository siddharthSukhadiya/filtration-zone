import './styles/products.css'
import basketFilterImg from '../assets/products/basket-filter-1.jpeg'
import coneFilterImg from '../assets/products/cone-filter.jpeg'
import potFilterImg from '../assets/products/pot-filter.jpeg'

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
				<div className='category-title'>
					<h3 className='section-heading'>Pipeline Strainers & Filters</h3>
				</div>
				<div className='product-list'>
					<div className='product-card'>
						<img src={basketFilterImg} alt="Basket Filter Img" className='product-image' />
						<h4>Basket Type</h4>
					</div>
					<div className='product-card'>
						<img src={coneFilterImg} alt="Cone Filter Img" className='product-image' />
						<h4>Cone Shape</h4>
					</div>
					<div className='product-card'>
						<img src={potFilterImg} alt="Pot Filter Img" className='product-image' />
						<h4>Pot Type</h4>
					</div>
				</div>
			</div>
		</section>
	</div>)
}

export default Products
