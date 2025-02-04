import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'

import './App.css';

function App() {
    return (
        <div id='App'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
