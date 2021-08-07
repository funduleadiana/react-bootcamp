import React from "react";
import MoviePage from "../MoviePage/MoviePage";
import "./movieList.styles.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list-container">
      {movies.map((movie) => (
        <MoviePage
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          image={movie.poster_path}
          vote={movie.vote_average}
        />
      ))}
    </div>
  );
};

export default MovieList;
