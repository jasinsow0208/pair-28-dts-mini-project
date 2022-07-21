import React from "react";
import Profile from "../components/Profile";
import styles from "./ProfilePage.module.css";

import { Typography, Grid, Button } from "@mui/material";

function ProfilePage() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "95vh" }}
      >
        <Typography variant="h3">Who's Watching?</Typography>
        <div className={styles.layout}>
          <Profile imageName="1" />
          <Profile imageName="2" />
          <Profile imageName="3" />
          <Profile imageName="4" />
        </div>
        <Button variant="outlined" size="large">
          MANAGE PROFILE
        </Button>
      </Grid>
    </>
  );
}

export default ProfilePage;
