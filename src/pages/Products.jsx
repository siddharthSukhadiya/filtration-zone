import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './styles/products.css'

import yStrainer from '../assets/products/yStrainer.webp'
import yStrainer1 from '../assets/products/yStrainer_1.webp'
import yStrainer2 from '../assets/products/yStrainer_2.webp'
import yStrainer3 from '../assets/products/yStrainer_3.webp'
import yStrainer4 from '../assets/products/yStrainer_4.webp'
import basketStrainer1 from '../assets/products/basketStrainer1.webp'
import basketStrainer2 from '../assets/products/basketStrainer2.webp'
import conicalStrainer from '../assets/products/conicalStrainer.webp'
import teeStrainer from '../assets/products/teeStrainer.webp'
import duplexStrainer from '../assets/products/duplexStrainer.webp'
import selfCleaningFilter from '../assets/products/selfCleaningFilter.webp'
import valveBall from '../assets/products/valveBall.webp'
import valveGate from '../assets/products/valveGate.webp'
import valveGlobe from '../assets/products/valveGlobe.webp'
import valveButterfly from '../assets/products/valveButterfly.webp'
import filterHousing_cartridge from '../assets/products/filterHousing_cartridge.webp'
import filterHousing_bag from '../assets/products/filterHousing_bag.webp'

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
            <div className='image-wrapper'>
                <img src={yStrainer1} alt='Y Type Strainer Casted' className='product-image' />
            </div>
            <div className='information'>
                <h4>Y Type Strainer Casted</h4>
                <p><b>Size:</b> ½” to 3”</p>
                <p><b>Class:</b>150/300/600</p>
            </div>
        </div>
        <div className='slide' style={{ display: currentIndex === 2 ? 'flex' : 'none' }}>
            <div className='image-wrapper'>
                <img src={yStrainer2} alt='Y Type Strainer Fabricated' className='product-image' />
            </div>
            <div className='information'>
                <h4>Y Type Strainer Fabricated</h4>
                <p><b>Size:</b> ½” to 3”</p>
                <p><b>Class:</b>150/300/600</p>
            </div>
        </div>
        <div className='slide' style={{ display: currentIndex === 3 ? 'flex' : 'none' }}>
            <div className='image-wrapper'>
                <img src={yStrainer3} alt='Y Type Strainer Forging' className='product-image' />
            </div>
            <div className='information'>
                <h4>Y Type Strainer Forging</h4>
                <p><b>Size:</b> ½” to 3”</p>
                <p><b>Class:</b>150/300/600</p>
            </div>
        </div>
        <div className='slide' style={{ display: currentIndex === 4 ? 'flex' : 'none' }}>
            <div className='image-wrapper'>
                <img src={yStrainer4} alt='Y Type Strainer PTFE Lined' className='product-image' />
            </div>
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
            <div className='image-wrapper'>
                <img src={basketStrainer1} alt='Basket Type Strainer Cast' className='product-image' />
            </div>
            <div className='information'>
                <h4>Basket Type Strainer Cast</h4>
                <p><b>Size:</b> ½” to 3”</p>
                <p><b>Class:</b>150/300/600</p>
            </div>
        </div>
        <div className='slide' style={{ display: currentIndex === 2 ? 'flex' : 'none' }}>
            <div className='image-wrapper'>
                <img src={basketStrainer2} alt='Basket Type Strainer Fabricated' className='product-image' />
            </div>
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
                            <div className='image-wrapper'>
                                <img src={yStrainer} alt='Y Type Strainer' className='product-image' />
                            </div>
                            <h4>Y Type Strainer</h4>
                            <p><b>Size:</b> ½” to 16”</p>
                            <p><b>Class:</b>150/300/600/900/1500</p>
                            <div class='btn-wrapper'>
                                <button onClick={() => showProductPopup('yTypeStrainer')}>More Info</button>
                            </div>
                        </div>
                        <div className='product-card'>
                            <div className='image-wrapper'>
                                <img src={basketStrainer1} alt='Basket Type Strainer' className='product-image' />
                            </div>
                            <h4>Basket Type Strainer</h4>
                            <p><b>Size:</b> 2' to 24'</p>
                            <p><b>Class:</b>150/300</p>
                            <div class='btn-wrapper'>
                                <button onClick={() => showProductPopup('basketTypeStrainer')}>More Info</button>
                            </div>
                        </div>
                        <div className='product-card'>
                            <div className='image-wrapper'>
                                <img src={conicalStrainer} alt='Conical Strainer' className='product-image' />
                            </div>
                            <h4>Conical Strainer</h4>
                            <p><b>Size:</b> 1½” to 8”</p>
                            <p><b>Class:</b>150</p>
                        </div>
                        <div className='product-card'>
                            <div className='image-wrapper'>
                                <img src={teeStrainer} alt='Tee Strainer' className='product-image' />
                            </div>
                            <h4>Tee Strainer</h4>
                            <p><b>Size:</b> ½” to 16”</p>
                            <p><b>Class:</b>150/300/600/900/1500</p>
                        </div>
                        <div className='product-card'>
                            <div className='image-wrapper'>
                                <img src={duplexStrainer} alt='Duplex Strainer' className='product-image' />
                            </div>
                            <h4>Duplex Strainer</h4>
                            <p><b>Size:</b> ½” to 24”</p>
                            <p><b>Class:</b>150/300/600/900</p>
                        </div>
                        <div className='product-card'>
                            <div className='image-wrapper'>
                                <img src={selfCleaningFilter} alt='Self Cleaning Filter' className='product-image' />
                            </div>
                            <h4>Self Cleaning Filter</h4>
                            <p><b>Size:</b> ½” to 24”</p>
                            <p><b>Class:</b>150/300/600/900</p>
                        </div>
                    </div>
                </section>
                <section id='industrial-valve'>
                    <h3 className='section-heading'>Industrial Valve</h3>
                    <div className='product-list'>
                        <div className='product-card'>
                            <div className='image-wrapper'>
                                <img src={valveBall} alt='Ball valve' className='product-image' />
                            </div>
                            <h4>Ball Valve</h4>
                            <p><b>Material:</b> WCB, CF8, CF8M</p>
                        </div>
                        <div className='product-card'>
                            <div className='image-wrapper'>
                                <img src={valveGate} alt='Gate Valve' className='product-image' />
                            </div>
                            <h4>Gate Valve</h4>
                            <p><b>Material:</b> WCB, CF8, CF8M, CF3, CF3M</p>
                        </div>
                        <div className='product-card'>
                            <div className='image-wrapper'>
                                <img src={valveGlobe} alt='Globe Valve' className='product-image' />
                            </div>
                            <h4>Globe Valve</h4>
                            <p><b>Material:</b> WCB, CF8, CF8M, CF3, CF3M</p>
                        </div>
                        <div className='product-card'>
                            <div className='image-wrapper'>
                                <img src={valveButterfly} alt='Butterfly Valve' className='product-image' />
                            </div>
                            <h4>Butterfly Valve</h4>
                            <p><b>Material:</b> WCB, CF8, CF8M, CF3, CF3M</p>
                        </div>
                    </div>
                </section>
                <section id='bag-filter'>
                    <h3 className='section-heading'>Bag Filter</h3>
                    <div className='product-list'>
                        <div className='product-card'>
                            <div className='image-wrapper'>
                                <img src={filterHousing_bag} alt='Bag filter housing' className='product-image' />
                            </div>
                            <h4>Bag Filter Housing</h4>
                            <p><b>Material:</b> SS304, SS316</p>
                        </div>
                        <div className='product-card'>
                            <div className='image-wrapper'>
                                <img src={filterHousing_cartridge} alt='Cartridge filter Housing' className='product-image' />
                            </div>
                            <h4>Cartridge Filter Housing</h4>
                            <p><b>Material:</b> SS304, SS316</p>
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
