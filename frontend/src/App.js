import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './layouts/client/css/styles.css';
import HomePage from './components/clientComponents/HomePage';
import CinemaHall from './components/clientComponents/CinemaHall';
import BookingForm from './components/clientComponents/BookingForm';


const days = [
  { weekday: 'Пн', number: 31, classes: ['page-nav__day_today'] },
  { weekday: 'Вт', number: 1, classes: [] },
  { weekday: 'Ср', number: 2, classes: ['page-nav__day_chosen'] },
  { weekday: 'Чт', number: 3, classes: [] },
  { weekday: 'Пт', number: 4, classes: [] },
  { weekday: 'Сб', number: 5, classes: ['page-nav__day_weekend'] },
];


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
                <Route path="/" element={<HomePage days={days} />} />
                <Route path="hall" element={<CinemaHall />} />
                <Route path="payment" element={<BookingForm />} />
            </Routes>
        </Router>
    </>


  );
}

export default App;
