import { NavLink } from 'react-router-dom'
import { TbTarget } from 'react-icons/tb'
import { MdRemoveRedEye } from 'react-icons/md'
import { FaEarthAsia } from 'react-icons/fa6'

import './styles/home.css'
import companyLogo from '../assets/companyLogoWhite.png'
import aboutUsImg from '../assets/homePage/about-us.png'
import teeStrainers from '../assets/homePage/tee-strainers.webp'
import filtersImg from '../assets/homePage/filters.webp'
import filterHousingImg from '../assets/homePage/filter-housing.jpeg'
import chooseUsBackground from '../assets/homePage/choose-us-background.png'

const Home = () => {

    return (<div id='home'>
        <section className='hero-section'>
            <div className='blur-back-dark'>
                <div className='container'>
                    <div className='hero-wrapper'>
                        <img className='company-logo' src={companyLogo} alt='Hero Banner' />
                        <div className='text'>
                            <h4 className='title'>Reliable Filtration & Fitting Solutions for Every Industry</h4>
                            <p className='description'>Precision-engineered pipeline filters, valve housings, and tank and vessels designed for durability and efficiency in industrial applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='about-us'>
            <div className='container'>
                <div className='about-us-wrapper'>
                    <img src={aboutUsImg} alt='About us' />
                    <div className='text'>
                        <h4 className='title'>Uncompromising Purity, <br /> Unwavering Performance.</h4>
                        <span className='line'></span>
                        <p className='sub-title'>Manufacturers of Y Type Strainer, Duplex Strainer, Basket Strainer, Cone Type Strainer, Self Cleaning Filter, Cartridge Filter, tank and vessels.</p>
                        <p className='description'>
                            Our compony is a developing business entity engrossed in manufacturing and supplying process of best quality and top class industrial standard Strainers and Filters.
                            Our offerings in this category are inclusive of Manufacturers of Y Type Strainer, Duplex Strainer, Basket Strainer, Cone Type Strainer, Self Cleaning Filter, Cartridge filter, tank and vessels etc., are the most economical engineering equipment used for protecting valuable pieces of equipment like pumps, heat exchangers and flow meters from potentially damaging particles.
                            Our all type of filters and strainers ensure continuous fluid flow as well as hassle free operation, is a result of our adherence to the international quality standards and rigorous testing of each filter and strainer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className='choose-us'>
            <div className='container'>
                <div className='heading'>
                    <h2 className='section-heading'>Why Choose Us</h2>
                </div>
                <div className='choose-us-wrapper'>
                    <img src={chooseUsBackground} alt='Choose us background' />
                    <div className='details'>
                        <p className='title'>Best Industrial Strainers Manufacturers and Suppliers in India - Filtration Zone</p>
                        <p className='description'>We offer top-quality pipeline filters, valve, housings, tank and vessels designed for durability and efficiency. With advanced manufacturing, strict quality control, and a customer-first approach, we ensure reliable solutions for industrial needs. Our commitment to innovation, timely delivery, and competitive pricing makes us the trusted choice.</p>
                        <div className='list'>
                            <div className='list-items'>
                                <div className='icon'><TbTarget /></div>
                                <div className='data'>
                                    <p className='heading'>Our Mission</p>
                                    <p className='description'>We strive to deliver superior industrial solutions through precision engineering, advanced technology, and sustainable practices, ensuring efficiency and safety in every application.</p>
                                </div>
                            </div>
                            <div className='list-items'>
                                <div className='icon'><MdRemoveRedEye /></div>
                                <div className='data'>
                                    <p className='heading'>Our Vision</p>
                                    <p className='description'>To be the global leader in manufacturing high-quality pipeline filters, valve housings, tank and vessels, setting benchmarks in innovation, reliability, and customer satisfaction.</p>
                                </div>
                            </div>
                            <div className='list-items'>
                                <div className='icon'><FaEarthAsia /></div>
                                <div className='data'>
                                    <p className='heading'>Our Values</p>
                                    <p className='description'>Integrity, innovation, and excellence drive us. We are committed to quality, customer-centric solutions, and continuous improvement, fostering long-term partnerships and sustainable growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='products'>
            <div className='container'>
                <div className='products-wrapper'>
                    <div className='heading'>
                        <h2 className='section-heading'>Our Products</h2>
                    </div>
                    <div className='list'>
                        <div className='item'>
                            <NavLink to='/products' state={{ section: 'strainers' }}>
                                <img src={teeStrainers} alt='Strainers' />
                                <p>Strainers</p>
                            </NavLink>
                        </div>
                        <div className='item'>
                            <NavLink to='/products' state={{ section: 'industrial-valve' }}>
                                <img src={filtersImg} alt='Industrial Valve' />
                                <p>Industrial Valve</p>
                            </NavLink>
                        </div>
                        <div className='item'>
                            <NavLink to='/products' state={{ section: 'bag-filter' }}>
                                <img src={filterHousingImg} alt='Bag Filter Housings' />
                                <p>Bag Filter Housing</p>
                            </NavLink>
                        </div>
                        <div className='item'>
                            <NavLink to='/products' state={{ section: 'tank-vessels' }}>
                                <img src={filterHousingImg} alt='Tank and Vessels' />
                                <p>Tank and vessels</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>)
}

export default Home
