import React from 'react';
import { useState, useEffect } from 'react';
//import Navigation from './Navigation';
import MovieCard from './MovieCard';

/*const days = [
  { day: "Пн", number: 31, isToday: true },
  { day: "Вт", number: 1,  },
  { day: "Ср", number: 2,  },
  { day: "Чт", number: 3,  },
  { day: "Пт", number: 4, },
  { day: "Сб", number: 5, isWeekend: true }
];*/
/*const moviesTuday = [
  {
    title: "Звёздные войны XXIII: Атака клонированных клонов Сегодня",
    poster: "i/poster1.jpg",
    synopsis: "Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном.",
    duration: "130 минут",
    origin: "США",
    halls: [
      {
        hallTitle: "Зал 1",
        times: ["10:20", "14:10", "18:40", "22:00"]
      },
      {
        hallTitle: "Зал 2",
        times: ["11:15", "14:40", "16:00", "18:30", "21:00", "23:30"]
      }
    ]
  },
  {
    title: "Альфа",
    poster: "i/poster2.jpg",
    synopsis: "20 тысяч лет назад Земля была холодным и неуютным местом, в котором смерть подстерегала человека на каждом шагу.",
    duration: "96 минут",
    origin: "Франция",
    halls: [
      {
        hallTitle: "Зал 1",
        times: ["10:20", "14:10", "18:40", "22:00"]
      },
      {
        hallTitle: "Зал 2",
        times: ["11:15", "14:40", "16:00", "18:30", "21:00", "23:30"]
      }
    ]
  },
  {
    title: "Хищник",
    poster: "i/poster2.jpg",
    synopsis: "Самые опасные хищники Вселенной, прибыв из глубин космоса, высаживаются на улицах маленького городка, чтобы начать свою кровавую охоту. Генетически модернизировав себя с помощью ДНК других видов, охотники стали ещё сильнее, умнее и беспощаднее.",
    duration: "101 минута",
    origin: "Канада, США",
    halls: [
      {
        hallTitle: "Зал 1",
        times: ["09:00", "10:10", "12:55", "14:15", "14:50", "16:30", "18:00", "18:50", "19:50", "20:55", "22:00"]
      }
    ]
  }
];*/

function HomePage() {
  //const [selectedDay, setSelectedDay] = useState(days.find(day => day.isToday));// Состояние для хранения выбранного дня
  const [days, setDays] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/data')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDays(data.days);
        setMovies(data.movies);
        if (data.days.length > 0) {
          setSelectedDay(data.days[0]); // Устанавливаем первый день как выбранный
        }
      })
      .catch(error => console.error('Ошибка загрузки данных:', error));
  }, []);

  // Обработчик клика на день
  const handleClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <>
      <nav className="page-nav">
        {days.map((day, index) => (
          <div key={index} 
            className={`page-nav__day ${day === selectedDay ? 'page-nav__day_chosen' : ''} ${day.isToday ? 'page-nav__day_today' : ''} ${day.isWeekend ? 'page-nav__day_weekend' : ''}`}
            onClick={() => handleClick(day)}
          >
            <span className="page-nav__day-week">{day.day}</span>
            <span className="page-nav__day-number">{day.number}</span>
          </div>
        ))}
        <div className="page-nav__day page-nav__day_next"></div>
      </nav>

      <main>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </main>     
    </>
  );
};


export default HomePage;