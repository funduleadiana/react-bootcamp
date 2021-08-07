import React from "react";
import "./moviePage.style.css";

const MoviePage = ({ title, releaseDate, image, vote }) => {
  return (
    <div className="card-container">
      <img
        src={`https://themoviedb.org/t/p/w300_and_h450_bestv2/${image}`}
        alt="poster"
        className="movie-poster"
      />
      <div className="text-container">
        <h5 className="title">{title}</h5>
        <p>Release date: {releaseDate}</p>
        <p>Vote: {vote}</p>
      </div>
    </div>
  );
};

export default MoviePage;
