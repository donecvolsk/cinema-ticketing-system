import React, { useEffect, useState } from 'react';
import moment from 'moment';

const HomePage = () => {
  // Генерация массива дней
  const currentDate = moment();
  const daysArray = Array.from({ length: 7 }, (_, i) => ({
    date: currentDate.clone().add(i, 'days').format('YYYY-MM-DD'),
    weekDay: currentDate.clone().add(i, 'days').format('ddd', 'ru')
  }));

  const [days] = useState(daysArray); // Устанавливаем дни изначально
  const [selectedDay, setSelectedDay] = useState(null); // Состояние для хранения выбранного дня
  const [session, setSession] = useState([]); // Данные сессий
  const [error, setError] = useState(null); // Для хранения сообщения об ошибке

  // Обработчик клика на день
  const handleClick = async (date) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/sessions?date=${date}`);
      if (!response.ok) throw new Error('Ошибка получения данных');
      const data = await response.json();
      setSession(data);
    } catch (err) {
      setError(err.message);
    }
    setSelectedDay(date);
    
  };

  // Логика вывода данных перенесена сюда
  useEffect(() => {
    if (session.length > 0) {
      console.log(session);
    }
  }, [session]);

  return (
    <>
    <nav className="page-nav">
      {days.map((day, index) => (
        <div
          key={index}
          className={`page-nav__day ${selectedDay === day.date ? 'page-nav__day_chosen' : ''} ${index === 0 ? 'page-nav__day_today' : ''}`}
          onClick={() => handleClick(day.date)}
        >
          <span className="page-nav__day-week">{day.weekDay}</span>
          <span className="page-nav__day-number">{day.date}</span>
        </div>
      ))}
      {/* Если произошла ошибка, показываем её */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="page-nav__day page-nav__day_next"></div>
    </nav>
    <section className="movie">
      <h2>выберите день показа</h2>
      <h1>Тут будет модуль MovieDetails</h1>
      {session.map((ses, index) => (
        <div key={index}>
          <p>Фильм: {ses.film_id}</p>
          <p>Зал: {ses.cinema_hall_id}</p>          
          <p>Начало сеанса: {ses.start_time}</p>
        
        </div>
))}
    </section>
    </>
  );
};

export default HomePage;