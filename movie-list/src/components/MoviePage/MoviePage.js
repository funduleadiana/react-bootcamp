import React from "react";

const MoviePage = ({ title, releaseDate, image, vote }) => {
  return (
    <div className="container">
      <img
        src={`https://themoviedb.org/t/p/w300_and_h450_bestv2/${image}`}
        alt="poster"
      />
      <h5>{title}</h5>
      <p>Release date: {releaseDate}</p>
      <p>Vote: {vote}</p>
    </div>
  );
};

export default MoviePage;

/**
 * {movies.map((movie) => (
          <MoviePage
            key={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            image={movie.poster_path}
            vote={movie.vote_average}
          />
        ))}
 */
