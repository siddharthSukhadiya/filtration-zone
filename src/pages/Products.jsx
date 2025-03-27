import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './styles/products.css'

import valve1Img from '../assets/products/valve1.webp'
import valve2Img from '../assets/products/valve2.webp'
import valve3Img from '../assets/products/valve3.webp'
import Modal from '../components/Modal'

const Products = () => {
    const location = useLocation()

    const [informationPopup, setInformationPopup] = useState({ isOpen: false, currentProduct: '', currentIndex: 1 })
    const [currentIndex, setCurrentIndex] = useState(1);

    useEffect(() => {
        if (location.state?.section) {
            const element = document.getElementById(location.state.section)
            if (element) {
                setTimeout(() => {
                    const yOffset = element.getBoundingClientRect().top + window.scrollY - 100
                    window.scrollTo({ top: yOffset, behavior: 'smooth' })
                }, 100)
            }
        }
    }, [location])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1)
    }

    const yTypeStrainer = () => (<div className='product-slider'>
        <button className={currentIndex === 1 ? 'disable-arrow' : 'arrow'} disabled={currentIndex === 1} onClick={prevSlide}><FaChevronLeft /></button>
        <div className='slide' style={{ display: currentIndex === 1 ? 'flex' : 'none' }}>
            <img src={valve1Img} alt='product' className='product-image' />
            <div className='information'>
                <h4>Y Type Strainer Casted</h4>
                <p><b>Size:</b> ½” to 3”</p>
                <p><b>Class:</b>150/300/600</p>
            </div>
        </div>
        <div className='slide' style={{ display: currentIndex === 2 ? 'flex' : 'none' }}>
            <img src={valve1Img} alt='product' className='product-image' />
            <div className='information'>
                <h4>Y Type Strainer Fabricated</h4>
                <p><b>Size:</b> ½” to 3”</p>
                <p><b>Class:</b>150/300/600</p>
            </div>
        </div>
        <div className='slide' style={{ display: currentIndex === 3 ? 'flex' : 'none' }}>
            <img src={valve1Img} alt='product' className='product-image' />
            <div className='information'>
                <h4>Y Type Strainer Forging</h4>
                <p><b>Size:</b> ½” to 3”</p>
                <p><b>Class:</b>150/300/600</p>
            </div>
        </div>
        <div className='slide' style={{ display: currentIndex === 4 ? 'flex' : 'none' }}>
            <img src={valve1Img} alt='product' className='product-image' />
            <div className='information'>
                <h4>Y Type Strainer PTFE Lined</h4>
                <p><b>Size:</b> ½” to 3”</p>
                <p><b>Class:</b>150/300/600</p>
            </div>
        </div>
        <button className={currentIndex === 4 ? 'disable-arrow' : 'arrow'} disabled={currentIndex === 4} onClick={nextSlide}><FaChevronRight /></button>
    </div>)

    const basketTypeStrainer = () => (<div className='product-slider'>
        <button className={currentIndex === 1 ? 'disable-arrow' : 'arrow'} disabled={currentIndex === 1} onClick={prevSlide}><FaChevronLeft /></button>
        <div className='slide' style={{ display: currentIndex === 1 ? 'flex' : 'none' }}>
            <img src={valve1Img} alt='product' className='product-image' />
            <div className='information'>
                <h4>Basket Type Strainer Cast</h4>
                <p><b>Size:</b> ½” to 3”</p>
                <p><b>Class:</b>150/300/600</p>
            </div>
        </div>
        <div className='slide' style={{ display: currentIndex === 2 ? 'flex' : 'none' }}>
            <img src={valve1Img} alt='product' className='product-image' />
            <div className='information'>
                <h4>Basket Type Strainer Fabricated</h4>
                <p><b>Size:</b> ½” to 3”</p>
                <p><b>Class:</b>150/300/600</p>
            </div>
        </div>
        <button className={currentIndex === 2 ? 'disable-arrow' : 'arrow'} disabled={currentIndex === 2} onClick={nextSlide}><FaChevronRight /></button>
    </div>)

    const showProductPopup = (currentProduct) => {
        setInformationPopup({ isOpen: true, currentProduct })
        setCurrentIndex(1)
    }

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
                <section id='strainers'>
                    <h3 className='section-heading'>Strainers</h3>
                    <div className='product-list'>
                        <div className='product-card'>
                            <img src={valve1Img} alt='product' className='product-image' />
                            <h4>Y Type Strainer</h4>
                            <p><b>Size:</b> ½” to 16”</p>
                            <p><b>Class:</b>150/300/600/900/1500</p>
                            <div class='btn-wrapper'>
                                <button onClick={() => showProductPopup('yTypeStrainer')}>More Info</button>
                            </div>
                        </div>
                        <div className='product-card'>
                            <img src={valve2Img} alt='product' className='product-image' />
                            <h4>Basket Type Strainer</h4>
                            <p><b>Size:</b> 2' to 24'</p>
                            <p><b>Class:</b>150/300</p>
                            <div class='btn-wrapper'>
                                <button onClick={() => showProductPopup('basketTypeStrainer')}>More Info</button>
                            </div>
                        </div>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Conical Strainer</h4>
                            <p><b>Size:</b> 1½” to 8”</p>
                            <p><b>Class:</b>150</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Tee Strainer</h4>
                            <p><b>Size:</b> ½” to 16”</p>
                            <p><b>Class:</b>150/300/600/900/1500</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Duplex Strainer</h4>
                            <p><b>Size:</b> ½” to 24”</p>
                            <p><b>Class:</b>150/300/600/900</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Self Cleaning Strainer</h4>
                            <p><b>Size:</b> ½” to 24”</p>
                            <p><b>Class:</b>150/300/600/900</p>
                        </div>
                    </div>
                </section>
                <section id='industrial-valve'>
                    <h3 className='section-heading'>Industrial Valve</h3>
                    <div className='product-list'>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Ball valve</h4>
                            <p><b>Material:</b> WCB, CF8, CF8M</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Gate Valve</h4>
                            <p><b>Material:</b> WCB, CF8, CF8M, CF3, CF3M</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Globe Valve</h4>
                            <p><b>Material:</b> WCB, CF8, CF8M, CF3, CF3M</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Butterfly Valve</h4>
                            <p><b>Material:</b> WCB, CF8, CF8M, CF3, CF3M</p>
                        </div>
                    </div>
                </section>
                <section id='bag-filter'>
                    <h3 className='section-heading'>Bag filter</h3>
                    <div className='product-list'>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Bag filter housing</h4>
                            <p><b>Material:</b> WCB, CF8, CF8M</p>
                        </div>
                        <div className='product-card'>
                            <img src={valve3Img} alt='product' className='product-image' />
                            <h4>Cartridge filter Housing</h4>
                            <p><b>Material:</b> WCB, CF8, CF8M</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>

        <Modal isOpen={informationPopup.isOpen} onClose={() => setInformationPopup({ isOpen: false, currentProduct: '' })}>
            {informationPopup.currentProduct === 'yTypeStrainer' ? yTypeStrainer() : null}
            {informationPopup.currentProduct === 'basketTypeStrainer' ? basketTypeStrainer() : null}
        </Modal>
    </div>)
}

export default Products
