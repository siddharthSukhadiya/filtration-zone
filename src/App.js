import { lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

const Products = lazy(() => import('./pages/Products'))
const ContactUs = lazy(() => import('./pages/ContactUs'))

const App = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pathname])

    return (
        <div id='App'>
            <Header />
            <div style={{ marginTop: '100px' }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/filtration-zone' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/contact-us' element={<ContactUs />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
