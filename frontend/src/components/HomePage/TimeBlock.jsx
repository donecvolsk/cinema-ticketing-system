import React from 'react';

function TimeBlock ({ time  }) {
    return (
            <li className="movie-seances__time-block">
              <a className="movie-seances__time" href="hall.html">{time}</a>
            </li>
        );
    };

    export default TimeBlock;