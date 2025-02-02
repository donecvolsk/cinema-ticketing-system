import React from 'react';
import SeanceHall from './SeanceHall';



  function MovieCard ({ movie }) {
    const { title, poster, synopsis, duration, origin, halls } = movie;
    return (
        <section className="movie">
            <div className="movie__info">
                <div className="movie__poster">
                    <img className="movie__poster-image" src={poster} alt={`${title} постер`}/>
                </div>
                <div className="movie__description">
                    <h2 className="movie__title">{title}</h2>
                    <p className="movie__synopsis">{synopsis}</p>
                    <p className="movie__data">
                        <span className="movie__data-duration">{duration}</span>
                        <span className="movie__data-origin">{origin}</span>
                    </p>
                </div>
            </div>
            {halls.map((hall, index) => (
            <SeanceHall key={index} hall={hall} />
            ))}
    </section>
    )
}

export default MovieCard ;