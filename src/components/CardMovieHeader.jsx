import React from "react";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

// Di sini kita mengetahui bahwa nantinya CardMovie akan menerima
// suatu data dari ListMovie, maka kita langsung saja
// menerima props di sini
const CardMovieHeader = (props) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";

  return (
    // di sini kita menggunakan Component Card dari MUI
    <Card>
      <Box
        className="boxy"
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {/* 
          Card ada 2 tipe yang bisa dimasukkan sebagai isinya: 
          CardMedia dan CardContent 
        */}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 1,
          }}
        >
          <Typography component="div" variant="h5">
            {props.movie[0].title}
          </Typography>
          <Typography variant="body1">Star world-English-Drama</Typography>
          <Typography component="div" variant="h6">
            {props.movie[0].overview}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ m: 1, p: 1, width: 286, height: 500 }}
          // Kita gunakan image berdasarkan prefix dari image tmdb
          image={`${baseUrlForMovie}${props.movie[0].poster_path}`}
          // image={props.movie.poster_path}
          alt={props.movie.title}
        ></CardMedia>
      </Box>
    </Card>
  );
};

export default CardMovieHeader;
