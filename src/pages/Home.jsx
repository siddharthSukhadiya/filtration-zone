import { NavLink } from 'react-router-dom'
import { TbTarget } from 'react-icons/tb'
import { MdRemoveRedEye } from 'react-icons/md'
import { FaEarthAsia } from 'react-icons/fa6'

import './styles/home.css'
import heroBannerImg from '../assets/homePage/hero-banner-back.webp'
import aboutUsImg from '../assets/homePage/about-us.png'
import strainerSolution from '../assets/homePage/strainer-solution.png'
import teeStrainers from '../assets/homePage/tee-strainers.webp'
import filtersImg from '../assets/homePage/filters.webp'
import filterHousingImg from '../assets/homePage/filter-housing.webp'
import chooseUsBackground from '../assets/homePage/choose-us-background.png'

const Home = () => {

    return (<div id='home'>
        <section className='hero-section'>
            <div className='container'>
                <div className='hero-wrapper'>
                    <img src={heroBannerImg} alt='Hero Banner' />
                    <div className='text'>
                        <h4 className='title'>Reliable Filtration & Fitting Solutions for Every Industry</h4>
                        <p className='description'>Precision-engineered pipeline filters, valve housings, and flange fittings-designed for durability and efficiency in industrial applications.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='about-us'>
            <div className='container'>
                <div className='about-us-wrapper'>
                    <img src={aboutUsImg} alt='About us' />
                    <div className='text'>
                        <h4 className='title'>Leading Work That Saves Everyone's Life</h4>
                        <span className='line'></span>
                        <p className='sub-title'>Manufacturers of Stainer, Duplex Strainer, Basket Strainer, Y Type Strainer, Self Cleaning Filter</p>
                        <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was in the 1960s with the release of sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='strainer-solution'>
            <div className='container'>
                <div className='strainer-solution-wrapper'>
                    <div className='text'>
                        <h4 className='title'>All Type Strainer Solutions</h4>
                        <span className='line'></span>
                        <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was in the 1960s with the release of sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <img src={strainerSolution} alt='Strainer Solution' />
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
        </section>
        <section className='choose-us'>
            <div className='container'>
                <div className='heading'>
                    <h2 className='section-heading'>Why Choose Us</h2>
                </div>
                <div className='choose-us-wrapper'>
                    <img src={chooseUsBackground} alt='Choose us background' />
                    <div className='details'>
                        <p className='title'>Best Industrial Strainers Manufacturers and Suppliers in India - ACME Fluid Systems</p>
                        <p className='description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default </p>
                        <div className='list'>
                            <div className='list-items'>
                                <div className='icon'><TbTarget /></div>
                                <div className='data'>
                                    <p className='heading'>Our Mission</p>
                                    <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                                </div>
                            </div>
                            <div className='list-items'>
                                <div className='icon'><MdRemoveRedEye /></div>
                                <div className='data'>
                                    <p className='heading'>Our Vision</p>
                                    <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                                </div>
                            </div>
                            <div className='list-items'>
                                <div className='icon'><FaEarthAsia /></div>
                                <div className='data'>
                                    <p className='heading'>Our Values</p>
                                    <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>)
}

export default Home
