import React from 'react';
import { connect } from 'react-redux';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';

constructor() {
  super();

  this.state = {};
}

addFavorite(movie) {
  let token = localStorage.getItem("token");
  let url =
    "https://flixnet-2020.herokuapp.com/users/" +
    localStorage.getItem("user") +
    "/favorites/" +
    movie._id;

  console.log(token);

  axios
    .post(url, "", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log(response);
      // window.open("/", "_self");
      window.open("/movies/" + movie._id, "_self");
      alert("Added to favorites!");
    });
}

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.Title.includes(visibilityFilter));
  }

  if (!movies) return <div className="main-view"/>;

  return <div className="movies-list">
      <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      {filteredMovies.map(m => <MovieCard key={m._id} movie={m}/>)}
    </div>;
}

export default connect(mapStateToProps)(MoviesList);

