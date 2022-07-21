import React from "react";

import NavBar from "../components/NavBar";
import ListMovieSelected from "../components/ListMovieSeleced";
import { useParams } from "react-router-dom";

const MovieSelectedPage = () => {
  let params = useParams();
  console.log("ini di movieSelectedPage:", params);
  return (
    <>
      <NavBar />
      <ListMovieSelected id={params.id} />
    </>
  );
};

export default MovieSelectedPage;
