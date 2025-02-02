import React from 'react';
import TimeBlock from './TimeBlock';

function SeanceHall ({ hall }) {
    const { hallTitle, times } = hall;
    return (
          <div className="movie-seances__hall">
            <h3 className="movie-seances__hall-title">{hallTitle}</h3>
            <ul className="movie-seances__list">
              {times.map((time, index) => (
                <TimeBlock key={index} time={time} />
              ))}
            </ul>
          </div>
        );
    };

    export default SeanceHall;
