import React from "react";
import { Box } from "@mui/material";
import styles from "./CardMoviePlayer.module.css";

const CardMoviePlayer = () => {
  return (
    <Box
      className="boxy"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div>
        <iframe
          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
          width="500"
          height="300"
        />
      </div>
    </Box>
  );
};

export default CardMoviePlayer;
