import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardMovie = (props) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";

  const navigate = useNavigate();

  const clickMe = (movieId) => {
    navigate(`/MovieSelected/${movieId}`);
  };

  return (
    <>
      <br />
      <br />
      <Typography component="div" variant="h5">
        {props.header}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {props.movies.map((movie) => {
          return (
            <Card
              onClick={() => {
                clickMe(movie.id);
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  p: 1,
                  m: 0,
                  borderRadius: 2,
                }}
                // Kita gunakan image berdasarkan prefix dari image tmdb
                image={`${baseUrlForMovie}${movie.poster_path}`}
                alt={movie.title}
              ></CardMedia>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default CardMovie;
