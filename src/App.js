import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'

import './App.css';

function App() {
    return (
        <div id='App'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
