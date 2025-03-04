import './styles/products.css'

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
                <section className='valve-section'>
                    <h3 className='section-heading'>Industrial Valve</h3>
                    <div className='product-list'>
                        <div className='product-card'>
                            <img src={valve1Img} alt='product' className='product-image' />
                            <h4>Casted ball valve</h4>
                            <p><b>Material:</b> WCB, CF8, CF8M</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve2Img} alt='product' className='product-image' />
                            <h4>Gate Valve</h4>
                            <p><b>Material:</b> WCB, CF8, CF8M, CF3, CF3M</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Globe Valve</h4>
                            <p><b>Material:</b> WCB, CF8, CF8M, CF3, CF3M</p>
                        </div>
                    </div>
                </section>
                <section className='pipeline-strainers-section'>
                    <h3 className='section-heading'>Pipeline Strainers</h3>
                    <div className='product-list'>
                        <div className='product-card'>
                            <img src={valve1Img} alt='product' className='product-image' />
                            <h4>Y Type Strainer Cast</h4>
                            <p><b>Size:</b> ½” to 16”</p>
                            <p><b>Class:</b>150/300/600/900/1500</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve2Img} alt='product' className='product-image' />
                            <h4>Y Type Strainer Fabricated</h4>
                            <p><b>Size:</b> 2" to 24"</p>
                            <p><b>Class:</b>150/300</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Y Type Strainer (PTFE Lined)</h4>
                            <p><b>Size:</b> 1½” to 8”</p>
                            <p><b>Class:</b>150</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Pot Type Strainer</h4>
                            <p><b>Size:</b> ½” to 16”</p>
                            <p><b>Class:</b>150/300/600/900/1500</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Simplex Basket Filter</h4>
                            <p><b>Size:</b> ½” to 24”</p>
                            <p><b>Class:</b>150/300/600/900</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Cartridge Filter</h4>
                            <p><b>Size:</b> ½” to 24”</p>
                            <p><b>Class:</b>150/300/600/900</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Duplex Cartridge Filter</h4>
                            <p><b>Size:</b> ½” to 24”</p>
                            <p><b>Class:</b>150/300/600/900</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Conical / Temporary Strainers</h4>
                            <p><b>Size:</b> ½” to 48”</p>
                            <p><b>Class:</b>150/300/600/900</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </div>)
}

export default Products
