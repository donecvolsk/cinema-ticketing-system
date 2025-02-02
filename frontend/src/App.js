import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './layouts/client/css/styles.css';
import HomePage from './components/HomePage/HomePage';
import HallPage from './components/hall';
import PaymentPage from './components/PaymentPage';



function App() {
  return (
    <>
    <header className="page-header">
      <a href='/'>
      <h1 className="page-header__title" >Идём<span>в</span>кино</h1>
      </a>
      
    </header>
    <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="hall" element={<HallPage />} />
                <Route path="payment" element={<PaymentPage />} />
            </Routes>
        </Router>
    </>


  );
}

export default App;
