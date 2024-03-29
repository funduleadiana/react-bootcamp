import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import SearchBar from "./components/SearchBar/SearchBar";

// const API_MOVIES =`https://api.themoviedb.org/3/discover/movie?api_key=c857fa67fba523ad3ce66df18e7ab279&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
// const API_MOVIE = `https://api.themoviedb.org/3/movie/${id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`
// const IMG_PATH = `https://image.tmdb.org/t/p/w300`

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchWord: "",
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=c857fa67fba523ad3ce66df18e7ab279&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );
      const data = await response.json();
      this.setState({ movies: data.results });
    } catch (err) {
      console.error(err);
    }
  }
  onChange = (ev) => {
    this.setState({ searchWord: ev.target.value });
  };
  onSubmitSearch = (e) => {
    // e.preventDefault();

    const filteredMovies = this.state.movies.filter((movie) =>
      movie.title.toLowerCase().includes(this.state.searchWord.toLowerCase())
    );
    console.log(this.state.movies);
    this.setState({ movies: filteredMovies });
  };
  render() {
    const { movies, searchWord } = this.state;

    return (
      <div className="App">
        <Header />
        <SearchBar
          onSubmit={this.onSubmitSearch}
          onChange={this.onChange}
          value={searchWord}
        />
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default App;
