import React, { useState, useEffect } from 'react';
//React Router imports (Route, Link, and Switch)
import { Route, Switch } from "react-router-dom";
import axios from 'axios';

//Components for the different routes
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          console.log(response);
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      
      <Switch>
        <Route path="/movies/:id">
          <Movie />
        </Route>
        <Route path="/">
          <MovieList movies={movieList}/>
        </Route>
      </Switch>
      

    </div>
  );
}
