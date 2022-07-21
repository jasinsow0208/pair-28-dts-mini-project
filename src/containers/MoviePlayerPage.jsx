import React from "react";

import NavBar from "../components/NavBar";
import ListMoviePlayer from "../components/ListMoviePlayer";
import { useParams } from "react-router-dom";

const MoviePlayerPage = () => {
  let params = useParams();
  console.log("ini di movieSelectedPage:", params);
  return (
    <>
      <NavBar />
      <ListMoviePlayer />
    </>
  );
};

export default MoviePlayerPage;
