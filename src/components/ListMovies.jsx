import React from "react";
// Import CSS yang ingin kita gunakan di sini !
import "./ListMovies.css";
import CardMovie from "./CardMovie";
import CardMovieHeader from "../components/CardMovieHeader";

// Import JSON yang sudah kita copas tadi di sini.
import jsonMovies from "../data/movies.json";

const ListMovies = () => {
  return (
    <>
      <CardMovieHeader movie={jsonMovies.results.slice(1)} />
      <CardMovie movies={jsonMovies.results.slice(0, 8)} header="Popular" />
      <CardMovie movies={jsonMovies.results.slice(3, 11)} header="Original" />
      <CardMovie
        movies={jsonMovies.results.slice(1, 9)}
        header="Continue watching"
      />
      <CardMovie
        movies={jsonMovies.results.slice(4, 12)}
        header="Watch again"
      />
      <CardMovie movies={jsonMovies.results.slice(2, 10)} header="On agenda" />
    </>
  );
};

export default ListMovies;
