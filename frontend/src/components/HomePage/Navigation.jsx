import React from 'react';

const days = [
    { day: "Пн", number: 31, isToday: true },
    { day: "Вт", number: 1 },
    { day: "Ср", number: 2, isChosen: true },
    { day: "Чт", number: 3 },
    { day: "Пт", number: 4 },
    { day: "Сб", number: 5, isWeekend: true }
  ];

function Navigation() {
    return (
        <nav className="page-nav">
            {days.map((day, index) => (
            <a key={index} 
                className={`page-nav__day ${day.isToday ? 'page-nav__day_today' : ''} ${day.isChosen ? 'page-nav__day_chosen' : ''} ${day.isWeekend ? 'page-nav__day_weekend' : ''}`}
                href="#">
                <span className="page-nav__day-week">{day.day}</span>
                <span className="page-nav__day-number">{day.number}</span>
            </a>
            ))}
            <a className="page-nav__day page-nav__day_next" href="#"></a>
        </nav>
    )
}

export default Navigation;